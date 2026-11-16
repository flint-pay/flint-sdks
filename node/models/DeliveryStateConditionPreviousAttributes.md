[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryStateConditionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject). |
| `values` | Optional | Array of string or null | `values`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1values), [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesstate-variant-1values). |

### DeliveryStateConditionPreviousAttributes variant 1

anyOf variant 1: Declared schema DeliveryCountryConditionPreviousAttributes. .

- Constraints for `values`: ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them.

### DeliveryStateConditionPreviousAttributes variant 2

anyOf variant 2: Declared schema DeliveryStateConditionPreviousAttributes. .

- Constraints for `values`: ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input).

### DeliveryStateConditionPreviousAttributes.subject

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject).

### DeliveryStateConditionPreviousAttributes variant 1.values

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.country variant 1.values](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1values).

### DeliveryStateConditionPreviousAttributes variant 2.values

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.state variant 1.values](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesstate-variant-1values).

