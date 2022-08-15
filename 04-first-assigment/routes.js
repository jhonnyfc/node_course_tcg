const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<p>some greeting text</p>");
    res.write(
      "<form action='/create-user' method='POST'><input type='text' name='data'><button type='submint'>submint</button></form>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<ul>");
    res.write("<li>user 1</li>");
    res.write("<li>user 2</li>");
    res.write("</ul>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const pasrseBody = Buffer.concat(body).toString();
      const message = pasrseBody.split("=")[1];
      console.log(message);
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

exports.handler = requestHandler;
