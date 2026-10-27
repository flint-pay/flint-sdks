[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCountryConditionInput

A delivery eligibility condition that matches when the address country is one of `values`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |
| `values` | Required | Array of string | Example: `["US"]`. Items: minLength: `1`. |

