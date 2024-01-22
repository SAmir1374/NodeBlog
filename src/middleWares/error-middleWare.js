export default (err, req, res, next) => {
  const status = err.status ?? 500;

  const message = err.status < 500 ? err.message : `Server Error Please Call To Admin`;

  res.status(status).render("error", {
    title: `ERROR ${err.status}`,
    content: message,
  });
};
