[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPostalCodeValuePreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `country` | Optional | string or null | ISO 3166-1 alpha-2 country code. `country`: [declared alternatives](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputcountry). |
| `type` | Optional | string or null | Whether `value` is a whole postal code or the start of one. Values: `"exact"`, `"prefix"`. `type`: [declared alternatives](../models/DeliveryPostalCodeValuePreviousAttributesInput.md#deliverypostalcodevaluepreviousattributesinputtype). |
| `value` | Optional | string or null | The postal code, or the start of postal codes, to match. `value`: [declared alternatives](../models/DeliveryPostalCodeValuePreviousAttributesInput.md#deliverypostalcodevaluepreviousattributesinputvalue). |

### DeliveryPostalCodeValuePreviousAttributesInput.country

Declared alternatives: [AddressPreviousAttributesInput.country](../models/AddressPreviousAttributesInput.md#addresspreviousattributesinputcountry).

### DeliveryPostalCodeValuePreviousAttributesInput.type

### DeliveryPostalCodeValuePreviousAttributesInput.type variant 1

anyOf variant 1: Whether `value` is a whole postal code or the start of one..

- Value shape: string. Whether `value` is a whole postal code or the start of one. Whether `value` is a whole postal code or the start of one. Default: `"exact"`. Values: `"exact"`, `"prefix"`.

### DeliveryPostalCodeValuePreviousAttributesInput.type variant 2

anyOf variant 2.

- Value shape: null. Whether `value` is a whole postal code or the start of one. 

### DeliveryPostalCodeValuePreviousAttributesInput.value

### DeliveryPostalCodeValuePreviousAttributesInput.value variant 1

anyOf variant 1: The postal code, or the start of postal codes, to match..

- Value shape: string. The postal code, or the start of postal codes, to match. The postal code, or the start of postal codes, to match. minLength: `1`. 

### DeliveryPostalCodeValuePreviousAttributesInput.value variant 2

anyOf variant 2.

- Value shape: null. The postal code, or the start of postal codes, to match. 

