const http = require("http");
const routes = require("./routes");
const { URL } = require("url");


const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);
  
  const route = routes.find(
    (routeObj) =>
      routeObj.endpoint === parsedUrl.pathname &&
      routeObj.method === request.method,
  );
  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    route.handler(request, response);
  } else {
    response.writeHead(404, { "content-type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }

  if (parsedUrl.pathname !== "/favicon.ico") {
    console.log(
      `request method: ${request.method}, endpoint: ${parsedUrl.pathname}`,
    );
  }
});

//Porta e abertura do servidor
server.listen(3000, () => {
  console.log("servidor on fire, http://localhost:3000");
});
