(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"about\">\n  <h1>About</h1>\n</div>\n";
},"useData":true});
templates['blog'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"blog\">\n  <h1>Blog</h1>\n</div>";
},"useData":true});
templates['contact'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"contact\">\n  <h1>Contact</h1>\n</div>\n";
},"useData":true});
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"homepage\">\n  <h1>Welcome to Nayoon's Website</h1>\n</div>\n";
},"useData":true});
templates['test-prep'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"test-prep\">\n  <h1>Test Prep</h1>\n</div>\n";
},"useData":true});
templates['tutoring'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"academic-tutoring\">\n  <h1>Academic Tutoring</h1>\n</div>\n";
},"useData":true});
})();