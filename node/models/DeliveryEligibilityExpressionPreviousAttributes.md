[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryEligibilityExpressionPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Optional | Array of [DeliveryEligibilityExpressionPreviousAttributes](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributes) or null | Matches when every nested expression matches. `all`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesall). |
| `any` | Optional | Array of [DeliveryEligibilityExpressionPreviousAttributes](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributes) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesany). |
| `country` | Optional | [DeliveryStateConditionPreviousAttributes](../models/DeliveryStateConditionPreviousAttributes.md#deliverystateconditionpreviousattributes) or null | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry). |
| `customer_has_email` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributes](../models/DeliveryCustomerBooleanConditionPreviousAttributes.md#deliverycustomerbooleanconditionpreviousattributes) or null | Matches when whether the customer has an email address equals `value`. |
| `customer_has_phone` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributes](../models/DeliveryCustomerBooleanConditionPreviousAttributes.md#deliverycustomerbooleanconditionpreviousattributes) or null | Matches when whether the customer has a phone number equals `value`. |
| `customer_merchant_verified` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributes](../models/DeliveryCustomerBooleanConditionPreviousAttributes.md#deliverycustomerbooleanconditionpreviousattributes) or null | Matches the is_merchant_verified flag you set on the customer against value. |
| `customer_segment` | Optional | [DeliveryCustomerSegmentConditionPreviousAttributes](../models/DeliveryCustomerSegmentConditionPreviousAttributes.md#deliverycustomersegmentconditionpreviousattributes) or null | Matches the free-form segment you assign to the customer against values. |
| `not` | Optional | [DeliveryEligibilityExpressionPreviousAttributes](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributes) or null | Matches when the nested expression does not match. |
| `postal_code` | Optional | [DeliveryPostalCodeConditionPreviousAttributes](../models/DeliveryPostalCodeConditionPreviousAttributes.md#deliverypostalcodeconditionpreviousattributes) or null | Matches when the address postal code matches one of the listed codes. |
| `radius` | Optional | [DeliveryRadiusConditionPreviousAttributes](../models/DeliveryRadiusConditionPreviousAttributes.md#deliveryradiusconditionpreviousattributes) or null | Matches when the address is within a set distance of an origin. |
| `state` | Optional | [DeliveryStateConditionPreviousAttributes](../models/DeliveryStateConditionPreviousAttributes.md#deliverystateconditionpreviousattributes) or null | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesstate). |
| `subscription_purchase` | Optional | [DeliveryCustomerBooleanConditionPreviousAttributes](../models/DeliveryCustomerBooleanConditionPreviousAttributes.md#deliverycustomerbooleanconditionpreviousattributes) or null | Matches when whether the purchase is a subscription purchase equals `value`. |
| `window_time` | Optional | [DeliveryWindowTimeConditionPreviousAttributes](../models/DeliveryWindowTimeConditionPreviousAttributes.md#deliverywindowtimeconditionpreviousattributes) or null | Matches when the delivery window falls on the listed weekdays and within the listed time of day, in the window's timezone. |
| `zone` | Optional | [DeliveryZoneConditionPreviousAttributes](../models/DeliveryZoneConditionPreviousAttributes.md#deliveryzoneconditionpreviousattributes) or null | Matches when the address is inside the delivery zone you name. |

### DeliveryEligibilityExpressionPreviousAttributes variant 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14

anyOf variant 1; anyOf variant 2; anyOf variant 3; anyOf variant 4; anyOf variant 5; anyOf variant 6; anyOf variant 7; anyOf variant 8; anyOf variant 9; anyOf variant 10; anyOf variant 11; anyOf variant 12; anyOf variant 13; anyOf variant 14.

No additional constraints.

### DeliveryEligibilityExpressionPreviousAttributes.all

### DeliveryEligibilityExpressionPreviousAttributes.all variant 1

anyOf variant 1: Matches when every nested expression matches..

- Value shape: Array of ([DeliveryEligibilityExpressionPreviousAttributes](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributes) and Alternative shapes (see declared variants)). Matches when every nested expression matches. Matches when every nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryEligibilityExpressionPreviousAttributes.all variant 2

anyOf variant 2.

- Value shape: null. Matches when every nested expression matches. 

### DeliveryEligibilityExpressionPreviousAttributes.any

### DeliveryEligibilityExpressionPreviousAttributes.any variant 1

anyOf variant 1: Matches when at least one nested expression matches..

- Value shape: Array of ([DeliveryEligibilityExpressionPreviousAttributes](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributes) and Alternative shapes (see declared variants)). Matches when at least one nested expression matches. Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryEligibilityExpressionPreviousAttributes.any variant 2

anyOf variant 2.

- Value shape: null. Matches when at least one nested expression matches. 

### DeliveryEligibilityExpressionPreviousAttributes.country

Matches when the address is in one of the listed countries.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Conditional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject). |
| `values` | Conditional | Array of string or null | ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. `values`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1values). |

### DeliveryEligibilityExpressionPreviousAttributes.country variant 1

anyOf DeliveryCountryConditionPreviousAttributes.

- Optional: `subject`, `values`.

### DeliveryEligibilityExpressionPreviousAttributes.country variant 2

anyOf variant 2.

- Undeclared: `subject`, `values`.
- Value shape: null. Matches when the address is in one of the listed countries. 

### DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject

### DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject variant 1

anyOf variant 1: Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location..

- Value shape: string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`.

### DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject variant 2

anyOf variant 2.

- Value shape: null. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. 

### DeliveryEligibilityExpressionPreviousAttributes.country variant 1.values

### DeliveryEligibilityExpressionPreviousAttributes.country variant 1.values variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them..

- Value shape: Array of string. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. Example: `["US"]`. Items: minLength: `1`. 

### DeliveryEligibilityExpressionPreviousAttributes.country variant 1.values variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. 

### DeliveryEligibilityExpressionPreviousAttributes.state

Matches when the address is in one of the listed states or provinces.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Conditional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject). |
| `values` | Conditional | Array of string or null | ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). `values`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesstate-variant-1values). |

### DeliveryEligibilityExpressionPreviousAttributes.state variant 1

anyOf DeliveryStateConditionPreviousAttributes.

- Optional: `subject`, `values`.

### DeliveryEligibilityExpressionPreviousAttributes.state variant 2

anyOf variant 2.

- Undeclared: `subject`, `values`.
- Value shape: null. Matches when the address is in one of the listed states or provinces. 

### DeliveryEligibilityExpressionPreviousAttributes.state variant 1.subject

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.country variant 1.subject](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry-variant-1subject).

### DeliveryEligibilityExpressionPreviousAttributes.state variant 1.values

### DeliveryEligibilityExpressionPreviousAttributes.state variant 1.values variant 1

anyOf variant 1: ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input)..

- Value shape: Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). Items: minLength: `1`. 

### DeliveryEligibilityExpressionPreviousAttributes.state variant 1.values variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). 

