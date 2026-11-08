[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPostalCodeValue







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Required | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `type` | Optional | string | Default: `"exact"`. Values: `"exact"`, `"prefix"`. |
| `value` | Required | string | minLength: `1`. |

### DeliveryPostalCodeValue variant 1

anyOf variant 1: Declared schema DeliveryPostalCodeValue. A postal code or postal code prefix with its country, used in a postal code condition..

No additional constraints.

### DeliveryPostalCodeValue variant 2

anyOf variant 2: Declared schema DeliveryPostalCodeValueRequest. A postal code or postal code prefix with its country, used in a postal code condition..

No additional constraints.

