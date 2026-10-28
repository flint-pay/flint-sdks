[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxRequest

Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderTaxCalculationRequest](../models/OrderTaxCalculationRequest.md#ordertaxcalculationrequest) | How tax is calculated on an order: automatically, or externally with the tax components you supply. |
| `enabled` | Optional | boolean | Default: `true`. |
| `location` | Optional | [OrderTaxLocationRequest](../models/OrderTaxLocationRequest.md#ordertaxlocationrequest) | The tax location you supply for an order, as a postal code or a full address, with or without an address type. |

