export function subtitle() {
   class Subtitle extends HTMLElement{
      constructor() {
         super();
         this.render();
      }
      render() {
         const style = document.createElement('style');
         style.textContent = `
         .subtitle{
            font-size:22px;
            font-weight:600;
            margin: 0 51px 21px 30px;
         }
         `;

         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style);

         const divSubtitle = document.createElement('div');
         divSubtitle.classList.add("subtitle");
         let subtitleContent = "Para continuar ingresá tu nombre"
         divSubtitle.textContent = `${subtitleContent}`;
         
         if (location.pathname === "/thankyou") {
            style.textContent = `
            .subtitle{
               font-size:22px;
               font-weight:600;
               margin: 25px 26px 30px;
            }
            `;
            let subtitleContent = "Toda la información que nos brindaste es muy importante"
            divSubtitle.textContent = `${subtitleContent}`;
            
         }
         
         shadow.appendChild(divSubtitle)
      }
   }
   customElements.define('subtitle-el', Subtitle);
}