(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.9997b5cb.png"},,,,,,,,function(e,t,a){e.exports=a(31)},,,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(14),c=a.n(r),o=a(3),s=a(6),m=(a(21),a(7)),i=a.n(m);var u=e=>{let{onLogin:t}=e;const[a,r]=Object(l.useState)(""),c=Object(o.p)(),s=e=>{e.preventDefault(),a&&(localStorage.setItem("userEmail",a),t(a),c("/home"))};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{class:"log-box"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-md-6"},n.a.createElement("div",{class:"loginpage"},n.a.createElement("h1",null,"Login"),n.a.createElement("form",{onSubmit:s},n.a.createElement("input",{type:"email",placeholder:"Enter your email",value:a,onChange:e=>r(e.target.value),class:"login-input"}),n.a.createElement("button",{onClick:s},"Login")),n.a.createElement("div",{class:"terms-and-services"},n.a.createElement("h4",null,n.a.createElement("p",null,n.a.createElement("a",{href:"/login"},"Terms of Service | Privacy Policy")))))),n.a.createElement("div",{class:"col-md-6"},n.a.createElement("img",{src:i.a,alt:"Logo",class:"login-logo"})))))};a(22);var E=e=>{let{movie:t,onAddToWatchlist:a,onRemoveFromWatchlist:l,isInWatchlist:r}=e;return n.a.createElement("div",{className:"movie-card"},n.a.createElement("img",{src:t.Poster,alt:`${t.Title} poster`,className:"movie-poster"}),n.a.createElement("h3",null,t.Title),n.a.createElement("p",null,t.Year),n.a.createElement("button",{onClick:()=>{r?l(t.imdbID):a(t)}},r?"Remove from Watchlist":"Add to Watchlist"))},d=a(33);const h="http://www.omdbapi.com/?apikey=c2062f5b",b=async e=>{try{const a=await d.a.get(`${h}&s=${e}`);if(a.data.Error)throw new Error(a.data.Error);return a.data}catch(t){throw console.error("Error fetching movies:",t.message),t}};a(27);var v=()=>{const[e,t]=Object(l.useState)(""),[a,r]=Object(l.useState)([]),[c,s]=Object(l.useState)(null),[m,u]=Object(l.useState)(JSON.parse(localStorage.getItem("watchlist"))||[]),d=Object(o.p)(),h=e=>{const t=[...m,e];u(t),localStorage.setItem("watchlist",JSON.stringify(t))},v=e=>{const t=m.filter(t=>t.imdbID!==e);u(t),localStorage.setItem("watchlist",JSON.stringify(t))},p=e=>m.some(t=>t.imdbID===e),g=localStorage.getItem("userEmail"),[f,y]=Object(l.useState)(!1),w=()=>{y(!f)},N=Object(l.useRef)(null);Object(l.useEffect)(()=>{const e=e=>{N.current&&!N.current.contains(e.target)&&y(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[N]);return n.a.createElement("div",{className:"search-page"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement("i",{className:"fa-solid fa-bars fa-2x",onClick:w,style:{cursor:"pointer",marginRight:"20px"}}),n.a.createElement("img",{src:i.a,alt:"Logo",className:"logo",onClick:w}),n.a.createElement("h3",{id:"head"},"Welcome to the official MW website"),n.a.createElement("form",{onSubmit:async t=>{t.preventDefault(),s(null);try{const t=await b(e);r(t.Search||[])}catch(c){s(c.message)}},className:"search-form"},n.a.createElement("input",{type:"text",placeholder:"Search for a movie",value:e,onChange:e=>t(e.target.value),className:"form-control"}),n.a.createElement("button",{type:"submit",className:"btn btn-primary",class:"search-btn"},"Search")),c&&n.a.createElement("p",{style:{color:"red"}},"Error: ",c))),n.a.createElement("div",{ref:N,className:`sidebar ${f?"active":""}`},n.a.createElement("div",{className:"sidebar-content"},n.a.createElement("h5",{className:"user-email"},g),n.a.createElement("div",{className:"btn-cont"},n.a.createElement("button",{className:"btn btn-secondary",onClick:()=>d("/home"),style:{marginTop:"155px",backgroundColor:"GrayText"}},"Home"),n.a.createElement("button",{className:"btn btn-secondary",onClick:()=>d("/search"),style:{marginTop:"30px",backgroundColor:"GrayText"}},"Go to Search"),n.a.createElement("button",{className:"btn btn-secondary",onClick:()=>d("/watchlist"),style:{marginTop:"30px",backgroundColor:"GrayText"}},"Go to Watchlist"),n.a.createElement("button",{className:"btn btn-danger mt-3",onClick:()=>{localStorage.removeItem("userEmail"),d("/")},style:{marginTop:"30px"}},"Logout")))),n.a.createElement("div",{className:"container mt-4"},n.a.createElement("div",{className:"movie-grid row"},a.map(e=>n.a.createElement("div",{key:e.imdbID,className:"col-md-4"},n.a.createElement(E,{movie:e,onAddToWatchlist:h,onRemoveFromWatchlist:v,isInWatchlist:p(e.imdbID)})))),n.a.createElement("br",null),n.a.createElement("div",{className:"text-center mt-4"},n.a.createElement("div",{className:"footer-buttons"},n.a.createElement("button",{onClick:()=>d("/watchlist"),className:"btn-1"},"Go to Watchlist"),n.a.createElement("button",{onClick:()=>d("/home"),className:"btn-2"},"Back to Home")))))};a(28);var p=()=>{const[e,t]=Object(l.useState)([]),a=Object(o.p)();Object(l.useEffect)(()=>{const e=JSON.parse(localStorage.getItem("watchlist"))||[];t(e)},[]);const r=a=>{const l=e.filter(e=>e.imdbID!==a);t(l),localStorage.setItem("watchlist",JSON.stringify(l))};return n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"watchlist-title"},"Your Watchlist"),n.a.createElement("div",{className:"movie-grid"},e.map(e=>n.a.createElement(E,{key:e.imdbID,movie:e,onRemoveFromWatchlist:r,isInWatchlist:!0}))),n.a.createElement("div",{className:"watchlist-back-btn"},n.a.createElement("button",{onClick:()=>a("/search"),className:"btn btn-info",id:"btn-1"},"Back to Search"),n.a.createElement("button",{onClick:()=>a("/home"),className:"btn btn-info",id:"btn-2"},"Back to Home")))};a(29);var g=()=>{const[e,t]=Object(l.useState)([]),[a,r]=Object(l.useState)(null),[c,s]=Object(l.useState)(JSON.parse(localStorage.getItem("watchlist"))||[]),[m,u]=Object(l.useState)(!1),d=Object(o.p)(),h=localStorage.getItem("userEmail");Object(l.useEffect)(()=>{(async()=>{try{const e=await b("spider man");t(e.Search||[])}catch(a){r(a.message)}})()},[]);const v=Object(l.useRef)(null);Object(l.useEffect)(()=>{const e=e=>{v.current&&!v.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[v]);const p=e=>{const t=[...c,e];s(t),localStorage.setItem("watchlist",JSON.stringify(t))},g=e=>{const t=c.filter(t=>t.imdbID!==e);s(t),localStorage.setItem("watchlist",JSON.stringify(t))},f=e=>c.some(t=>t.imdbID===e),y=()=>{u(!m)};return n.a.createElement("div",{className:"home-page"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"container"},n.a.createElement("i",{className:"fa-solid fa-bars fa-2x",onClick:y,style:{cursor:"pointer"}}),n.a.createElement("img",{src:i.a,alt:"Logo",className:"logo",onClick:y}),n.a.createElement("h3",{id:"head"},"Welcome to the official MW website"),n.a.createElement("form",{className:"search-form",onClick:()=>d("/search")},n.a.createElement("input",{type:"text",placeholder:"Search for a movie",readOnly:!0,className:"form-control"}),n.a.createElement("button",{type:"button",className:"btn btn-primary",class:"search-btn"},"Search")))),n.a.createElement("div",{ref:v,className:`sidebar ${m?"active":""}`},n.a.createElement("div",{className:"sidebar-content"},n.a.createElement("h5",{className:"user-email"},n.a.createElement("i",{className:"fas fa-user user-icon",style:{height:"130px",fontSize:"100px"}}),n.a.createElement("br",null),h),n.a.createElement("div",{class:"btn-cont"},n.a.createElement("button",{className:"btn btn-secondary",onClick:()=>d("/home"),style:{marginTop:"155px",backgroundColor:"GrayText"}},"Home"),n.a.createElement("button",{className:"btn btn-secondary",onClick:()=>d("/search"),style:{marginTop:"30px",backgroundColor:"GrayText"}},"Go to Search"),n.a.createElement("button",{className:"btn btn-secondary",onClick:()=>d("/watchlist"),style:{marginTop:"30px",backgroundColor:"GrayText"}},"Go to Watchlist"),n.a.createElement("button",{className:"btn btn-danger mt-3",onClick:()=>{localStorage.removeItem("userEmail"),d("/")},style:{marginTop:"50px"}},"Logout")))),n.a.createElement("div",{className:"navBar"},n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"/home"},n.a.createElement("i",{class:"fa-solid fa-home nav-icon"})," Home")),n.a.createElement("li",null,n.a.createElement("a",{href:"#about"},n.a.createElement("i",{class:"fa-solid fa-concierge-bell nav-icon"})," Services")),n.a.createElement("li",null,n.a.createElement("a",{href:"about"},n.a.createElement("i",{class:"fa-solid fa-info-circle nav-icon"})," About")),n.a.createElement("li",null,n.a.createElement("a",{href:"about"},n.a.createElement("i",{class:"fa-solid fa-envelope nav-icon"})," Contact"))))),n.a.createElement("div",{className:"container mt-4"},n.a.createElement("div",{className:"movie-grid row"},e.map(e=>n.a.createElement("div",{key:e.imdbID,className:"col-md-4"},n.a.createElement(E,{movie:e,onAddToWatchlist:p,onRemoveFromWatchlist:g,isInWatchlist:f(e.imdbID)})))),a&&n.a.createElement("p",{style:{color:"red"}},"Error: ",a)),n.a.createElement("div",{id:"about"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{class:"col-md-3"},n.a.createElement("h2",{style:{color:"green"}},"About Us"),n.a.createElement("h4",null,"Welcome to the Official MW Website!"),n.a.createElement("p",null,"At MW, we\u2019re passionate about movies and dedicated to bringing you an easy-to-use platform to manage your personal movie watchlist.",n.a.createElement("br",null)," Whether you're a casual viewer or a movie enthusiast, our app is designed to help you discover, organize, and keep track of all the movies you love."),n.a.createElement("h4",null,"Our Mission"),n.a.createElement("p",null,"Our mission is to provide movie lovers with a seamless experience to explore new movies, save them to their watchlist, and never miss out on the latest releases. ",n.a.createElement("br",null)," We believe that every movie deserves to be remembered, and every moviegoer deserves a tool that keeps their movie-watching experience organized and enjoyable."),n.a.createElement("h4",null,"What We Offer"),n.a.createElement("p",null,"Movie Search: Quickly search for any movie by title, and instantly get details like the plot, cast, and more.")),n.a.createElement("div",{class:"col-md-3"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"Personal Watchlist: Save movies to your watchlist so you can easily keep track of what you want to watch next."),n.a.createElement("p",null,"Recommendations: Discover new movies based on your preferences and viewing history."),n.a.createElement("h4",null,"Why Choose MW?"),n.a.createElement("p",null,"User-Friendly Interface: Our app is designed with simplicity in mind, making it easy for anyone to use."),n.a.createElement("p",null,"Regular Updates: We\u2019re constantly updating our app with new features and improvements to enhance your movie-watching experience."),n.a.createElement("p",null,"Community Driven: We value feedback from our users and are always open to suggestions on how we can improve our service."),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"Thank you for choosing MW as your go-to movie watchlist app. We\u2019re excited to have you on this cinematic journey with us!")),n.a.createElement("div",{class:"col-md-3"},n.a.createElement("h2",{style:{color:"green"}},"Contact Us"),n.a.createElement("p",null,"We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. Here's how you can get in touch."),n.a.createElement("h4",null,"Email:"),n.a.createElement("p",null,"For any inquiries, you can email us at: support@mwwebsite.com.",n.a.createElement("br",null)," We aim to respond within 24-48 hours."),n.a.createElement("h4",null,"Phone:"),n.a.createElement("p",null,"Need to speak with us directly? ",n.a.createElement("br",null),"Call us at: +1 (555) 123-4567. ",n.a.createElement("bt",null),"Our phone lines are open from 9:00 AM to 6:00 PM (EST), Monday to Friday."),n.a.createElement("h4",null,"Social Media:"),n.a.createElement("p",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Facebook: facebook.com/mwwebsite"),n.a.createElement("li",null,"Twitter: twitter.com/mwwebsite"),n.a.createElement("li",null,"Instagram: instagram.com/mwwebsite")))),n.a.createElement("div",{class:"col-md-3"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h4",null,"Office Address:"),n.a.createElement("p",null,"If you'd like to visit us or send us mail, you can find us at:",n.a.createElement("br",null),"MW Website",n.a.createElement("br",null),"1234 Movie Lane, Suite 100",n.a.createElement("br",null),"Film City, FC 56789",n.a.createElement("br",null),"USA"),n.a.createElement("h4",null,"We appreciate your interest in our platform and look forward to assisting you!"))))))};var f=()=>{const[e,t]=Object(l.useState)(null);return Object(l.useEffect)(()=>{const e=localStorage.getItem("userEmail");e&&t(e)},[]),n.a.createElement(s.a,null,n.a.createElement("div",null,e?n.a.createElement(()=>{const e=Object(o.p)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/search",element:n.a.createElement(v,null)}),n.a.createElement(o.b,{path:"/home",element:n.a.createElement(g,null)}),n.a.createElement(o.b,{path:"/watchlist",element:n.a.createElement(p,null)}),n.a.createElement(o.b,{path:"/",element:n.a.createElement(o.a,{to:"/LoginPage"})})),n.a.createElement("div",{className:"logout-button-container"},n.a.createElement("p",{className:"logout-text"},"Click here to logout"),n.a.createElement("button",{onClick:()=>{localStorage.removeItem("userEmail"),t(null),e("/login")}},"Logout")))},null):n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/login",element:n.a.createElement(u,{onLogin:t})}),n.a.createElement(o.b,{path:"/",element:n.a.createElement(o.a,{to:"/login"})}))))};a(30);c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null),n.a.createElement(n.a.Fragment,null)))}],[[15,1,2]]]);
//# sourceMappingURL=main.a00b5332.chunk.js.map