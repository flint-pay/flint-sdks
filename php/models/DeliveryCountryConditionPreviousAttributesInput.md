[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCountryConditionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `subject` | Optional | string or null | Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Values: `"destination_address"`, `"buyer_location"`. `subject`: [declared alternatives](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputsubject). |
| `values` | Optional | Array of string or null | ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. `values`: [declared alternatives](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinputvalues). |

### DeliveryCountryConditionPreviousAttributesInput.subject

### DeliveryCountryConditionPreviousAttributesInput.subject variant 1

anyOf variant 1: Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location..

- Value shape: string. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. Default: `"destination_address"`. Values: `"destination_address"`, `"buyer_location"`.

### DeliveryCountryConditionPreviousAttributesInput.subject variant 2

anyOf variant 2.

- Value shape: null. Address facts tested by this condition. destination_address is the shipping destination. buyer_location is the buyer's current pickup or local-delivery location. 

### DeliveryCountryConditionPreviousAttributesInput.values

### DeliveryCountryConditionPreviousAttributesInput.values variant 1

anyOf variant 1: ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them..

- Value shape: Array of string. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. Example: `["US"]`. Items: minLength: `1`. 

### DeliveryCountryConditionPreviousAttributesInput.values variant 2

anyOf variant 2.

- Value shape: null. ISO 3166-1 alpha-2 country codes, such as `US`. The address matches when its country is one of them. 

