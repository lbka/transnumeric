const txtAnim = document.querySelector('h1') ;

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.typeString("Moi c'est Pablo Arrieumerlou")
.pauseFor(200)
.deleteAll()
.typeString("Nous sommes Transin")
.start()

