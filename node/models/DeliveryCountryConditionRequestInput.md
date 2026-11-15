[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCountryConditionRequestInput

Request input. Response: [DeliveryStateCondition](../models/DeliveryStateCondition.md#deliverystatecondition).

A delivery eligibility condition that matches when the address country is one of `values`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |
| `values` | Required | Array of string | ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. Example: `["US"]`. Items: minLength: `1`. |

