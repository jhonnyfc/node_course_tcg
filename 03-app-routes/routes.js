const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      "<form action='/message' method='POST'><input type='text' name='message'><br><button type='submit'>send</button></form>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const pasrseBody = Buffer.concat(body).toString();
      const message = pasrseBody.split("=")[1];
      // fs.writeFileSync("dumy.txt", message);
      fs.writeFile("dumy.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    // res.statusCode = 302;
    // res.setHeader("Location", "/");
    // return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<strong>jaja salu2</strong>");
  res.write("</html>");
  res.end();
};

// moudel.exports = { handler: requestHandler, someText: "some hard" };

// moudel.exports.handler = requestHandler;
// moudel.exports.handler.someText = "some hard";

// for node only for now
exports.handler = requestHandler;
exports.handler.someText = "some hard";
