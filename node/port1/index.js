let express = require("express");

let app = express();

//设置跨域访问

// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://test.test.com:8080");

//   res.header("Access-Control-Allow-Credentials", true);

//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
//   );

//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

//   res.header("Content-Type", "application/json;charset=utf-8");

//   next();
// });

let data = {
  name: "wade",

  age: 18,
};

let api = "/api/user";

app.get(api, (req, res) => {
  res.send(data);
});

//配置服务端口

var server = app.listen(8000, "127.0.0.1", () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
