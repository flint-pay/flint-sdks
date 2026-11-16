[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionTaxPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [CheckoutTaxCalculationPreviousAttributesInput](../models/CheckoutTaxCalculationPreviousAttributesInput.md#checkouttaxcalculationpreviousattributesinput) or null | The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. |
| `enabled` | Optional | boolean or null | Whether the session collects tax, as set when it was created. `enabled`: [declared alternatives](../models/CheckoutSessionTaxPreviousAttributesInput.md#checkoutsessiontaxpreviousattributesinputenabled). |
| `location_fixed_by_merchant` | Optional | [AddressPreviousAttributesInput](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinput) or null | The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. |

### CheckoutSessionTaxPreviousAttributesInput.enabled

### CheckoutSessionTaxPreviousAttributesInput.enabled variant 1

anyOf variant 1: Whether the session collects tax, as set when it was created..

- Value shape: boolean. Whether the session collects tax, as set when it was created. 

### CheckoutSessionTaxPreviousAttributesInput.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether the session collects tax, as set when it was created. 

