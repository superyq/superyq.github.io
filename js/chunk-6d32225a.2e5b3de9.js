(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d32225a","chunk-398d1ae6","chunk-f6741ad8","chunk-0e9c210e","chunk-4152e781","chunk-24c5e7d2","chunk-97a5ddbe","chunk-9ffca46e","chunk-2d0dd600","chunk-2d22bcf5"],{"081f":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"advAnimation",width:"800",height:"800"}})},r=[],n=(a("6c7b"),new Image),i=new Image,l=new Image,d={methods:{drawSun:function(e){e.globalCompositeOperation="destination-over",e.clearRect(0,0,800,800),e.fillStyle="rgba(0,0,0,0.4)",e.strokeStyle="rgba(0,153,255,0.4)",e.save(),e.translate(400,400);var t=new Date;e.rotate(2*Math.PI/60*t.getSeconds()+2*Math.PI/6e4*t.getMilliseconds()),e.translate(105,0),e.fillRect(0,-12,50,24),e.drawImage(l,-12,-12),e.save(),e.rotate(2*Math.PI/6*t.getSeconds()+2*Math.PI/6e3*t.getMilliseconds()),e.translate(0,28.5),e.drawImage(i,-3.5,-3.5),e.restore(),e.restore(),e.beginPath(),e.arc(400,400,105,0,2*Math.PI,!1),e.stroke(),e.drawImage(n,250,250,300,300)},drawClock:function(e){var t=new Date;e.save(),e.clearRect(0,0,150,150),e.translate(75,75),e.scale(.4,.4),e.rotate(-Math.PI/2),e.strokeStyle="black",e.fillStyle="white",e.lineWidth=8,e.lineCap="round",e.save();for(var a=0;a<12;a++)e.beginPath(),e.rotate(Math.PI/6),e.moveTo(100,0),e.lineTo(120,0),e.stroke();for(e.restore(),e.save(),e.lineWidth=5,a=0;a<60;a++)a%5!=0&&(e.beginPath(),e.moveTo(117,0),e.lineTo(120,0),e.stroke()),e.rotate(Math.PI/30);e.restore();var o=t.getSeconds(),r=t.getMinutes(),n=t.getHours();n=n>=12?n-12:n,e.fillStyle="black",e.save(),e.rotate(n*(Math.PI/6)+Math.PI/360*r+Math.PI/21600*o),e.lineWidth=14,e.beginPath(),e.moveTo(-20,0),e.lineTo(80,0),e.stroke(),e.restore(),e.save(),e.rotate(Math.PI/30*r+Math.PI/1800*o),e.lineWidth=10,e.beginPath(),e.moveTo(-28,0),e.lineTo(112,0),e.stroke(),e.restore(),e.save(),e.rotate(o*Math.PI/30),e.strokeStyle="#D40000",e.fillStyle="#D40000",e.lineWidth=6,e.beginPath(),e.moveTo(-30,0),e.lineTo(83,0),e.stroke(),e.beginPath(),e.arc(0,0,10,0,2*Math.PI,!0),e.fill(),e.beginPath(),e.arc(95,0,10,0,2*Math.PI,!0),e.stroke(),e.fillStyle="rgba(0,0,0,0)",e.arc(0,0,3,0,2*Math.PI,!0),e.fill(),e.restore(),e.beginPath(),e.lineWidth=14,e.strokeStyle="#325FA2",e.arc(0,0,142,0,2*Math.PI,!0),e.stroke(),e.restore()},drawImages:function(e){var t=new Image;t.src="https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg";var a,o,r,n,i=800,l=200,d=30,s=1.05,c=-4.5,f=.75,u=0;t.onload=function(){return a=t.width*s,o=t.height*s,a>i&&(u=i-a),r=a>i?a:i,n=o>l?o:l,setInterval(function(){e.clearRect(0,0,r,n),a<=i?(u>i&&(u=0),u>i-a&&e.drawImage(t,u-i+1,c,a,o)):(u>i&&(u=i-a),u>i-a&&e.drawImage(t,u-a+1,c,a,o)),e.drawImage(t,u,c,a,o),u+=f},d)}}},mounted:function(){var e=document.getElementById("advAnimation"),t=e.getContext("2d");n.src="https://mdn.mozillademos.org/files/1456/Canvas_sun.png",i.src="https://mdn.mozillademos.org/files/1443/Canvas_moon.png",l.src="https://mdn.mozillademos.org/files/1429/Canvas_earth.png",this.drawImages(t)}},s={name:"AdvAnimation",mixins:[d]},c=s,f=a("2877"),u=Object(f["a"])(c,o,r,!1,null,null,null);t["default"]=u.exports},"2c52":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"advTransformations",width:"800",height:"800"}})},r=[],n=(a("6c7b"),{methods:{drawSaveOrRestore:function(e){e.fillRect(0,0,150,150),e.save(),e.fillStyle="#09F",e.fillRect(15,15,120,120),e.save(),e.fillStyle="#FFF",e.globalAlpha=.5,e.fillRect(30,30,90,90),e.save(),e.restore(),e.fillRect(45,45,60,60),e.restore(),e.fillRect(60,60,30,30)},drawTranslating:function(e){for(var t=0;t<3;t++)for(var a=0;a<3;a++)e.save(),e.fillStyle="rgb(".concat(51*t,", ").concat(255-51*t,", 255)"),e.translate(200+50*a,10+50*t),e.fillRect(0,0,25,25),e.restore()},drawRotating:function(e){e.translate(450,70);for(var t=0;t<6;t++){e.save(),e.fillStyle="rgb(".concat(51*t,", ").concat(255-51*t,", 255)");for(var a=0;a<6*t;a++)e.rotate(2*Math.PI/(6*t)),e.beginPath(),e.arc(0,12.5*t,5,0,2*Math.PI,!0),e.fill();e.restore()}},drawScaling:function(e){e.save(),e.scale(10,3),e.fillRect(1,10,10,10),e.restore(),e.scale(-1,1),e.font="48px serif",e.fillText("MDN",-135,120)}},mounted:function(){var e=document.getElementById("advTransformations"),t=e.getContext("2d");this.drawSaveOrRestore(t),this.drawTranslating(t),this.drawRotating(t),this.drawScaling(t)}}),i={name:"AdvTransformations",mixins:[n]},l=i,d=a("2877"),s=Object(d["a"])(l,o,r,!1,null,null,null);t["default"]=s.exports},3113:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"baseControl",width:"800",height:"800"}},[e._v("Your browser does not support the Canvas API, Please upgrade your browser.")])},r=[],n=(a("6c7b"),{methods:{drowRect:function(e){e.fillRect(0,0,50,50),e.strokeRect(100,0,50,50),e.clearRect(100,0,50,50)},dorwTriangle:function(e){e.beginPath(),e.moveTo(175,50),e.lineTo(200,75),e.lineTo(200,25),e.fill()},drowLaugh:function(e){e.beginPath(),e.arc(275,75,50,0,2*Math.PI,!0),e.moveTo(310,75),e.arc(275,75,35,0,Math.PI,!1),e.moveTo(265,65),e.arc(260,65,5,0,2*Math.PI,!0),e.moveTo(295,65),e.arc(290,65,5,0,2*Math.PI,!0),e.stroke()},drowTalkBox:function(e){e.beginPath(),e.moveTo(475,25),e.quadraticCurveTo(425,25,425,62.5),e.quadraticCurveTo(425,100,450,100),e.quadraticCurveTo(450,120,430,125),e.quadraticCurveTo(460,120,465,100),e.quadraticCurveTo(525,100,525,62.5),e.quadraticCurveTo(525,25,475,25),e.stroke()},dorwLove:function(e){e.beginPath(),e.moveTo(675,40),e.bezierCurveTo(675,37,670,25,650,25),e.bezierCurveTo(615,25,615,62.5,617,62.5),e.bezierCurveTo(620,80,640,102,675,120),e.bezierCurveTo(710,102,730,80,732,62.5),e.bezierCurveTo(735,62.5,732,25,705,25),e.bezierCurveTo(685,25,675,37,675,40),e.fill()},dorwGame:function(e){this.roundedRect(e,12,512,150,150,15),this.roundedRect(e,53,553,49,33,10),this.roundedRect(e,53,619,49,16,6),this.roundedRect(e,135,553,49,33,10),this.roundedRect(e,135,619,25,49,10),e.beginPath(),e.arc(37,537,13,Math.PI/7,-Math.PI/7,!1),e.lineTo(37,537),e.fill();for(var t=0;t<8;t++)e.fillRect(51+16*t,535,4,4);for(t=0;t<6;t++)e.fillRect(115,551+16*t,4,4);for(t=0;t<8;t++)e.fillRect(51+16*t,599,4,4);e.beginPath(),e.moveTo(83,616),e.lineTo(83,602),e.bezierCurveTo(83,594,89,588,97,588),e.bezierCurveTo(105,588,111,594,111,602),e.lineTo(111,616),e.lineTo(106.333,611.333),e.lineTo(101.666,616),e.lineTo(97,611.333),e.lineTo(92.333,616),e.lineTo(87.666,611.333),e.fill(),e.fillStyle="white",e.beginPath(),e.moveTo(91,596),e.bezierCurveTo(88,596,87,599,87,601),e.bezierCurveTo(87,603,88,606,91,606),e.bezierCurveTo(94,606,95,603,95,601),e.bezierCurveTo(95,599,94,596,91,596),e.moveTo(103,596),e.bezierCurveTo(100,596,99,599,99,601),e.bezierCurveTo(99,603,100,606,103,606),e.bezierCurveTo(106,606,107,603,107,601),e.bezierCurveTo(107,599,106,596,103,596),e.fill(),e.fillStyle="black",e.beginPath(),e.arc(101,602,2,0,2*Math.PI,!0),e.fill(),e.beginPath(),e.arc(89,602,2,0,2*Math.PI,!0),e.fill()},roundedRect:function(e,t,a,o,r,n){e.beginPath(),e.moveTo(t,a+n),e.lineTo(t,a+r-n),e.quadraticCurveTo(t,a+r,t+n,a+r),e.lineTo(t+o-n,a+r),e.quadraticCurveTo(t+o,a+r,t+o,a+r-n),e.lineTo(t+o,a+n),e.quadraticCurveTo(t+o,a,t+o-n,a),e.lineTo(t+n,a),e.quadraticCurveTo(t,a,t,a+n),e.stroke()},dorwPath2D:function(e){var t=new Path2D;t.rect(10,200,50,50);var a=new Path2D;a.moveTo(125,205),a.arc(100,205,25,0,2*Math.PI,!1),e.fill(t),e.stroke(a)}},mounted:function(){var e=document.getElementById("baseControl"),t=e.getContext("2d");this.drowRect(t),this.dorwTriangle(t),this.drowLaugh(t),this.drowTalkBox(t),this.dorwLove(t),this.dorwGame(t),this.dorwPath2D(t)}}),i={name:"baseControl",mixins:[n]},l=i,d=a("2877"),s=Object(d["a"])(l,o,r,!1,null,null,null);t["default"]=s.exports},"36bd":function(e,t,a){"use strict";var o=a("4bf8"),r=a("77f1"),n=a("9def");e.exports=function(e){var t=o(this),a=n(t.length),i=arguments.length,l=r(i>1?arguments[1]:void 0,a),d=i>2?arguments[2]:void 0,s=void 0===d?a:r(d,a);while(s>l)t[l++]=e;return t}},"6c7b":function(e,t,a){var o=a("5ca1");o(o.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},"80b4":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"baseImage",width:"800",height:"800"}})},r=[],n=a("15ea"),i=a.n(n),l=a("e3ff"),d=a.n(l),s={data:function(){return{img1:i.a,img2:d.a}},methods:{drowImages:function(e){var t=new Image;t.onload=function(){for(var a=0;a<4;a++)for(var o=0;o<3;o++)e.drawImage(t,50*o,38*a,50,38)},t.src=this.img1},drowSlicing:function(e){var t=new Image;t.src=this.img2,t.onload=function(){e.drawImage(t,300,300,100,100,200,50,50,50)}}},mounted:function(){var e=document.getElementById("baseImage"),t=e.getContext("2d");this.drowImages(t),this.drowSlicing(t)}},c={name:"BaseImage",mixins:[s]},f=c,u=a("2877"),h=Object(u["a"])(f,o,r,!1,null,null,null);t["default"]=h.exports},"80bb":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"canvas-box"},[a("adv-image-data")],1)},r=[],n=a("2c52"),i=a("aa3c"),l=a("900d"),d=a("081f"),s=a("3113"),c=a("9dc0"),f=a("f0d2"),u=a("80b4"),h=a("f10d"),v={name:"canvasBox",components:{advTransformations:n["default"],advHighAnimation:i["default"],advCompositing:l["default"],advAnimation:d["default"],advImageData:c["default"],baseControl:s["default"],baseColor:f["default"],baseImage:u["default"],baseText:h["default"]}},m=v,g=(a("dba8"),a("2877")),b=Object(g["a"])(m,o,r,!1,null,null,null);t["default"]=b.exports},"900d":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"advCompositing",width:"800",height:"800"}})},r=[],n=(a("6c7b"),{methods:{drawGlobalCompositeOperationEdit:function(){},drawClip:function(e){e.save(),e.fillRect(0,0,150,150),e.translate(75,75),e.beginPath(),e.arc(0,0,60,0,2*Math.PI,!0),e.clip();var t=e.createLinearGradient(0,-75,0,75);t.addColorStop(0,"#232256"),t.addColorStop(1,"#143778"),e.fillStyle=t,e.fillRect(-75,-75,150,150);for(var a=1;a<50;a++)e.save(),e.fillStyle="#fff",e.translate(75-Math.floor(150*Math.random()),75-Math.floor(150*Math.random())),this.drawStar(e,Math.floor(4*Math.random())+2),e.restore()},drawStar:function(e,t){e.save(),e.beginPath(),e.moveTo(t,0);for(var a=0;a<9;a++)e.rotate(Math.PI/5),a%2==0?e.lineTo(t/.525731*.200811,0):e.lineTo(t,0);e.closePath(),e.fill(),e.restore()}},mounted:function(){var e=document.getElementById("advCompositing"),t=e.getContext("2d");this.drawClip(t)}}),i={name:"AdvCompositing",mixins:[n]},l=i,d=a("2877"),s=Object(d["a"])(l,o,r,!1,null,null,null);t["default"]=s.exports},"9dc0":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"advImageData",width:"800",height:"800"}})},r=[],n=(a("6c7b"),{methods:{drawArc:function(e){e.beginPath(),e.save(),e.fillStyle="#F56C6C",e.arc(50,50,50,0,3*Math.PI/4,!1),e.lineTo(50,50),e.fill(),e.beginPath(),e.fillStyle="#46ADB7",e.arc(50,50,50,3*Math.PI/4,3*Math.PI/2,!1),e.lineTo(50,50),e.fill(),e.beginPath(),e.fillStyle="#00A0E9",e.arc(50,50,50,3*Math.PI/2,2*Math.PI,!1),e.lineTo(50,50),e.fill()},drawArcB:function(e){e.beginPath(),e.restore(),e.save(),e.fillStyle="#fff",e.arc(50,50,40,0,2*Math.PI,!1),e.fill()}},mounted:function(){var e=document.getElementById("advImageData"),t=e.getContext("2d");this.drawArc(t),this.drawArcB(t)}}),i={name:"AdvImageData",mixins:[n]},l=i,d=a("2877"),s=Object(d["a"])(l,o,r,!1,null,null,null);t["default"]=s.exports},aa3c:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"advHighAnimation",width:"800",height:"800"}})},r=[];a("6c7b");function n(e){return{x:100,y:100,vx:5,vy:2,xd:1,yd:1,radius:25,color:"blue",draw:function(){e.fillStyle="rgba(255,255,255,0.3)",e.fillRect(0,0,800,800),e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI,!0),e.closePath(),e.fillStyle=this.color,e.fill()}}}var i={methods:{},mounted:function(){var e=document.getElementById("advHighAnimation"),t=e.getContext("2d"),a=n(t);a.draw(),e.addEventListener("mousemove",function(e){a.x=e.clientX-260,a.y=e.clientY,a.draw()}),e.addEventListener("click",function(){var t=setInterval(function(){a.x+=a.vx*a.xd,n.vy*=.99,n.vy+=.25,a.y+=a.vy*a.yd,a.x>=800&&(a.xd=-1),a.x<=0&&(a.xd=1),a.y>=800&&(a.yd=-1),a.y<=0&&(a.yd=1),a.draw()},2);e.addEventListener("mouseout",function(){clearInterval(t)})})}},l={name:"AdvHighAnimation",mixins:[i]},d=l,s=a("2877"),c=Object(s["a"])(d,o,r,!1,null,null,null);t["default"]=c.exports},ad7f:function(e,t,a){},dba8:function(e,t,a){"use strict";var o=a("ad7f"),r=a.n(o);r.a},f0d2:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"baseColor",width:"800",height:"800"}})},r=[],n=(a("6c7b"),{methods:{drowFillStyle:function(e){for(var t=0;t<6;t++)for(var a=0;a<6;a++)e.fillStyle="rgb(".concat(Math.floor(255-42.5*t),", ").concat(Math.floor(255-42.5*a),", 0)"),e.fillRect(25*a,25*t,25,25)},drowStrokeStyle:function(e){for(var t=0;t<6;t++)for(var a=0;a<6;a++)e.strokeStyle="rgb(".concat(Math.floor(255-42.5*t),", ").concat(Math.floor(255-42.5*a),", 0)"),e.beginPath(),e.arc(180.5+25*a,12.5+25*t,10,0,2*Math.PI,!0),e.stroke()},drowGlobal:function(e){e.fillStyle="#FD0",e.fillRect(400,0,75,75),e.fillStyle="#6C0",e.fillRect(475,0,75,75),e.fillStyle="#09F",e.fillRect(400,75,75,75),e.fillStyle="#F30",e.fillRect(475,75,75,75),e.fillStyle="#FFF",e.globalAlpha=.2;for(var t=0;t<7;t++)e.beginPath(),e.arc(475,75,10+10*t,0,2*Math.PI,!0),e.fill()},drowRgba:function(e){e.fillStyle="rgb(255,221,0)",e.fillRect(0,200,150,37.5),e.fillStyle="rgb(102,204,0)",e.fillRect(0,237.5,150,37.5),e.fillStyle="rgb(0,153,255)",e.fillRect(0,275,150,37.5),e.fillStyle="rgb(255,51,0)",e.fillRect(0,312.5,150,37.5);for(var t=0;t<10;t++){e.fillStyle="rgba(255,255,255, ".concat((t+1)/10,")");for(var a=0;a<4;a++)e.fillRect(5+14*t,5+37.5*a+200,14,27.5)}},drowLineWidth:function(e){for(var t=0;t<10;t++)e.lineWidth=1+t,e.beginPath(),e.moveTo(205+14*t,205),e.lineTo(205+14*t,340),e.stroke()},drowLineCap:function(e){var t=["butt","round","square"];e.strokeStyle="#09f",e.beginPath(),e.moveTo(410,210),e.lineTo(540,210),e.moveTo(410,340),e.lineTo(540,340),e.stroke(),e.strokeStyle="black";for(var a=0;a<t.length;a++)e.lineWidth=15,e.lineCap=t[a],e.beginPath(),e.moveTo(425+50*a,210),e.lineTo(425+50*a,340),e.stroke()},drowLineJoin:function(e){var t=["round","bevel","miter"];e.lineWidth=10;for(var a=0;a<t.length;a++){e.lineJoin=t[a],e.beginPath();var o=40*a;e.moveTo(-5,405+o),e.lineTo(35,445+o),e.lineTo(75,405+o),e.lineTo(115,445+o),e.lineTo(155,405+o),e.stroke()}},drowLineDash:function(e){e.setLineDash([0,20]),e.strokeRect(250,400,100,100)},drowLineGradient:function(e){var t=e.createLinearGradient(500,500,500,650);t.addColorStop(0,"#00ABEB"),t.addColorStop(.5,"#fff"),t.addColorStop(.5,"#26C000"),t.addColorStop(1,"#fff");var a=e.createLinearGradient(500,550,500,595);a.addColorStop(.5,"#000"),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.strokeStyle=a,e.fillRect(500,500,130,130),e.strokeRect(550,550,50,50)},drowRadialGradient:function(e){var t=e.createRadialGradient(45,645,10,52,650,30);t.addColorStop(0,"#A7D30C"),t.addColorStop(.9,"#019F62"),t.addColorStop(1,"rgba(1,159,98,0)");var a=e.createRadialGradient(105,705,20,712,120,50);a.addColorStop(0,"#FF5F98"),a.addColorStop(.75,"#FF0188"),a.addColorStop(1,"rgba(255,1,136,0)");var o=e.createRadialGradient(95,615,15,102,620,40);o.addColorStop(0,"#00C9FF"),o.addColorStop(.8,"#00B5E2"),o.addColorStop(1,"rgba(0,201,255,0)");var r=e.createRadialGradient(0,750,50,0,740,90);r.addColorStop(0,"#F4F201"),r.addColorStop(.8,"#E4C700"),r.addColorStop(1,"rgba(228,199,0,0)"),e.fillStyle=r,e.fillRect(0,600,150,150),e.fillStyle=o,e.fillRect(0,600,150,150),e.fillStyle=a,e.fillRect(0,600,150,150),e.fillStyle=t,e.fillRect(0,600,150,150)},drowPattern:function(e){var t=new Image;t.src="https://mdn.mozillademos.org/files/222/Canvas_createpattern.png",t.onload=function(){var a=e.createPattern(t,"repeat");e.fillStyle=a,e.fillRect(200,600,150,150)}},drowShadow:function(e){e.shadowOffsetX=6,e.shadowOffsetY=4,e.shadowBlur=2,e.shadowColor="rgba(0, 0, 0, 0.5)",e.font="20px Times New Roman",e.fillStyle="Black",e.fillText("Sample String",450,450)}},mounted:function(){var e=document.getElementById("baseColor"),t=e.getContext("2d");this.drowFillStyle(t),this.drowStrokeStyle(t),this.drowGlobal(t),this.drowRgba(t),this.drowLineWidth(t),this.drowLineCap(t),this.drowLineJoin(t),this.drowLineDash(t),this.drowLineGradient(t),this.drowRadialGradient(t),this.drowPattern(t),this.drowShadow(t)}}),i={name:"BaseColor",mixins:[n]},l=i,d=a("2877"),s=Object(d["a"])(l,o,r,!1,null,null,null);t["default"]=s.exports},f10d:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("canvas",{attrs:{id:"baseText",width:"800",height:"800"}})},r=[],n={methods:{drowFillText:function(e){e.font="48px serif",e.fillText("Hello world",10,50)},drowStrokeText:function(e){e.font="48px serif",e.strokeText("Hello world",10,100)},drowBaseLine:function(e){e.font="48px serif",e.textBaseline="hanging",e.strokeText("Hello world",10,150)},drowMeasureText:function(e){var t=e.measureText("foo");t.width}},mounted:function(){var e=document.getElementById("baseText"),t=e.getContext("2d");this.drowFillText(t),this.drowStrokeText(t),this.drowBaseLine(t),this.drowMeasureText(t)}},i={name:"BaseText",mixins:[n]},l=i,d=a("2877"),s=Object(d["a"])(l,o,r,!1,null,null,null);t["default"]=s.exports}}]);
//# sourceMappingURL=chunk-6d32225a.2e5b3de9.js.map