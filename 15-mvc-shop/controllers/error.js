exports.get404Page = (_req, res) => {
  res.status(404).render("404_page", { pageTitle: "not found", path: NaN });
};
