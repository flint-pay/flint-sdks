[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryMethodConfigurationPublicDetails

Buyer-visible structured details supplied by the merchant.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `instructions` | Optional | string | Buyer-visible instructions for this method. maxLength: `2048`. |
| `pickup_mode` | Optional | string | Required for pickup methods and rejected for other method types. Values: `"in_store"`, `"curbside"`, `"locker"`, `"other"`. |
| `service_level` | Optional | string | Buyer-visible service level. Shipment accepts economy, standard, expedited, express, overnight, same_day. Local delivery accepts on_demand, same_day, scheduled. Values: `"economy"`, `"standard"`, `"expedited"`, `"express"`, `"overnight"`, `"same_day"`, `"on_demand"`, `"scheduled"`. |

