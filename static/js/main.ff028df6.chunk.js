(window.webpackJsonplt=window.webpackJsonplt||[]).push([[0],{15:function(e,n,t){e.exports=t(27)},20:function(e,n,t){},21:function(e,n,t){},27:function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(12),s=t.n(a),c=(t(20),t(21),t(6)),r=t(3),y=t(9),z={outer:{width:"100vw",height:"100vh"},question:{height:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2rem",textAlign:"center"},actionContainer:{height:"50%",display:"flex",alignItems:"center",justifyContent:"center"},yesContainer:{backgroundColor:"green",width:"50%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},noContainer:{backgroundColor:"red",width:"50%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"white"}};var u=Object(r.e)((function(e){var n=function(e,n){return function(){d(e),r(n)}},t=function(n){return function(){e.history.push("/result/".concat(n))}},a=Object(o.useState)(0),s=Object(y.a)(a,2),c=s[0],r=s[1],u=Object(o.useState)(0),l=Object(y.a)(u,2),w=l[0],d=l[1],m=[[{question:"Czy kiedykolwiek obawiasz si\u0119, \u017ce zostaniesz odkryty?",yesAction:n(0,1),noAction:n(1,1)}],[{question:"Czy masz wra\u017cenie, \u017ce Twoi koledzy s\u0105 bardziej kompetentni od Ciebie?",yesAction:n(0,2),noAction:n(1,2)},{question:"Czy czujesz si\u0119 niekomfortowo, gdy kto\u015b chwali Twoj\u0105 prac\u0119?",yesAction:n(2,2),noAction:n(3,2)}],[{question:'Czy u\u017cywasz minimalizuj\u0105cego j\u0119zyka? (np. "Chyba", "Wydaje mi si\u0119")?',yesAction:n(0,3),noAction:n(1,3)},{question:"Czy unikasz proszenia o podwy\u017ck\u0119",yesAction:n(2,3),noAction:n(3,3)},{question:"Czy stawiasz sobie nieosi\u0105galne cele?",yesAction:n(4,3),noAction:n(3,3)},{question:"Czy oczekujesz, \u017ce Twoja \u017ce twoja praca b\u0119dzie bezb\u0142\u0119dna?",yesAction:n(4,3),noAction:n(5,3)}],[{question:"Czy czujesz, \u017ce m\xf3wi\u0105c pochwa\u0142y ludzie staraj\u0105 si\u0119 by\u0107 mili?",yesAction:n(1,4),noAction:n(0,4)},{question:"Czy uwa\u017casz, \u017ce twoje sukcesy zawdzi\u0119czasz tylko czynnikom zewn\u0119trznym (np. dobre kontakty, szcz\u0119\u015bcie)?",yesAction:n(1,4),noAction:n(2,4)},{question:"Czy czujesz, \u017ce \u017ce twoja praca musi by\u0107 bezb\u0142\u0119dna przez ca\u0142y przez ca\u0142y czas?",yesAction:n(3,4),noAction:n(2,4)},{question:"Czy uwa\u017casz, \u017ce twoja pozycja w \u017cyciu jest g\u0142\xf3wnie dzi\u0119ki szcz\u0119\u015bciu?",yesAction:n(3,4),noAction:n(4,4)},{question:"Czy ci\u0105gle martwisz si\u0119, \u017ce nie spe\u0142niasz oczekiwa\u0144?",yesAction:n(3,4),noAction:n(4,4)},{question:"Czy cz\u0119sto przepracowywa\u0107 si\u0119 lub nadmiernie si\u0119 przygotowujesz?",noAction:n(4,4),yesAction:n(5,4)}],[{question:"Czy unikasz ubiegania si\u0119 o prac\u0119, chyba \u017ce spe\u0142niasz wszystkie wymagania?",yesAction:t(0),noAction:t(1)},{question:"Czy czujesz, \u017ce ponis\u0142e\u015b pora\u017ck\u0119, je\u015bli z trudem co\u015b opanowywujesz?",yesAction:t(0),noAction:t(2)},{question:"Czy czujesz si\u0119 zak\u0142opotany, kiedy nie znasz odpowiedzi?",yesAction:t(2),noAction:t(1)},{question:"Czy cz\u0119sto zostajesz do p\xf3\u017ana w pracy?",yesAction:t(3),noAction:t(4)},{question:"Czy masz problemy z delegowaniem zada\u0144?",yesAction:t(3),noAction:t(5)},{question:"Czy jeste\u015b mikromenad\u017cerem?",yesAction:t(4),noAction:t(5)}]][c][w],p=m.question,A=m.yesAction,k=m.noAction;return i.a.createElement("div",{style:z.outer},i.a.createElement("div",{style:z.question},p),i.a.createElement("div",{style:z.actionContainer},i.a.createElement("div",{style:z.yesContainer,onClick:A},"Tak"),i.a.createElement("div",{style:z.noContainer,onClick:k},"Nie")))})),l=["rgb(0,0,255)","rgb(255, 217, 102)","rgb(204, 0, 0)","rgb(77, 208, 225)","rgb(153, 0, 255)","rgb(244, 204, 204)"],w=["Expert","Solista","Naturalny geniusz","Superman / Superwoman","Perfekcjonista","-"],d=["white","black","white","black","white","black"];var m=function(e){var n=e.match.params.id;return i.a.createElement("div",{style:{height:"100vh",width:"100vw",backgroundColor:l[n],display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("div",{style:{fontSize:"4rem",color:d[n]}},w[n]))};var p=function(){return i.a.createElement(c.a,{basename:"/"},i.a.createElement("div",null,i.a.createElement(r.a,{exact:!0,path:"/",component:u}),i.a.createElement(r.a,{path:"/result/:id",component:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ff028df6.chunk.js.map