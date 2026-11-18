[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkLineItemModifierRequestInput

A modifier selection for a payment link line item: a modifier option with a quantity, or a text value.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_id` | Conditional | string | ID of the modifier option the buyer chose. Required for `type: catalog`; omit for `type: text`. minLength: `1`. Example: `"mod_01KEZF7C00SAWDZBQJX5H0XW1S"`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `text` | Conditional | [ResolvePaymentLinkTextModifierRequestInput](../models/ResolvePaymentLinkTextModifierRequestInput.md#resolvepaymentlinktextmodifierrequestinput) | The text the buyer entered for a text modifier group. Required for `type: text`; omit for `type: catalog`. The text a buyer entered for a text modifier group on a payment link line item. |
| `type` | Required | string | Selects the modifier input branch, matching order line item modifiers. Values: `"catalog"`, `"text"`. |

### ResolvePaymentLinkLineItemModifierRequestInput variant 1: `type` = `"catalog"`

oneOf with type: "catalog": The `catalog` variant of `ResolvePaymentLinkLineItemModifierInput`..

- Condition: not (present(`text`)).
- Required: `modifier_id`.
- Optional: `text`.
- Constraints for `type`: Values: `"catalog"`.

### ResolvePaymentLinkLineItemModifierRequestInput variant 2: `type` = `"text"`

oneOf with type: "text": The `text` variant of `ResolvePaymentLinkLineItemModifierInput`..

- Condition: not (at least one(present(`modifier_id`); present(`quantity`))).
- Required: `text`.
- Optional: `modifier_id`.
- Constraints for `type`: Values: `"text"`.

