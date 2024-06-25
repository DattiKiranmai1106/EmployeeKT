/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comsapktemployeeonboard/employeekt/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
