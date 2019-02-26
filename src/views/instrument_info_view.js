const PubSub = require('../helpers/pub_sub.js');


const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Selected instrument ready', (event) => {
    const instrument = event.detail;
    this.display(instrument);
  });
};


InstrumentInfoView.prototype.display = function(instrument){
  const infoHeading = document.createElement('h1');
  infoHeading.textContent = `${instrument.name}`;
  const infoLiA = document.createElement('p');
  infoLiA.textContent = `description: ${instrument.description}`;
  const infoLiB = document.createElement('p');
  infoLiB.textContent = `instruments: ${instrument.instruments}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoHeading);
  this.container.appendChild(infoLiA);
  this.container.appendChild(infoLiB);
};

// {
//   name: 'Brass',
//   description: 'A brass instrument is a musical instrument that produces sound by sympathetic vibration of air in a tubular resonator in sympathy with the vibration of the player\'s lips',
//   instruments: ['trumpet', 'trombone', 'horn', 'tuba', 'bugle']
// },



module.exports = InstrumentInfoView;
