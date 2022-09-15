// SI NO PONEMOS EL./ AL INVOCAR UN ARCHIVO, LO LEERA PARA QUE VAYA A NODE_MODULES
// A ALGUNA DEPENDENCIA
import { initRouter } from "./router";
// COMPONENTS
import { header } from "./components/header/index";
import { title } from "./components/title/index";
import { textLorem } from "./components/text-lorem/index";
import { subtitle } from "./components/subtitle/index";
import { labelAndInput } from "./components/label-input/index";
import { button } from "./components/button/index";
import { footer } from "./components/footer/index";
import { butonStepOne } from "./components/button-step/index";
import { buttonVolver} from "./components/button-back/index";

(function () {
   header();
   title();
   textLorem();
   subtitle();
   labelAndInput();
   button();
   footer();
   butonStepOne();
   buttonVolver();
   
   const rootEl = document.querySelector(".root");
   initRouter(rootEl)
})();