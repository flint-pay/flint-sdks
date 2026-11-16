[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedChargeTaxPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequestPreviousAttributesInput](../models/TaxCalculationRequestPreviousAttributesInput.md#taxcalculationrequestpreviousattributesinput) or null | The tax you supply for this charge. Used when the order's tax `mode` is `external`. |
| `charge_tax_category` | Optional | string or null | Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/OrderCalculatedChargeTaxPreviousAttributesInput.md#ordercalculatedchargetaxpreviousattributesinputcharge_tax_category). |
| `taxable` | Optional | boolean or null | Whether the charge is subject to tax. `taxable`: [declared alternatives](../models/OrderCalculatedChargeTaxPreviousAttributesInput.md#ordercalculatedchargetaxpreviousattributesinputtaxable). |

### OrderCalculatedChargeTaxPreviousAttributesInput.charge_tax_category

### OrderCalculatedChargeTaxPreviousAttributesInput.charge_tax_category variant 1

anyOf variant 1: Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned..

- Value shape: string. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`.

### OrderCalculatedChargeTaxPreviousAttributesInput.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. 

### OrderCalculatedChargeTaxPreviousAttributesInput.taxable

### OrderCalculatedChargeTaxPreviousAttributesInput.taxable variant 1

anyOf variant 1: Whether the charge is subject to tax..

- Value shape: boolean. Whether the charge is subject to tax. 

### OrderCalculatedChargeTaxPreviousAttributesInput.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the charge is subject to tax. 

