[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedChargeTaxPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequestPreviousAttributes](../models/TaxCalculationRequestPreviousAttributes.md#taxcalculationrequestpreviousattributes) or null | The tax you supply for this charge. Used when the order's tax `mode` is `external`. |
| `charge_tax_category` | Optional | string or null | Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. `charge_tax_category`: [declared alternatives](../models/OrderCalculatedChargeTaxPreviousAttributes.md#ordercalculatedchargetaxpreviousattributescharge_tax_category). |
| `taxable` | Optional | boolean or null | Whether the charge is subject to tax. `taxable`: [declared alternatives](../models/OrderCalculatedChargeTaxPreviousAttributes.md#ordercalculatedchargetaxpreviousattributestaxable). |

### OrderCalculatedChargeTaxPreviousAttributes.charge_tax_category

### OrderCalculatedChargeTaxPreviousAttributes.charge_tax_category variant 1

anyOf variant 1: Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned..

- Value shape: string. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`.

### OrderCalculatedChargeTaxPreviousAttributes.charge_tax_category variant 2

anyOf variant 2.

- Value shape: null. Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. 

### OrderCalculatedChargeTaxPreviousAttributes.taxable

### OrderCalculatedChargeTaxPreviousAttributes.taxable variant 1

anyOf variant 1: Whether the charge is subject to tax..

- Value shape: boolean. Whether the charge is subject to tax. 

### OrderCalculatedChargeTaxPreviousAttributes.taxable variant 2

anyOf variant 2.

- Value shape: null. Whether the charge is subject to tax. 

