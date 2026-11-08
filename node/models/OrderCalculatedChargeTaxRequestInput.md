[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedChargeTaxRequestInput

Request input. Response: [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax).

Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequestRequestInput](../models/TaxCalculationRequestRequestInput.md#taxcalculationrequestrequestinput) | The tax you supply for this charge. Used when the order's tax `mode` is `external`. Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. Input only. |
| `charge_tax_category` | Optional | string | Tax category of the charge, which decides its automatic tax: service_fee, shipping, delivery, handling, and surcharge are taxed at the general rate at the charge location, including the store for pickup. A taxable charge without a category fails with `INVALID_REQUEST` and a `NOT_ALLOWED` detail on the charge. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `taxable` | Optional | boolean | Whether the charge is subject to tax. |

