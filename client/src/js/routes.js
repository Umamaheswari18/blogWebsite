var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
//var DefaultRoute = Router.DefaultRoute;
//var IndexRoute=Router.IndexRoute;

//var MainLayout=require('./components/MainLayout').MainLayout;
var Home=require('./components/Home');

var MovieBox=require('./components/MovieBox');
var NewBlog=require('./components/newBlog');

var LoginBox=require('./components/login');

var TechBlog=require('./components/tech');
var FunBlog=require('./components/fun');

// var Hello=require('./components/hello');

module.exports = (
  <Route>
      <Route path="/" handler={LoginBox} />
      <Route path="/login" handler={LoginBox} />
      <Route path="/home" handler={Home} />
      <Route path="/blogs" handler={MovieBox} />
      <Route path="/tech" handler={TechBlog} />
      <Route path="/fun" handler={FunBlog} />
      <Route path="/newBlog" handler={NewBlog} />


    </Route>
);
