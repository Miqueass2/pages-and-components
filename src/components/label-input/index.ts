export function labelAndInput() {
   class LabelInput extends HTMLElement{
      constructor() {
         super();
         this.render();
      }
      render() {
         const style = document.createElement('style');
         style.textContent = `
         .label{
            font-size:18px;
            margin:0 0 0.17px 30px;
         }
         .input{
            width:312px;
            height:50px;
            border:solid 2px;
            border-radius:4px;
            margin: 0 33px 16px 30px;
            font-size: 18px;
            text-align: center;
         }
         .input-two{
            width:312px;
            height:50px;
            border:solid 2px;
            border-radius:4px;
            margin: 0 33px 16px 30px;
            font-size: 18px;
            text-align: center;
         }
         .label-two{
            font-size:18px;
            margin:41px 0 0.17px 30px;
         }
         }
         `;

         let shadow = this.attachShadow({ mode: 'open' });
         
         const divLabel = document.createElement('div');
         divLabel.classList.add("label");
         
         const divInput = document.createElement('div');
         
         const divLabelTwo = document.createElement('div');
         divLabelTwo.classList.add("label-two");
         
         const divInputTwo = document.createElement('input');
         divInputTwo.classList.add("input-two");
         
         if (location.pathname === "/welcome") {
            let labelContent = "Nombre";
            divLabel.textContent = `${labelContent}`;
            
            let placeHolderText = "Ingresá tu nombre";
            divInput.innerHTML = `
            <input class="input" type="text" placeholder="${placeHolderText}">
            `;
            divInputTwo.style.display = "none";

         } else if (location.pathname === "/step-1") {
            let labelContent = "Email";
            divLabel.textContent = `${labelContent}`;
            
            let placeHolderText = '';
            divInput.innerHTML = `
            <input class="input" type="text" placeholder="${placeHolderText}">
            `;

            let labelFood = "Comida Favorita";
            divLabelTwo.textContent = `${labelFood}`;
            
            
            let placeHolderTextFood = '';
            divInputTwo.innerHTML = `
            <input class="input-two-2" type="text" placeholder="${placeHolderTextFood}">
            `;
         }
         
         shadow.appendChild(style);
         shadow.appendChild(divLabel);
         shadow.appendChild(divInput);
         shadow.appendChild(divLabelTwo);
         shadow.appendChild(divInputTwo);
      }
   }
   customElements.define('label-input', LabelInput);
}