[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryQuoteChoiceGroupResourceCandidateOutcomesValueAvailableOptionPickupLocationAddress

An address as returned on delivery quotes, selections, previews, and pickup locations.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string |  |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. |
| `line1` | Optional | string |  |
| `line2` | Optional | string |  |
| `postal_code` | Optional | string |  |
| `state` | Optional | string |  |

