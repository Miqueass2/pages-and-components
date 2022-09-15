export function buttonVolver() {
   class ButtonBack extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
         .button-back-style{
            margin: 0 16px 60px 32px;
            width: 312px;
            height: 50px;
            background-color: rgb(229 229 229 / 50%);
            font-size:22px;
            font-weight:500;
            border-color:#000000;
            border-radius:4px;
         }
         @media (min-width:380px){
            .button-back-style{
               display: flex;
               justify-content: center;
               align-items: center;
               position: relative;
               left: 14px;
               flex-direction: row;
               margin: auto;
               margin-bottom: 69px;
            }
         }
         `;
         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style)

         let button = document.createElement("button");
         button.classList.add("button-back-style");
         button.textContent = "Volver"
         
         shadow.appendChild(button)
      }
   }
   customElements.define('button-back',ButtonBack);
};