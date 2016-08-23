// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function() {
	var map = L.map('map').setView([4.585, 101.106], 15);

	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

	var myLines = [{
		"type": "Polygon",
		"coordinates": [[[4.584, 101.104], [4.585, 101.107], [4.587, 101.106]]]
	}];

	var myStyle = {
		"color": "#ff7800",
		"weight": 5,
		"opacity": 0.65
	};

	L.geoJson(myLines, {
		style: myStyle
	}).addTo(map);
})