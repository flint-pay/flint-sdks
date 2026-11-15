[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryPostalCodeCondition







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`. |
| `values` | Required | Array of [DeliveryPostalCodeValue](../models/DeliveryPostalCodeValue.md#deliverypostalcodevalue) | Postal codes, each with its country. Flint compares codes in uppercase without spaces or hyphens. An exact value matches that code, and a prefix value matches every code that starts with it. A five-digit ZIP code in the US or a US territory also matches the ZIP+4 codes within it, so 07030 matches 07030-5788, which address verification returns for a full address. A ZIP+4 value matches only that ZIP+4. `values[]`: [field definitions](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_codevalues), [field definitions](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_codevalues). |

### DeliveryPostalCodeCondition variant 1

anyOf variant 1: Declared schema DeliveryPostalCodeCondition. A delivery eligibility condition that matches the address postal code against exact or prefix `values`..

No additional constraints.

### DeliveryPostalCodeCondition variant 2

anyOf variant 2: Declared schema DeliveryPostalCodeConditionRequest. A delivery eligibility condition that matches the address postal code against exact or prefix `values`..

No additional constraints.

### DeliveryPostalCodeCondition variant 1.values[]

Field definitions: [DeliveryEligibilityExpression.all[].postal_code.values[]](../models/DeliveryEligibilityExpression.md#deliveryeligibilityexpressionallpostal_codevalues).

### DeliveryPostalCodeCondition variant 2.values[]

Field definitions: [DeliveryEligibilityExpressionRequest.all[].postal_code.values[]](../models/DeliveryEligibilityExpressionRequest.md#deliveryeligibilityexpressionrequestallpostal_codevalues).

