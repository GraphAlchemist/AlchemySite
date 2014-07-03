(function(){"use strict";angular.module("site",["ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html",controller:"MainCtrl"}).when("/examples",{templateUrl:"views/examples.html",controller:"MainCtrl",reloadOnSearch:!1}).when("/examples/FullApp",{templateUrl:"views/examples/example3viz.html",controller:"MainCtrl"})}])}).call(this),function(){"use strict";angular.module("site").controller("MainCtrl",["$scope","$location",function(a,b){return angular.element(document).ready(function(){return $("#tutorial").tooltip({placement:"bottom"}),$("#btn-alchemy-rel").tooltip({placement:"bottom"}),$("pre").addClass("prettyprint"),prettyPrint(),a.path=b.path()}),d3.json("../data/charlize.json",function(b){return a.movies=b}),d3.json("../data/contrib.json",function(b){return a.contrib=b})}]).controller("examplesCtrl",["$scope","$location",function(a,b){return a.init=function(){return a.examples=[{name:"Basic Graph",src:"views/examples/example1.html",id:"example1"},{name:"Embedded Graph",src:"views/examples/example2.html",id:"example2"},{name:"Full Application",src:"views/examples/example3.html",id:"example3"},{name:"Custom Styling",src:"views/examples/example4.html",id:"example4"}]},a.showExample=function(c){var d,e,f,g,h;for(a.current_example=c,h=a.examples,f=0,g=h.length;g>f;f++)d=h[f],a.current_example===d?$("."+d.id).addClass("active"):$("."+d.id).removeClass("active");return e=c.name.replace(" ","_"),b.hash(e)},a.showViz=function(){return $(".footer").addClass("hidden"),$(".navbar-fixed-top").addClass("hidden"),b.path("examples/FullApp")},a.hideViz=function(){return console.log("hideViz called"),$(".footer").removeClass("hidden"),$(".navbar-fixed-top").removeClass("hidden"),b.path("examples/")}}])}.call(this);