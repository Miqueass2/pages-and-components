export function butonStepOne() {
   class ButtonStep extends HTMLElement {
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement("style");
         style.textContent = `
         .container{
            margin:35px 33px 54px 30px;
         }
         .input-food{
            width:312px;
            height:55px;
            border: solid 2px;
            border-radius:4px;
            font-size:15px;
         }`;

         const shadow = this.attachShadow({ mode:'open'});

         let div = document.createElement('div');
         div.classList.add("container")
         div.innerHTML = `
         <label class = "label-text">Algunas de estas tres opciones</label>
         
         <select class="input-food" id="favoriteOnly">
         <option>Milanesa Napolitana</option>
         <option>Ñoquis</option>
         <option>Pizzas</option>
         <option>Empanadas</option>
         </select>
         `;

         shadow.appendChild(div);
         shadow.appendChild(style);
      }
   }
   customElements.define('button-step-one', ButtonStep);
};