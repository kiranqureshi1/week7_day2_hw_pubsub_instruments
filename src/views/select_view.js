const PubSub = require('../helpers/pub_sub.js');



const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function(){

  PubSub.subscribe('whole instrument data', (event) => {
    const allInstruments = event.detail;
    console.log(allInstruments);
    console.log('data received');
    this.populate(allInstruments);
  });



  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populate = function(instrumentsData){
  instrumentsData.forEach((instrument, index) => {
    const option = document.createElement('option');
    option.textContent = instrument.name;
    option.value = index;
    this.element.appendChild(option);
  });
};



module.exports = SelectView;
