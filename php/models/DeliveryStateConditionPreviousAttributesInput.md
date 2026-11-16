[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryStateConditionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputsubject). |
| `values` | Optional | Array of string or null | ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). `values`: [declared alternatives](../models/DeliveryStateConditionPreviousAttributesInput.md#deliverystateconditionpreviousattributesinputvalues). |

### DeliveryStateConditionPreviousAttributesInput.subject

Declared alternatives: [DeliveryCountryConditionPreviousAttributesInput.subject](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputsubject).

### DeliveryStateConditionPreviousAttributesInput.values

### DeliveryStateConditionPreviousAttributesInput.values variant 1

anyOf variant 1: ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input)..

- Value shape: Array of string. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). Items: minLength: `1`. 

### DeliveryStateConditionPreviousAttributesInput.values variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-2 subdivision codes, such as US-NY or DE-BY. For a US state or Canadian province you can send the two-letter code, such as NY or ON, and Flint stores US-NY or CA-ON. USPS military codes AA, AE, and AP are also accepted and stored as US-AA, US-AE, and US-AP. An address matches when its state names one of these subdivisions of its country, whether it was sent as NY, US-NY, or New York. If the address country is listed by the condition but state names no subdivision of that country, the condition cannot be decided: the method or rate is left out as cannot_calculate (invalid_buyer_input). 

