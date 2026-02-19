import React from "react";

function Post(props) {
  return (
    <article>
      <h2
        style={{
          fontFamily: "sans-serif",
        }}
      >
        {props.read ? <s>{props.title}</s> : props.title}{" "}
        <button onClick={() => props.onRemove(props.id)}>Remover</button>
      </h2>
    </article>
  );
}

export default Post;
