[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDeliveryDestinationAddressRequestInput

The delivery address you supply on an order. Postal code and state are required for US addresses.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Required | string | minLength: `1`. maxLength: `100`. pattern: `\S`. |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Required | string | minLength: `1`. maxLength: `255`. pattern: `\S`. |
| `line2` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |
| `postal_code` | Optional | string | Required for US addresses. Postal code when used by the destination country's postal format. maxLength: `20`. |
| `state` | Optional | string | Required for US addresses. State, province, or region when used by the destination country's postal format. maxLength: `100`. |

