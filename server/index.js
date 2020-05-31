import bodyParser from 'body-parser';
import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
  await app.prepare();
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));

  server.get("*", (req, res) => handle(req, res));
  server.listen(port, (err) => {
    if (err) throw err;

    console.log(`> Ready on localhost:${port}`);
  });
})();
