[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TextModifierRequestInput

Request input. Response: [TextModifierRequest](../models/TextModifierRequest.md#textmodifierrequest).

Text a buyer entered for a text modifier group on an order line item.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | Identifier of the text modifier group. For a group a modifier set owns (source: inline), read it through GET /v1/modifier-sets/{modifier_set_id}; /v1/modifier-groups doesn't return it. minLength: `1`. |
| `value` | Required | string | Text entered by the buyer, subject to the group's text rules. minLength: `1`. |

