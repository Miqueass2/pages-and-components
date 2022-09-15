export function textLorem() {
   class LoremText extends HTMLElement{
      constructor() {
         super();
         this.render();
      }
      render() {
         let style = document.createElement('style');
         style.textContent = `
         .lorem-text{
            font-size: 18px;
            width: 315px;
            margin: 0 30px 73px 30px;
         }
         `;
         let shadow = this.attachShadow({ mode: 'open' });
         shadow.appendChild(style);

         let divText = document.createElement('div');
         divText.classList.add('lorem-text')
         divText.textContent = `
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consequuntur iure voluptas quia accusantium voluptatum aspernatur provident et repudiandae quam veritatis, libero porro sit beatae laboriosam a aut consequatur quidem?
         `;

         shadow.appendChild(divText)
      }
   }
   customElements.define('text-lorem', LoremText);
}