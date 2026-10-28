[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxRequestInput

Tax settings you supply when creating an order: whether tax is enabled, how it is calculated, and the tax location.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation` | Optional | [OrderTaxCalculationRequestInput](../models/OrderTaxCalculationRequestInput.md#ordertaxcalculationrequestinput) | How tax is calculated on an order: automatically, or externally with the tax components you supply. |
| `enabled` | Optional | boolean | Default: `true`. |
| `location` | Optional | [OrderTaxLocationRequestInput](../models/OrderTaxLocationRequestInput.md#ordertaxlocationrequestinput) | The tax location you supply for an order, as a postal code or a full address, with or without an address type. |

