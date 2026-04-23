// JS scripts placed here
const dialog = document.getElementById("enhanced");
const view = document.getElementById("view");
const closeButton = document.getElementById("close");

view.addEventListener ("click", () => {
  dialog.showModal();
});

closeButton.addEventListener ("click", () => {
  dialog.close();
});

const hero = document.querySelector(".hero");

hero.addEventListener ("click", () => {
});

const submitBtn = document.getElementById("submitbtn");

submitBtn.addEventListener ("click", () => {
  alert("Thank you for your message! We will get back to you as soon as possible.");
});


(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));
