export function title() {
   class TitleAndP extends HTMLElement {
      constructor() {
         super()
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
         .title{
            color: #000000;
            font-size:52px;
            margin:41px 0 23px 30px;
            width: 271px;
         }
         `;
         
         let shadow = this.attachShadow({ mode: 'open' });
         
         let div = document.createElement("div");
         div.classList.add("title");
         
         if (location.pathname === "/welcome") {
            let titleName = "Te damos la bienvenida a esta página";
            div.textContent = `${titleName}`;
            
         } else if (location.pathname === "/step-1") {
            style.textContent = `
            .title{
               color: #000000;
               font-size:52px;
               margin:41px 36px 41px 23px;
               width:282px
            }`;
            let titleName = "Necesitamos algunos datos más";
            div.textContent = `${titleName}`
         } else if (location.pathname === "/thankyou") {
            let titleName = "Gracias";
            div.textContent = `${titleName}`;

         }
         
            shadow.appendChild(style);
            shadow.appendChild(div)
         }
      }
   customElements.define('title-and-p-el', TitleAndP);
};