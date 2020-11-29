import Darkmode from 'darkmode-js';

new Darkmode().showWidget();

const txtAnim = document.getElementById("Slogan") ;
console.log(new Typewriter(txtAnim));

new Typewriter(txtAnim,
    {
        loop: false
    }
)
.typeString("Vous accompagner vers l'autonomie dans l'utilisation du numérique.")
.pauseFor(200)
.start()