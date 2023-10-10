import '../styles/styles.css';

// JS
import MobileMenu from './modules/MobileMenu';

// import Person from './modules/Person';

// alert("Hello, from App.js, Congrats!");


// Check and Accept of the Hot Module
if(module.hot)
{
    module.hot.accept();
}

// class Adult extends Person {
//     payTaxes() {
//         console.log(this.name + " now owes zero taxes.");
//     }
// }

// let john = new Person("John", "Red");
// john.greet();

// let jane = new Adult("Jane", "Purple");
// jane.greet();
// jane.payTaxes();

let mobileMenu = new MobileMenu();