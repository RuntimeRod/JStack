const http = require("http");
const routes = require("./routes");
const { URL } = require("url");
const bodyParser = require("./helpers/bodyParser");

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  let { pathname } = parsedUrl;
  let id = null;
  const splitEndPoint = pathname.split("/").filter(Boolean);

  if (splitEndPoint.length > 1) {
    pathname = `/${splitEndPoint[0]}/:id`;
    id = splitEndPoint[1];
  }

  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === pathname && routeObj.method === request.method,
  );

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };
    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "content-type": "application/json" });
      response.end(JSON.stringify(body));
    };

    if (["PUT", "POST", "PATCH"].includes(request.method)) {
      bodyParser(request, () => {
        route.handler(request, response);
      });
    } else {
      route.handler(request, response);
    }
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

//Porta e abertura do servidor
server.listen(3000, () => {
  console.log("servidor on fire, http://localhost:3000");
});
