(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=(n(15),n(1)),s=n(2),l=n(4),u=n(3),h=n(5),d=n(9),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClick=function(e){e.preventDefault(),n.sound.play(),n.setState(function(){return{isClicked:!0}})},n.cancelPinch=function(e){e.preventDefault()},n.state={isClicked:!1},n.sound=new d.Howl({src:n.props.sound}),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.isClicked,n={backgroundColor:t?"white":"black",transition:"all ease",transitionDuration:t?"0s":"300ms"};t&&setTimeout(function(){e.setState(function(){return{isClicked:!1}})},1);var a="ontouchstart"in window?{onTouchStart:this.handleClick}:{onMouseDown:this.handleClick};return o.a.createElement("div",Object.assign({style:n},a,{onTouchMove:this.cancelPinch}))}}]),t}(o.a.Component),m=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.columns,n=e.rows,a=e.sounds,r={height:"100%",display:"grid",gridTemplateColumns:"1fr ".repeat(t),gridTemplateRows:"1fr ".repeat(n)},c=[],i=0;i<t*n;i++)c.push(o.a.createElement(p,{sound:a[i],key:i}));return o.a.createElement("div",{style:r},c)}}]),t}(o.a.Component),f=n(17),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleClick=function(){f.enabled&&f.request()},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.enabled&&f.onchange(function(){e.forceUpdate()})}},{key:"render",value:function(){return!f.enabled||f.isFullscreen?null:o.a.createElement("button",{style:{position:"absolute",right:0,top:0,fontSize:20},onClick:this.handleClick},"Fullscreen")}}]),t}(o.a.Component),k=["tom1.mp3","cymbal.mp3","tom2.mp3","tom3.mp3"].map(function(e){return"./sounds/".concat(e)}),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m,{columns:2,rows:2,sounds:k}),o.a.createElement(b,null))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.59fb65ad.chunk.js.map