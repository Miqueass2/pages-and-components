export function button() {
   class Button extends HTMLElement{
      constructor() {
         super();
         this.render();
      }
      render() {
         const style = document.createElement('style');
         style.textContent = `
         .div-button{
            position: relative;
            left: 7px;
         }
         .button{
            width:312px;
            height:50px;
            background-color:#9CBBE9;
            border:none;
            justify-content: center;
            align-items: center;
            display: flex;
            margin: 0 36px 113px 27px;
            font-size: 22px;
            font-weight: 500;
            border-radius:4px
         }
         `;

         const shadow = this.attachShadow({ mode: 'open' });

         const divButton = document.createElement('div');
         divButton.classList.add("div-button");
         let buttonContent = "Comenzar"
         divButton.innerHTML = `
         <button class="button">${buttonContent}</button>
         `;
         
         if (location.pathname === "/step-1") {
            style.textContent = `.button{
               width:312px;
               height:50px;
               background-color:#9CBBE9;
               border:none;
               justify-content: center;
               align-items: center;
               display: flex;
               margin: 0 36px 60px 27px;
               font-size: 22px;
               font-weight: 500;
               border-radius:4px
            }`;
            let buttonContent = "Continuar"
            divButton.innerHTML = `
            <button class="button">${buttonContent}</button>
            `;
            
         } else if (location.pathname === "/thankyou") {
            style.textContent = `.button{
               width:312px;
               height:50px;
               background-color:#9CBBE9;
               border:none;
               justify-content: center;
               align-items: center;
               display: flex;
               margin: 0 36px 310px 27px;
               font-size: 22px;
               font-weight: 500;
               border-radius:4px
            }`;
            let buttonContent = "De nada"
            divButton.innerHTML = `
            <button class="button">${buttonContent}</button>
            `;
         }

         shadow.appendChild(divButton);
         shadow.appendChild(style)
      }
   }
   customElements.define('button-el', Button);
}