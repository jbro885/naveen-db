(this["webpackJsonpnaveen-ro"]=this["webpackJsonpnaveen-ro"]||[]).push([[0],{31:function(e,t,n){e.exports=n(55)},36:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t),n.d(t,"firebaseConfig",(function(){return O}));var a=n(0),r=n.n(a),l=n(27),c=n.n(l),o=(n(36),n(8)),u=n(9),s=n(11),i=n(10),d=n(28),m=n(13),h=n(15),f=n(4),E=(n(48),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={redirect:!1,dashboardStmt:"< Go To Dashboard",name:null,number:null,model:null,dateofinstallment:null,nextservicedate:null,address:null},a.handleInputChange=function(e){e.persist(),a.setState((function(){return Object(d.a)({},e.target.name,e.target.value)}))},a.validateInput=function(){var e=a.state,t=e.name,n=e.number,r=e.model,l=e.dateofinstallment,c=e.nextservicedate,o=e.address;return null!==t&&null!==n&&null!==r&&null!==l&&null!==c&&null!==o},a.addRecord=function(e){a.validateInput()&&(window.confirm("Are you sure you want to add this Record?")&&m.firestore().collection("installations").add({custName:a.state.name,custPhone:a.state.number,plantInstalled:a.state.model,dateOfInstallment:a.state.dateofinstallment,nextServiceDate:a.state.nextservicedate,custAddress:a.state.address}).then((function(){alert("Record Added Successfully..!"),a.setState((function(){return{redirect:!0}}),(function(){}))})).catch((function(e){console.error("Error Adding Document: ",e)})));return!1},a}return Object(u.a)(n,[{key:"render",value:function(){return!0===this.state.redirect?r.a.createElement(h.a,{to:"/dashboard"}):r.a.createElement("div",{className:"form"},r.a.createElement("form",null,r.a.createElement("h2",null,"Add New Record"),r.a.createElement("p",{htmlFor:"name"},"Customer Name:"),r.a.createElement("input",{type:"text",placeholder:"Customer Name",onChange:this.handleInputChange,name:"name",required:!0}),r.a.createElement("p",{htmlFor:"number"},"Customer Contact Number:"),r.a.createElement("input",{type:"number",placeholder:"Customer Phone Number",onChange:this.handleInputChange,name:"number",required:!0}),r.a.createElement("p",{htmlFor:"model"},"Plant Installed:"),r.a.createElement("input",{type:"text",placeholder:"Plant Model",onChange:this.handleInputChange,name:"model",required:!0}),r.a.createElement("p",{htmlFor:"dateofinstallment"},"Date of Installment:"),r.a.createElement("input",{type:"date",placeholder:"Date of Installment",onChange:this.handleInputChange,name:"dateofinstallment",required:!0}),r.a.createElement("p",{htmlFor:"nextservicedate"},"Next Service Date:"),r.a.createElement("input",{type:"date",placeholder:"Next Service Date",onChange:this.handleInputChange,name:"nextservicedate",required:!0}),r.a.createElement("p",{htmlFor:"address"},"Customer Address:"),r.a.createElement("input",{type:"text",placeholder:"Address",onChange:this.handleInputChange,name:"address",required:!0}),r.a.createElement("div",null),r.a.createElement("button",{type:"submit",onClick:this.addRecord}," Add New Record")),r.a.createElement("p",null,r.a.createElement(f.b,{to:"/dashboard"},r.a.createElement("button",{id:"home"},this.state.dashboardStmt))))}}]),n}(a.Component)),p=Object(h.g)(E),b=(n(53),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={records:[],recordsPresent:!1,searchbox:"",searchOn:!1},e.getData=function(){var t=m.firestore(),n=[];t.collection("installations").get().then((function(t){t.forEach((function(e){n.push(e.data())})),e.setState((function(){return{records:n,recordsPresent:!0}}),(function(){console.log(e.state.records)}))}))},e.search=function(t){e.setState((function(){return{searchOn:!0}}),(function(){}));var n=e.state.records.filter((function(t){return-1!==String(t.custName).toLowerCase().search(String(e.state.searchbox).toLowerCase())}));e.setState((function(){return{searchRecords:n}}),(function(){}))},e.handleSearchBox=function(t){t.persist(),e.setState((function(){return{searchbox:t.target.value}}),(function(){}))},e.handleReset=function(t){e.setState((function(){return{searchOn:!1,searchbox:""}}))},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=(!0===this.state.searchOn?this.state.searchRecords:this.state.records).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.custName),r.a.createElement("td",null,e.plantInstalled),r.a.createElement("td",null,e.dateOfInstallment),r.a.createElement("td",null,e.nextServiceDate),r.a.createElement("td",null,e.custAddress),r.a.createElement("td",null,e.custPhone))})),t=!0===this.state.recordsPresent?e:r.a.createElement("tr",null,r.a.createElement("td",null,"Loading"));return r.a.createElement(a.Fragment,null,r.a.createElement("p",null,r.a.createElement(f.b,{to:"/dashboard"},r.a.createElement("button",{id:"home"},"< Go To Dashboard"))),r.a.createElement("h2",null,"Viewing All Records"),r.a.createElement("input",{id:"",value:this.state.searchbox,placeholder:"search",type:"text",name:"searchbox",onChange:this.handleSearchBox}),r.a.createElement("button",{type:"button",onClick:this.search},"Search"),r.a.createElement("button",{type:"button",onClick:this.handleReset}," Reset"),r.a.createElement("table",{id:"records-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Plant Installed"),r.a.createElement("td",null,"Date of Installment"),r.a.createElement("td",null,"Next Service Date"),r.a.createElement("td",null,"Address"),r.a.createElement("td",null,"Phone"))),r.a.createElement("tbody",null,t)))}}]),n}(a.Component)),v=function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear();return t<10&&(t="0"+t),n<10&&(n="0"+n),e=a+"-"+n+"-"+t},g=(n(54),function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={count:0},a.getNotificationCount=function(){var e=v(),t=m.firestore(),n=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){n.push(e.data()),a.setState((function(){return{count:n.length}}),(function(){a.playNotificationSound(n.length)}))}))}))},a.playNotificationSound=function(e){e>0&&a.audioRef.current.play()},a.audioRef=r.a.createRef(),a}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboardform"},r.a.createElement("h2",null,"Welcome to Naveen's DB"),r.a.createElement("p",null,r.a.createElement(f.b,{to:"/addrecords"},r.a.createElement("button",{className:"link"},"Add Records"))," "),r.a.createElement("p",null,r.a.createElement(f.b,{to:"/viewrecords"},r.a.createElement("button",{className:"link"},"View Records"))),r.a.createElement("p",null,r.a.createElement(f.b,{to:"/notifications"},r.a.createElement("button",{className:"link"},"Notifications (",this.state.count,")"))," "),r.a.createElement("p",null," ",r.a.createElement("a",{href:"##",onClick:this.getNotificationCount},r.a.createElement("button",{className:"link"},"Refresh"))),r.a.createElement("audio",{"webkit-playsinline":"true",playsInline:!0,ref:this.audioRef,id:"notificationSound",src:"https://notificationsounds.com/soundfiles/b2f627fff19fda463cb386442eac2b3d/file-sounds-1142-inflicted.mp3"}))}}]),n}(a.Component)),y=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={recordsPresent:!1,records:[]},a.getData=function(){var e=v(),t=m.firestore(),n=[];t.collection("installations").where("nextServiceDate","==",e).get().then((function(e){e.forEach((function(e){n.push(e.data())})),a.setState((function(){return{records:n,recordsPresent:!0,count:n.length}}),(function(){}))}))},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.records.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.custName),r.a.createElement("td",null,e.plantInstalled),r.a.createElement("td",null,e.dateOfInstallment),r.a.createElement("td",null,e.nextServiceDate),r.a.createElement("td",null,e.custAddress),r.a.createElement("td",null,e.custPhone))})),t=!0===this.state.recordsPresent?e:r.a.createElement("tr",null,r.a.createElement("td",null,"Loading")),n=0===this.state.count?r.a.createElement("tr",null,r.a.createElement("td",null,"No Notification")):t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(f.b,{to:"/dashboard"},r.a.createElement("button",{id:"home"},"< Go To Dashboard"))),r.a.createElement("p",null,"Notifications (",this.state.count,")"),r.a.createElement("table",{id:"records-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Plant Installed"),r.a.createElement("td",null,"Date of Installment"),r.a.createElement("td",null,"Next Service Date"),r.a.createElement("td",null,"Address"),r.a.createElement("td",null,"Phone"))),r.a.createElement("tbody",null,n)))}}]),n}(a.Component),C=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(u.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("div",{className:"error-block"},r.a.createElement("p",null,r.a.createElement("span",null,"Something went wrong. "),r.a.createElement(f.b,{to:"/"},"Go To Dashboard"))):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(a.Component);var N=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"pagenotfound"},r.a.createElement("h1",null," 404 Error. Page Not Found "),r.a.createElement(f.b,{className:"link",to:"/dashboard"},"Click Here to go to Dashboard")))},S=function(){return r.a.createElement(f.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/naveen-db/",render:function(){return r.a.createElement(h.a,{to:"/dashboard"})}}),r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(h.a,{to:"/dashboard"})}}),r.a.createElement(h.b,{exact:!0,path:"/dashboard",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(h.b,{exact:!0,path:"/addrecords",render:function(){return r.a.createElement(p,null)}}),r.a.createElement(h.b,{exact:!0,path:"/notifications",render:function(){return r.a.createElement(y,null)}}),r.a.createElement(h.b,{exact:!0,path:"/viewrecords",render:function(){return r.a.createElement(b,null)}}),r.a.createElement(h.b,{render:function(){return r.a.createElement(a.Fragment,null,r.a.createElement(C,null,r.a.createElement(N,null)))}})))},x=function(e){Object(s.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O={apiKey:"AIzaSyCmGN1TXfG9dTYXx80HvckdQkJpE9nTLXY",authDomain:"naveen-s-db.firebaseapp.com",databaseURL:"https://naveen-s-db.firebaseio.com",projectId:"naveen-s-db",storageBucket:"naveen-s-db.appspot.com",messagingSenderId:"941064666107",appId:"1:941064666107:web:17532e787616deadbf695e",measurementId:"G-34S1Z2T39Q"};m.initializeApp(O),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.8e7f856a.chunk.js.map