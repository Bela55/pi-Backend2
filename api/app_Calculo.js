var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const Calculo = () => {
    const _goBack = () => console.log('Went back');
    const _handleMore = () => console.log('Shown more');
  
    const dados = {
      title: "Calculo da Fazenda",
      ranchName: "Rancho da Serra",
      biodigestorVolume: "000 m²",
      biodigestorTotalHeight: "000 m",
      biodigestorChamberDiameter: "00 m",
      biodigestorChamberHeight: "00 m",
      biodigestorDiameter: "00 m",
      gasometerHeight: "00 m",
      guidePipeLength: "00 m",
      loadDischargeTankDimensions: "00 m",
      dischargePipeLength: "00 m",
      loadPipeLength: "00 m",
      gasVolumeProducedByBiodigestor: "00 m²",
    };
  
    console.log(dados);
    _goBack();
    _handleMore();
  };
  
  Calculo();

module.exports = app;
