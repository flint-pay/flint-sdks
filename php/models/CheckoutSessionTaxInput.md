[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionTaxInput

Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether the session collects tax, as set when it was created. |
| `location_fixed_by_merchant` | Optional | [CheckoutTaxLocationInput](../models/CheckoutTaxLocationInput.md#checkouttaxlocationinput) | The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. A tax location: country and postal code, with address lines, city, and state when set. |

