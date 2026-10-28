[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ExpandedSubscriptionPlanSummaryLineItemsItemVariantModifiersItemText

Selected text group and buyer-entered value. Read an inline text group through its owning modifier set.

Text a buyer entered for a text modifier group on an order line item.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. minLength: `1`. |
| `value` | Required | string | Text entered by the buyer, subject to the group's text rules. minLength: `1`. |

