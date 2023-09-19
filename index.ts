const server = Bun.serve({
  port: 5000,
  fetch(req) {
    return new Response("Hello");
  },
});

console.log(`Listening on port ${server.port}`);
