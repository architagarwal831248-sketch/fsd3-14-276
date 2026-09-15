import { createReadStream } from "fs";
import http from "http";
const server = http.createServer((req,res)=> {
    if(req.url == "/"){
        res.setHeader("content-type", "text/html");
        res.statuscode = 200;
        const stream = createReadStream("./airtag.html", {
            encoding: "utf-8",
        });
        stream.pipe(res);
    }
    else if(req.url === '/mobile'){
        res.writeHead(200, {"content-type": "text/json"});

        const stream = createRadStream("./data/products.json",{
            encoding:"utf-8",
        });
    }
    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});
server.listen(4000,() => console.log("server is running"))
