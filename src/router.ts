import {initPageA} from "../pages/welcome"
import {initPageB} from "../pages/step-1"
import {initPageThankyou} from "../pages/thankyou"   
   
   // EN EL ELEMENTO CONTAINER SE MONTAN LAS RUTAS
   const routes = [
      {
   path: /\/welcome/,
   component:initPageA,
   },
      {
   path: /\/step-1/,
   component:initPageB,
   },
      {
   path: /\/thankyou/,
   component:initPageThankyou,
   },
];
   export function initRouter(container: Element | null) {
      function goTo(path) {
// GO TO LO QUE HACE ES CAMBIAR LA URL CON EL PUSHSTATE Y LLAMA A HANDLEROUTE
// CON LA RUTA DADA DE PUSHSTATE
         history.pushState({}, '', path)
         handleRoute(path);
      }
      function handleRoute(route) {
// HANDLEROUTE RECIBE UNA RUTA, SEA UNA / INBOX O / PAGE - A ETC...
// LA COMPARA CON LAS RUTAS DEL ARRAY (CONST ROUTES) Y PREGUNTA SI LA RUTA QUE RECIBIO
// CONCIDE CON LAS REG EXPRESION QUE LE PASAMOS, TEST(ROUTE)
// CUANDO TESTEA EL PATH Y DA TRUE(MATCHEA), LE PASAMOS LA RUTA A LA FUNCTION DEL COMPONENT
      console.log("El handleRoute recibio una new ruta", route);
   
      for (const r of routes) {      
         if (r.path.test(route)) {
            
            const el:any = r.component({goTo: goTo})
            if (container?.firstChild) {
// SI CONTAINER TIENE UN FIRST CHILD LO SACO , Y AGREGO CON APPENDCHILD EL COMPONENT SEGUN LA RUTA
               container.firstChild.remove();
            };
            container?.appendChild(el)
         }
      }
   }
      if (location.pathname === '/') {
      goTo("/welcome")
      } else {
         handleRoute(location.pathname);
      }

}