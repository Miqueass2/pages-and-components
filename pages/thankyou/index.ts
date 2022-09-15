export function initPageThankyou(params) {
   const div = document.createElement("div");
   div.innerHTML = `
   <header-el></header-el>
   
   <title-and-p-el></title-and-p-el>

   <subtitle-el></subtitle-el>

   <button-el class="button-youre-welcome"></button-el>

   <footer-el></footer-el>

   `;

   const buttonYoureWelcome = div.querySelector(".button-youre-welcome");
   buttonYoureWelcome?.addEventListener('click', () => {
      params.goTo("/welcome")
   });
   return div;
}