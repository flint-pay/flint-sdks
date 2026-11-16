[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BackorderPolicyPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `enabled` | Optional | boolean or null | Whether this inventory item allows backorders. `enabled`: [declared alternatives](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributesenabled). |
| `expected_ship_date` | Optional | string or null | Expected shipping date. Null when unknown. `expected_ship_date`: [declared alternatives](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributesexpected_ship_date). |
| `limit_quantity` | Optional | integer or null | Maximum units on backorder across the item's levels. Null when there is no cap. `limit_quantity`: [declared alternatives](../models/BackorderPolicyPreviousAttributes.md#backorderpolicypreviousattributeslimit_quantity). |

### BackorderPolicyPreviousAttributes.enabled

### BackorderPolicyPreviousAttributes.enabled variant 1

anyOf variant 1: Whether this inventory item allows backorders..

- Value shape: boolean. Whether this inventory item allows backorders. 

### BackorderPolicyPreviousAttributes.enabled variant 2

anyOf variant 2.

- Value shape: null. Whether this inventory item allows backorders. 

### BackorderPolicyPreviousAttributes.expected_ship_date

### BackorderPolicyPreviousAttributes.expected_ship_date variant 1

anyOf variant 1: Expected shipping date. Null when unknown..

- Value shape: string. Expected shipping date. Null when unknown. Expected shipping date. Null when unknown. Format: `date`. Example: `"2026-08-02"`. 

### BackorderPolicyPreviousAttributes.expected_ship_date variant 2

anyOf variant 2.

- Value shape: null. Expected shipping date. Null when unknown. 

### BackorderPolicyPreviousAttributes.limit_quantity

### BackorderPolicyPreviousAttributes.limit_quantity variant 1

anyOf variant 1: Maximum units on backorder across the item's levels. Null when there is no cap..

- Value shape: integer. Maximum units on backorder across the item's levels. Null when there is no cap. Maximum units on backorder across the item's levels. Null when there is no cap. Format: `int64`. minimum: `1`. maximum: `9007199254740991`. 

### BackorderPolicyPreviousAttributes.limit_quantity variant 2

anyOf variant 2.

- Value shape: null. Maximum units on backorder across the item's levels. Null when there is no cap. 

