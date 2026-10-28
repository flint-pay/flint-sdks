[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAddressRequest

A partial address for delivery quotes, previews, and buyer locations. Country is required when any member is present.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string | minLength: `1`. maxLength: `100`. |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Optional | string | minLength: `1`. maxLength: `255`. |
| `line2` | Optional | string | minLength: `1`. maxLength: `255`. |
| `postal_code` | Optional | string | minLength: `1`. maxLength: `20`. |
| `state` | Optional | string | State, province, or region. State conditions read it as a subdivision of the address's country: send its code with or without the country prefix, such as NY or US-NY. In the US and Canada, the English name, such as New York, also matches. US addresses also accept the USPS military codes AA, AE, and AP. If the address country is listed by a state condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). minLength: `1`. maxLength: `100`. |

