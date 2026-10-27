[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderCalculatedChargeTaxInput

Request input. Response: [OrderCalculatedChargeTax](../models/OrderCalculatedChargeTax.md#ordercalculatedchargetax).

Tax settings for an order charge calculated by Flint or supplied by you, including the charge's tax category and whether it is taxable.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [TaxCalculationRequestInput](../models/TaxCalculationRequestInput.md#taxcalculationrequestinput) | Tax you calculated yourself for a line or charge: whether prices include tax, and the tax components. Input only. |
| `charge_tax_category` | Optional | string | Tax category of the charge, which decides its automatic tax: shipping and delivery are taxed at the general rate, and a taxable charge in another category fails with AUTOMATIC_TAX_CHARGE_UNSUPPORTED. Omitted, the charge takes delivery from delivery_fee, shipping from shipping_fee, service_fee from service_fee, and handling from handling_fee; other types take none. The default follows type and is not returned. Values: `"service_fee"`, `"shipping"`, `"delivery"`, `"handling"`, `"surcharge"`. |
| `taxable` | Optional | boolean |  |

