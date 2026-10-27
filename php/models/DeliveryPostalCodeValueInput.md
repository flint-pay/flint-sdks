[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPostalCodeValueInput

A postal code or postal code prefix with its country, used in a postal code condition.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `type` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"prefix"`. |
| `value` | Required | string | minLength: `1`. |

