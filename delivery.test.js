const { test } = require("node:test");
const assert = require("node:assert/strict");
const deliveryCharge = require("./delivery.js");

test("Delivery is free at £50", () => {
  assert.equal(deliveryCharge(50), 0);
});

test("Delivery costs £3.99 below £50", () => {
  assert.equal(deliveryCharge(49.99), 3.99);
});
