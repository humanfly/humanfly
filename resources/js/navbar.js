import App from './App'
import Navbar from './components/Navbar.vue'

if(document.getElementById('nav')) {
    new App({ Navbar }, '#nav');
}