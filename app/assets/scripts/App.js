import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

let mobileMenu = new MobileMenu();
let revealOnScroll = new RevealOnScroll();

if (module.hot) {
  module.hot.accept();
}
