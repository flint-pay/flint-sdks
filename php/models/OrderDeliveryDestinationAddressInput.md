[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationAddressInput

The delivery address on an order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string | maxLength: `100`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Optional | string | maxLength: `255`. |
| `line2` | Optional | string | maxLength: `255`. |
| `postal_code` | Optional | string | maxLength: `20`. |
| `state` | Optional | string | maxLength: `100`. |

