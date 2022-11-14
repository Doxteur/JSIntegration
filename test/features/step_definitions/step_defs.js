var assert = require('assert');
const {Before, Given, When, Then} = require('@cucumber/cucumber');

let x;
let y;

Given('I Buy a drilling tool worth ${int}', function (int) {
    x = int;
    }
);

Given('I buy the plant worth ${int}', function (int) {
    y = int;
    }
);

Then('I should have ${int} in my account', function (int) {
    assert.equal(x+y, int);
    }
);



