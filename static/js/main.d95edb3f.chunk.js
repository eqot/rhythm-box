(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(8),i=n.n(r),c=(n(15),n(1)),s=n(2),u=n(4),l=n(3),d=n(5),h=n(9),m=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).handleClick=function(){n.sound.play(),n.setState(function(){return{isClicked:!0}})},n.state={isClicked:!1},n.sound=new h.Howl({src:n.props.sound}),n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.state.isClicked,n={backgroundColor:e?"white":"black",transition:"all ease",transitionDuration:e?"0s":"300ms"};e&&setTimeout(function(){t.setState(function(){return{isClicked:!1}})},1);var o="ontouchstart"in window?{onTouchStart:this.handleClick}:{onMouseDown:this.handleClick};return a.a.createElement("div",Object.assign({style:n},o))}}]),e}(a.a.Component),p=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){for(var t=this.props,e=t.columns,n=t.rows,o=t.sounds,r={height:"100%",display:"grid",gridTemplateColumns:"1fr ".repeat(e),gridTemplateRows:"1fr ".repeat(n)},i=[],c=0;c<e*n;c++)i.push(a.a.createElement(m,{sound:o[c],key:c}));return a.a.createElement("div",{style:r},i)}}]),e}(a.a.Component),b=["tom1.mp3","cymbal.mp3","tom2.mp3","tom3.mp3"].map(function(t){return"./sounds/".concat(t)}),f=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(p,{columns:2,rows:2,sounds:b})}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.d95edb3f.chunk.js.map