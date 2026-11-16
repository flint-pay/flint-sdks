[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPostalCodeConditionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject). |
| `values` | Optional | Array of [DeliveryPostalCodeValuePreviousAttributes](../models/DeliveryPostalCodeValuePreviousAttributes.md#deliverypostalcodevaluepreviousattributes) or null | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values`: [declared alternatives](../models/DeliveryPostalCodeConditionPreviousAttributes.md#deliverypostalcodeconditionpreviousattributesvalues). |

### DeliveryPostalCodeConditionPreviousAttributes.subject

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject).

### DeliveryPostalCodeConditionPreviousAttributes.values

### DeliveryPostalCodeConditionPreviousAttributes.values variant 1

anyOf variant 1: Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4..

- Value shape: Array of [DeliveryPostalCodeValuePreviousAttributes](../models/DeliveryPostalCodeValuePreviousAttributes.md#deliverypostalcodevaluepreviousattributes). Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. 

### DeliveryPostalCodeConditionPreviousAttributes.values variant 2

anyOf variant 2.

- Value shape: null. Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. 

