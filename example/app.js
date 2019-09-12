import test from "./test.f7";

const app = new Framework7({
  root: "#app",
  id: "com.test.app",
  routes: [
    {
      path: "/",
      component: test
    }
  ]
});
var homeView = app.views.create('#main-view', {
  url: '/'
});
console.log("Hi")