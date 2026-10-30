[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RiskListItem

One value in a payment risk list.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `created_by` | Required | [ResourceReference](../models/ResourceReference.md#resourcereference) or null | The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. `created_by`: [declared alternatives](../models/RiskListItem.md#risklistitemcreated_by). |
| `risk_list_id` | Required | string |  |
| `risk_list_item_id` | Required | string |  |
| `value` | Required | string | The value as stored after item_type normalization, which is what payments are matched against. |

### RiskListItem.created_by

The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode.

Field definitions: [shared fields](CheckoutDeliveryPinnedDependency.md#checkoutdeliverypinneddependencydependency).

### RiskListItem.created_by variant 1

anyOf ResourceReference: A reference to another resource by `resource_type` and `resource_id`..

- Required: `resource_id`, `resource_type`.

### RiskListItem.created_by variant 2

anyOf variant 2.

- Undeclared: `resource_id`, `resource_type`.
- Value shape: null. The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. 

