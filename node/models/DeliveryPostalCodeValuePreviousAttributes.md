[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPostalCodeValuePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributes.md#addresspreviousattributescountry). |
| `type` | Optional | string or null | Whether `value` is a whole postal code or the start of one. Values: `"exact"`, `"prefix"`. `type`: [declared alternatives](../models/DeliveryPostalCodeValuePreviousAttributes.md#deliverypostalcodevaluepreviousattributestype). |
| `value` | Optional | string or null | The postal code, or the start of postal codes, to match. `value`: [declared alternatives](../models/DeliveryPostalCodeValuePreviousAttributes.md#deliverypostalcodevaluepreviousattributesvalue). |

### DeliveryPostalCodeValuePreviousAttributes.country

Declared alternatives: [AddressPreviousAttributes.country](../models/AddressPreviousAttributes.md#addresspreviousattributescountry).

### DeliveryPostalCodeValuePreviousAttributes.type

### DeliveryPostalCodeValuePreviousAttributes.type variant 1

anyOf variant 1: Whether `value` is a whole postal code or the start of one..

- Value shape: string. Whether `value` is a whole postal code or the start of one. Whether `value` is a whole postal code or the start of one. Default: `"exact"`. Values: `"exact"`, `"prefix"`.

### DeliveryPostalCodeValuePreviousAttributes.type variant 2

anyOf variant 2.

- Value shape: null. Whether `value` is a whole postal code or the start of one. 

### DeliveryPostalCodeValuePreviousAttributes.value

### DeliveryPostalCodeValuePreviousAttributes.value variant 1

anyOf variant 1: The postal code, or the start of postal codes, to match..

- Value shape: string. The postal code, or the start of postal codes, to match. The postal code, or the start of postal codes, to match. minLength: `1`. 

### DeliveryPostalCodeValuePreviousAttributes.value variant 2

anyOf variant 2.

- Value shape: null. The postal code, or the start of postal codes, to match. 

