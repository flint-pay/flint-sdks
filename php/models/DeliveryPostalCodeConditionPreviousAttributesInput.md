[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPostalCodeConditionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputsubject). |
| `values` | Optional | Array of [DeliveryPostalCodeValuePreviousAttributesInput](../models/DeliveryPostalCodeValuePreviousAttributesInput.md#deliverypostalcodevaluepreviousattributesinput) or null | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values`: [declared alternatives](../models/DeliveryPostalCodeConditionPreviousAttributesInput.md#deliverypostalcodeconditionpreviousattributesinputvalues). |

### DeliveryPostalCodeConditionPreviousAttributesInput.subject

Declared alternatives: [DeliveryCountryConditionPreviousAttributesInput.subject](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputsubject).

### DeliveryPostalCodeConditionPreviousAttributesInput.values

### DeliveryPostalCodeConditionPreviousAttributesInput.values variant 1

anyOf variant 1: Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4..

- Value shape: Array of [DeliveryPostalCodeValuePreviousAttributesInput](../models/DeliveryPostalCodeValuePreviousAttributesInput.md#deliverypostalcodevaluepreviousattributesinput). Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. 

### DeliveryPostalCodeConditionPreviousAttributesInput.values variant 2

anyOf variant 2.

- Value shape: null. Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. 

