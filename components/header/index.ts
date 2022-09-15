export function header() {
   class Header extends HTMLElement{
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style")
         style.textContent = `
         .header{
            background-color: #FF8282;
            height: 60px;
            display:flex;
            align-items: center;
            font-size:22px;
            justify-content: center;
         }
         `;
         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style);

         let div = document.createElement("div");
         
         div.classList.add("header");
         div.textContent = "Header";

         shadow.appendChild(div);


      }
   }
   customElements.define('header-el', Header);
};