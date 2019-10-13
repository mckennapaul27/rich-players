const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();
const path = require('path')
const bodyParser = require('body-parser')
const compression = require('compression')  

app.prepare()
.then(() => {
    const server = express();
    server.use(compression()) 
    server.use(bodyParser.json());
    server.use(function(req, res, next) {
      if(req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
        const secureUrl = "https://" + req.headers['host'] + req.url; 
        res.writeHead(301, { "Location":  secureUrl });
        res.end();
      }
      next();
    });

    server.get('/sitemap.xml', (req, res) => {
      const sitemap = path.join(__dirname, 'static', 'sitemap.xml')
      app.serveStatic(req, res, sitemap)
    })

    server.get('/robots.txt', (req, res) => {
      const robots = path.join(__dirname, 'static', 'robots.txt')
      app.serveStatic(req, res, robots)
    })

    server.get('*', (req, res) => {
      return handle(req, res);
    })
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Listening on port ${port}...`);
    });
})
.catch((ex) => {
    console.log(ex)
    process.exit(1);
})