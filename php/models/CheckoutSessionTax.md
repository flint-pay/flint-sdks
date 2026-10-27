[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckoutSessionTax

Tax settings of a checkout session: whether it collects tax and any tax location the merchant fixed.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean | Whether the session collects tax, as set when it was created. |
| `location_fixed_by_merchant` | Optional | [CheckoutTaxLocation](../models/CheckoutTaxLocation.md#checkouttaxlocation) | The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. A tax location: country and postal code, with address lines, city, and state when set. `location_fixed_by_merchant`: [field definitions](../models/CheckoutSessionTax.md#checkoutsessiontaxlocation_fixed_by_merchant). |

### CheckoutSessionTax.location_fixed_by_merchant

The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. A tax location: country and postal code, with address lines, city, and state when set.

Field definitions: [shared fields](CheckoutTaxLocationInput.md#checkouttaxlocationinput).

