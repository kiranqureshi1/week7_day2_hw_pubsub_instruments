const PubSub = require('../helpers/pub_sub.js');




const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
  console.log(this.data);
  PubSub.publish('whole instrument data', this.data);

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishInstrumentData(selectedIndex);
  });

};


InstrumentFamilies.prototype.publishInstrumentData = function(instrumentIndex){
  const selectedInstrument = this.data[instrumentIndex];
  PubSub.publish('Selected instrument ready', selectedInstrument);
};







module.exports = InstrumentFamilies;
