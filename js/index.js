AOS.init();
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function () { scrollFunction() };

      const counters = document.querySelectorAll('.counter')
      counters.forEach(counter => {
         counter.innerText = '0'
         const updateCounter = () => {
            const target = +counter.getAttribute('data-target')
            const c = +counter.innerText
            const increment = target / 2000
            if (c < target) {
               counter.innerText = `${Math.ceil(c + increment)}`
               setTimeout(updateCounter, 1)
            } else {
               counter.innerText = target
            }

         }
         updateCounter()


      })


      function GetMap() {
         var map = new Microsoft.Maps.Map('#map', {

            center: new Microsoft.Maps.Location(-11.674282, 27.479535),
            zoom: 19,
            credentials: 'AgqxbyOj48ZmO52UrrOkGyImBfPE_VWjJcsO0vfclUBA7O13Hi85Sd7njYrFEzty',
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,

         });
         var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
         var layer = new Microsoft.Maps.Layer();
         layer.add(pushpin);
         map.layers.insert(layer);
      }


      window.addEventListener("load", () => {
         new Glider(document.querySelector('.glider'), {
            slidesToShow: 3,
            dots: '#dots',
            draggable: true,
            arrows: {
               prev: '.glider-prev',
               next: '.glider-next'
            }
         });
      })

      const open_accordion = (v) => {
         const accordion = document.querySelectorAll(".accordion")
         const child = document.querySelectorAll(".child")
         const group = document.querySelectorAll(".group ")
         var i
         //for (i = 0; i <= accordion.length; i++) {
            /*child[i].classList.add("hidden")
            group[i].classList.remove("[&:not([data-te-collapse-collapsed])]:bg-secondary-color")
            group[i].classList.remove("[&:not([data-te-collapse-collapsed])]:bg-white")*/


            
               child[v].classList.remove("hidden")
               //group[i].classList.remove("[&:not([data-te-collapse-collapsed])]:bg-white")
               //group[v].classList.add("bg-secondary-color")


           

         


      }

      const nav__menu__open = document.querySelector("#nav__menu__open")
      const btn__menu__open = document.querySelector("#btn__menu__open")
      const btn__menu__fermer = document.querySelector("#btn__menu__fermer")

      btn__menu__open.addEventListener("click",()=>{
         nav__menu__open.classList.remove("hidden")
         btn__menu__open.classList.add("hidden")
         btn__menu__fermer.classList.remove("hidden")
      })
      btn__menu__fermer.addEventListener("click",()=>{
         nav__menu__open.classList.add("hidden")
         btn__menu__fermer.classList.add("hidden")
         btn__menu__open.classList.remove("hidden")
      })