const e=[{path:/\/welcome/,component:function(e){const n=document.createElement("div");return n.innerHTML='\n   <header-el></header-el>\n   \n   <title-and-p-el></title-and-p-el>\n\n   <text-lorem></text-lorem>\n\n   <subtitle-el></subtitle-el>\n\n   <label-input></label-input>\n\n      <button-el class="boton"></button-el>\n\n   <footer-el></footer-el>\n   ',n.querySelector(".boton").addEventListener("click",(()=>{e.goTo("/step-1")})),n}},{path:/\/step-1/,component:function(e){const n=document.createElement("div");return n.innerHTML='\n   <header-el></header-el>\n\n   <title-and-p-el></title-and-p-el>\n\n   <label-input></label-input>\n\n   <button-step-one></button-step-one>\n\n   <button-el class="button-continue"></button-el>\n\n   <button-back class="button-back"></button-back>\n\n   <footer-el></footer-el>\n\n   ',n.querySelector(".button-continue")?.addEventListener("click",(()=>{e.goTo("/thankyou")})),n.querySelector(".button-back")?.addEventListener("click",(()=>{e.goTo("/welcome")})),n}},{path:/\/thankyou/,component:function(e){const n=document.createElement("div");return n.innerHTML='\n   <header-el></header-el>\n   \n   <title-and-p-el></title-and-p-el>\n\n   <subtitle-el></subtitle-el>\n\n   <button-el class="button-youre-welcome"></button-el>\n\n   <footer-el></footer-el>\n\n   ',n.querySelector(".button-youre-welcome")?.addEventListener("click",(()=>{e.goTo("/welcome")})),n}}];function n(n){function t(e){history.pushState({},"",e),o(e)}function o(o){console.log("El handleRoute recibio una new ruta",o);for(const i of e)if(i.path.test(o)){const e=i.component({goTo:t});n?.firstChild&&n.firstChild.remove(),n?.appendChild(e)}}"/"==location.pathname?t("/welcome"):o(location.pathname),window.onpopstate=function(){o(location.pathname),console.log("soy onpopstate")}}function t(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=document.createElement("style");e.textContent="\n         .header{\n            background-color: #FF8282;\n            height: 60px;\n            display:flex;\n            align-items: center;\n            font-size:22px;\n            justify-content: center;\n         }\n         ";let n=this.attachShadow({mode:"open"});n.appendChild(e);let t=document.createElement("div");t.classList.add("header"),t.textContent="Header",n.appendChild(t)}}customElements.define("header-el",e)}function o(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=document.createElement("style");e.textContent="\n         .title{\n            color: #000000;\n            font-size:52px;\n            margin:41px 0 23px 30px;\n            width: 271px;\n         }\n         ";let n=this.attachShadow({mode:"open"}),t=document.createElement("div");if(t.classList.add("title"),"/welcome"===location.pathname){let e="Te damos la bienvenida a esta página";t.textContent=`${e}`}else if("/step-1"===location.pathname){e.textContent="\n            .title{\n               color: #000000;\n               font-size:52px;\n               margin:41px 36px 41px 23px;\n               width:282px\n            }";let n="Necesitamos algunos datos más";t.textContent=`${n}`}else if("/thankyou"===location.pathname){let e="Gracias";t.textContent=`${e}`}n.appendChild(e),n.appendChild(t)}}customElements.define("title-and-p-el",e)}function i(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=document.createElement("style");e.textContent="\n         .lorem-text{\n            font-size: 18px;\n            width: 315px;\n            margin: 0 30px 73px 30px;\n         }\n         ";let n=this.attachShadow({mode:"open"});n.appendChild(e);let t=document.createElement("div");t.classList.add("lorem-text"),t.textContent="\n         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?\n         ",n.appendChild(t)}}customElements.define("text-lorem",e)}function l(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=document.createElement("style");e.textContent="\n         .subtitle{\n            font-size:22px;\n            font-weight:600;\n            margin: 0 51px 21px 30px;\n         }\n         ";let n=this.attachShadow({mode:"open"});n.appendChild(e);const t=document.createElement("div");t.classList.add("subtitle");if(t.textContent="Para continuar ingresá tu nombre","/thankyou"===location.pathname){e.textContent="\n            .subtitle{\n               font-size:22px;\n               font-weight:600;\n               margin: 25px 26px 30px;\n            }\n            ";let n="Toda la información que nos brindaste es muy importante";t.textContent=`${n}`}n.appendChild(t)}}customElements.define("subtitle-el",e)}function a(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=document.createElement("style");e.textContent="\n         .label{\n            font-size:18px;\n            margin:0 0 0.17px 30px;\n         }\n         .input{\n            width:312px;\n            height:50px;\n            border:solid 2px;\n            border-radius:4px;\n            margin: 0 33px 16px 30px;\n            font-size: 18px;\n            text-align: center;\n         }\n         .input-two{\n            width:312px;\n            height:50px;\n            border:solid 2px;\n            border-radius:4px;\n            margin: 0 33px 16px 30px;\n            font-size: 18px;\n            text-align: center;\n         }\n         .label-two{\n            font-size:18px;\n            margin:41px 0 0.17px 30px;\n         }\n         }\n         ";let n=this.attachShadow({mode:"open"});const t=document.createElement("div");t.classList.add("label");const o=document.createElement("div"),i=document.createElement("div");i.classList.add("label-two");const l=document.createElement("input");if(l.classList.add("input-two"),"/welcome"===location.pathname){let e="Nombre";t.textContent=`${e}`;let n="Ingresá tu nombre";o.innerHTML=`\n            <input class="input" type="text" placeholder="${n}">\n            `,l.style.display="none"}else if("/step-1"===location.pathname){let e="Email";t.textContent=`${e}`;let n="";o.innerHTML=`\n            <input class="input" type="text" placeholder="${n}">\n            `;let a="Comida Favorita";i.textContent=`${a}`;let s="";l.innerHTML=`\n            <input class="input-two-2" type="text" placeholder="${s}">\n            `}n.appendChild(e),n.appendChild(t),n.appendChild(o),n.appendChild(i),n.appendChild(l)}}customElements.define("label-input",e)}function s(){class e extends HTMLElement{constructor(){super(),this.render()}render(){const e=document.createElement("style");e.textContent="\n         .div-button{\n            position: relative;\n            left: 7px;\n         }\n         .button{\n            width:312px;\n            height:50px;\n            background-color:#9CBBE9;\n            border:none;\n            justify-content: center;\n            align-items: center;\n            display: flex;\n            margin: 0 36px 113px 27px;\n            font-size: 22px;\n            font-weight: 500;\n            border-radius:4px\n         }\n         ";const n=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("div-button");if(t.innerHTML='\n         <button class="button">Comenzar</button>\n         ',"/step-1"===location.pathname){e.textContent=".button{\n               width:312px;\n               height:50px;\n               background-color:#9CBBE9;\n               border:none;\n               justify-content: center;\n               align-items: center;\n               display: flex;\n               margin: 0 36px 60px 27px;\n               font-size: 22px;\n               font-weight: 500;\n               border-radius:4px\n            }";let n="Continuar";t.innerHTML=`\n            <button class="button">${n}</button>\n            `}else if("/thankyou"===location.pathname){e.textContent=".button{\n               width:312px;\n               height:50px;\n               background-color:#9CBBE9;\n               border:none;\n               justify-content: center;\n               align-items: center;\n               display: flex;\n               margin: 0 36px 310px 27px;\n               font-size: 22px;\n               font-weight: 500;\n               border-radius:4px\n            }";let n="De nada";t.innerHTML=`\n            <button class="button">${n}</button>\n            `}n.appendChild(t),n.appendChild(e)}}customElements.define("button-el",e)}function r(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=document.createElement("style");e.textContent="\n         .footer{\n            height:233px;\n            background-color:#FFA0EA;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 22px;\n            font-weight: 500;\n         }\n         ";let n=this.attachShadow({mode:"open"});n.appendChild(e);let t=document.createElement("div");t.classList.add("footer"),t.textContent="Footer",n.appendChild(t)}}customElements.define("footer-el",e)}function d(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=document.createElement("style");e.textContent="\n         .container{\n            margin:35px 33px 54px 30px;\n         }\n         .input-food{\n            width:312px;\n            height:55px;\n            border: solid 2px;\n            border-radius:4px;\n            font-size:15px;\n         }";const n=this.attachShadow({mode:"open"});let t=document.createElement("div");t.classList.add("container"),t.innerHTML='\n         <label class = "label-text">Algunas de estas tres opciones</label>\n         \n         <select class="input-food" id="favoriteOnly">\n         <option>Milanesa Napolitana</option>\n         <option>Ñoquis</option>\n         <option>Pizzas</option>\n         <option>Empanadas</option>\n         </select>\n         ',n.appendChild(t),n.appendChild(e)}}customElements.define("button-step-one",e)}function c(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=document.createElement("style");e.textContent="\n         .button-back-style{\n            margin: 0 16px 60px 32px;\n            width: 312px;\n            height: 50px;\n            background-color: rgb(229 229 229 / 50%);\n            font-size:22px;\n            font-weight:500;\n            border-color:#000000;\n            border-radius:4px;\n         }\n         @media (min-width:380px){\n            .button-back-style{\n               display: flex;\n               justify-content: center;\n               align-items: center;\n               position: relative;\n               left: 14px;\n               flex-direction: row;\n               margin: auto;\n               margin-bottom: 69px;\n            }\n         }\n         ";let n=this.attachShadow({mode:"open"});n.appendChild(e);let t=document.createElement("button");t.classList.add("button-back-style"),t.textContent="Volver",n.appendChild(t)}}customElements.define("button-back",e)}!function(){t(),o(),i(),l(),a(),s(),r(),d(),c();n(document.querySelector(".root"))}();
//# sourceMappingURL=index.9cdc2ae7.js.map
