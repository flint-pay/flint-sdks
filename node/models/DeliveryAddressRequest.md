[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryAddressRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `city` | Optional | string |  |
| `country` | Optional | string | ISO 3166-1 alpha-2 country code. minLength: `2`. maxLength: `2`. pattern: `^[A-Z]{2}$`. Example: `"US"`. |
| `line1` | Optional | string |  |
| `line2` | Optional | string |  |
| `postal_code` | Optional | string |  |
| `state` | Optional | string |  |

### DeliveryAddressRequest variant 1

anyOf variant 1: Declared schema DeliveryAddressRequest. An address you supply for delivery quotes, previews, and selections..

- Constraints for `city`: minLength: `1`.
- Constraints for `line1`: minLength: `1`.
- Constraints for `line2`: minLength: `1`.
- Constraints for `postal_code`: minLength: `1`.
- Constraints for `state`: State, province, or region. State conditions read it as a subdivision of the address's country: send its code with or without the country prefix, such as NY or US-NY. In the US and Canada, the English name, such as New York, also matches. US addresses also accept the USPS military codes AA, AE, and AP. If the address country is listed by a state condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). minLength: `1`.

### DeliveryAddressRequest variant 2

anyOf variant 2: Declared schema DeliveryAddressResource. An address as returned on delivery quotes, selections, previews, and pickup locations..

No additional constraints.

