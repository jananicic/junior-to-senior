(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),s=(n(15),n(17),n(1)),l=n.n(s),i=n(4),u=n(5),h=n(6),m=n(8),d=n(7),b=n(9),p=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:n,src:"https://robohash.org/".concat(t,"/200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},f=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(p,{id:t[n].id,name:t[n].name,email:t[n].email})}))},v=function(e){var t=e.searchchange;return r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px black solid",height:"800px"}},e.children)},E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(i.a)(l.a.mark(function t(){var n,a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,e.setState({robots:a});case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=this.state.robots.filter(function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(v,{searchchange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(f,{robots:t})))}}]),t}(a.Component);o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.78a8a485.chunk.js.map