(this["webpackJsonpheroes-infodex"]=this["webpackJsonpheroes-infodex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),s=(n(14),n(4)),i=n(5),l=n(8),h=n(6),u=n(1),d=n(7),m=(n(15),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:"https://robohash.org/".concat(e.robots.id,"set=set2&size=180x180"),alt:"robots"}),o.a.createElement("h1",null,e.robots.name),o.a.createElement("p",null,e.robots.email))}),f=(n(16),function(e){return o.a.createElement("div",{className:"card-list"},e.robots.map((function(e){return o.a.createElement(m,{key:e.id,robots:e})})))}),b=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return o.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),p=(n(18),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null," Robotic Rolodex "),o.a.createElement(b,{placeholder:"Search Robots",handleChange:this.handleChange}),o.a.createElement(f,{robots:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.0ed994f7.chunk.js.map