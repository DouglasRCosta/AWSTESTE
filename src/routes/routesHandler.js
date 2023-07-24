const options = {
  "/:GET": (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ hello: "hello" }));
    res.end();
  },
  "/posts:GET": (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ posts: "posts" }));
    res.end();
  },

  default: (req, res) => {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ err: "erro" }));
    res.end();
  },
};

const handler = (req, res) => {
  const { url, method } = req;

  try {
    const route = options[`${url}:${method}`] || options.default;

    return route(req, res);
  } catch (error) {
    InternalError(req, res);
  }
};

const InternalError = (req, res) => {
  res.statusCode = 400;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ err: "erro Interno no servidor" }));
  res.end();
};

export default handler;
