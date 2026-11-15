import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import * as sdk from "../node/index.js";
import { readFileSync } from "node:fs";

const models = [
  "CreateOrderLineItemInputCustom",
  "UpdateLineItemRequest",
  "PaymentLinkLineItemInputCustomFixed",
  "PaymentLinkLineItemInputCustomVariable",
  "PaymentLinkLineItemPatchInputCustomFixed",
  "PaymentLinkLineItemPatchInputCustomVariable",
];
const samples = {
  CreateOrderLineItemInputCustom: { type: "custom", name: "Synthetic service", quantity: 1, unit_price_money: { amount: "100", currency: "USD" }, fulfillment: { requirement: "none" } },
  UpdateLineItemRequest: { expected_version: 1 },
  PaymentLinkLineItemInputCustomFixed: { type: "custom_fixed", name: "Synthetic service", quantity: 1, unit_price_money: { amount: "100", currency: "USD" } },
  PaymentLinkLineItemInputCustomVariable: { type: "custom_variable", name: "Synthetic service", quantity: 1, allow_unit_price_adjustment: true },
  PaymentLinkLineItemPatchInputCustomFixed: { type: "custom_fixed", name: "Synthetic service", unit_price_money: { amount: "100", currency: "USD" } },
  PaymentLinkLineItemPatchInputCustomVariable: { type: "custom_variable", name: "Synthetic service", allow_unit_price_adjustment: true },
};

for (const name of models) {
  test(`Node ${name} retains classification and omits an unspecified classification`, () => {
    const make = sdk[`make${name}`];
    for (const product_type of ["physical", "digital", "service", "fee"]) {
      assert.equal(make({ ...samples[name], product_type }).toJSON().product_type, product_type);
    }
    assert.equal(Object.hasOwn(make(samples[name]).toJSON(), "product_type"), false);
    assert.throws(() => make({ ...samples[name], product_type: null }));
  });
}

test("PHP custom-line inputs retain classification without a default and reject null", () => {
  execFileSync("php", ["-r", String.raw`
require 'php/src/Runtime.php';
require 'php/src/Client.php';
$samples = json_decode($argv[1], true, 512, JSON_THROW_ON_ERROR);
foreach ($samples as $name => $sample) {
  $class = '\\Flint\\' . $name . 'Input';
  foreach (['physical', 'digital', 'service', 'fee'] as $value) {
    $input = new $class(array_merge($sample, ['product_type' => $value]));
    $json = json_decode(json_encode($input, JSON_THROW_ON_ERROR), true);
    if ($json['product_type'] !== $value) throw new RuntimeException($name . ' lost classification');
  }
  $json = json_decode(json_encode(new $class($sample), JSON_THROW_ON_ERROR), true);
  if (array_key_exists('product_type', $json)) throw new RuntimeException($name . ' invented a default');
  $rejected = false;
  try { new $class(array_merge($sample, ['product_type' => null])); }
  catch (\Flint\SdkError $error) { $rejected = true; }
  if (!$rejected) throw new RuntimeException($name . ' accepted null');
}
`, JSON.stringify(samples)], { cwd: new URL("..", import.meta.url), timeout: 30000 });
});

// The request vocabulary deliberately excludes gift cards, while response types
// also describe catalog-backed gift-card lines and unknown legacy lines.
test("the pinned contract keeps custom classification optional and responses nullable", () => {
  const { components: { schemas } } = JSON.parse(readFileSync(new URL("../spec/openapi.json", import.meta.url)));
  for (const name of models) {
    const schema = schemas[name];
    assert.deepEqual([...schema.properties.product_type.enum].sort(), ["digital", "fee", "physical", "service"]);
    assert.equal(Object.hasOwn(schema.properties.product_type, "default"), false);
    assert.equal((schema.required ?? []).includes("product_type"), false);
  }
  for (const name of ["OrderLineItem", "BuyerOrderLineItem", "InvoiceLineItem", "PaymentLinkLineItemCustomFixed", "PaymentLinkLineItemCustomVariable"]) {
    assert.ok(schemas[name].required.includes("product_type"), name);
    assert.ok(schemas[name].properties.product_type.type.includes("null"), name);
  }
});
