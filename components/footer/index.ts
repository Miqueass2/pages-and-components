export function footer() {
   class Footer extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
         .footer{
            height:233px;
            background-color:#FFA0EA;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
            font-weight: 500;
         }
         `;

         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style);

         let div = document.createElement("div");
         div.classList.add("footer");
         div.textContent = "Footer"

         shadow.appendChild(div)
      }
   }
   customElements.define('footer-el',Footer);
};