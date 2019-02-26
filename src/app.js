const instrumentFamilyData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js');





document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  console.log('shhshhsshhs');
  const InstrumentDataModel = new InstrumentFamilies(instrumentFamilyData);
  InstrumentDataModel.bindEvents();


  // document.addEventListener('DOMContentLoaded', () => {
  // const planetsDataModel = new SolarSystem(planetsData);
  // planetsDataModel.bindEvents();
  // console.log(planetsDataModel.planets);
  //
  //
  // document.addEventListener('DOMContentLoaded', function(){
  // const selectElement = document.querySelector('select#animals-dropdown');
  // const animalDropdown = new SelectView(selectElement);
  // animalDropdown.bindEvents();


  const infoDiv = document.querySelector("#instrument-families");
  const selectView = new SelectView(infoDiv);
  console.log('hey');
  selectView.bindEvents();

  const infoDiva = document.querySelector('div#instrument-info')
  const instrumentInfoViewInfoDisplay = new InstrumentInfoView(infoDiva);
  instrumentInfoViewInfoDisplay.bindEvents();




});
