"use strict"

module.exports = {
    init: function() {
	var tessel = require('tessel'),
	    rfidlib = require('rfid-pn532'),
	    rfid = rfidlib.use(tessel.port['A']); 

	rfid.on('ready', function ready(version) {
	    console.log('Ready to read RFID cards');

	    rfid.on('data', function data(card) {
		console.log('UID:', card.uid.toString('hex'));
	    });
	});

	rfid.on('error', function error(err) {
	    console.error(err);
	});
    }
};
