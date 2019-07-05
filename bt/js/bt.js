(function() {


    
    const items = document.querySelectorAll('.btdiv');
    items.forEach((el, pos) => {
        const bttn = el.querySelector('button.particles-button');
 
        const particles = new Particles(bttn);
        
        let buttonVisible = true;
        bttn.addEventListener('click', () => {
            if ( !particles.isAnimating() && buttonVisible ) {
                particles.disintegrate();
                buttonVisible = !buttonVisible;
      
                setTimeout(bla,3000);
             
            }
        });
        function bla() {
            if ( !buttonVisible ) {
                particles.pause();
                particles.integrate({
                    duration: 1000,
                    easing: 'easeOutSine'
                });
  
                buttonVisible = !buttonVisible;

            }
        };
    });

})();
