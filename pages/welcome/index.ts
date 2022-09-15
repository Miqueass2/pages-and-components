export function initPageA(params){
   const div = document.createElement("div");
   div.innerHTML = `
   <header-el></header-el>
   
   <title-and-p-el></title-and-p-el>

   <text-lorem></text-lorem>

   <subtitle-el></subtitle-el>

   <label-input></label-input>

      <button-el class="boton"></button-el>

   <footer-el></footer-el>
   `;
   const buttonDiv:any = div.querySelector(".boton");

   buttonDiv.addEventListener("click", () => {
      params.goTo("/step-1")
   })

   return div;
}