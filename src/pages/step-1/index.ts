export function initPageB(params){
   const div = document.createElement("div");
   div.innerHTML = `
   <header-el></header-el>

   <title-and-p-el></title-and-p-el>

   <label-input></label-input>

   <button-step-one></button-step-one>

   <button-el class="button-continue"></button-el>

   <button-back class="button-back"></button-back>

   <footer-el></footer-el>

   `;
   const buttonContinue = div.querySelector(".button-continue");
   buttonContinue?.addEventListener('click', () => {
      params.goTo("/thankyou")
   });
   const buttonBack = div.querySelector(".button-back");
   buttonBack?.addEventListener('click', () => {
      params.goTo("/welcome")
   })
   return div;
}