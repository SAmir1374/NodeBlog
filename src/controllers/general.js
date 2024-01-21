export function home(req, res) {
  return res.render("index", { title: "Home Page", content: "Home Content" });
}

export function about(req, res) {
  return res.render("about", { title: "About Page", content: "About Content" });
}

export function contact(req, res) {
  return res.render("contact", { title: "Contact Page", content: "Contact Content" });
}
