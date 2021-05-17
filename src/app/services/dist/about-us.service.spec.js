"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var about_us_service_1 = require("./about-us.service");
describe('AboutUsService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(about_us_service_1.AboutUsService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
