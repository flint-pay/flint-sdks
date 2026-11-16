[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryCustomerSegmentConditionPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `values` | Optional | Array of string or null | Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. `values`: [declared alternatives](../models/DeliveryCustomerSegmentConditionPreviousAttributesInput.md#deliverycustomersegmentconditionpreviousattributesinputvalues). |

### DeliveryCustomerSegmentConditionPreviousAttributesInput.values

### DeliveryCustomerSegmentConditionPreviousAttributesInput.values variant 1

anyOf variant 1: Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them..

- Value shape: Array of string. Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. Items: minLength: `1`. 

### DeliveryCustomerSegmentConditionPreviousAttributesInput.values variant 2

anyOf variant 2.

- Value shape: null. Customer segments to match, from 1 to 100 unique values. Matches when the customer's segment is one of them. 

