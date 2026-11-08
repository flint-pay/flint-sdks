[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResolvePaymentLinkTextModifierRequestInput

The text a buyer entered for a text modifier group on a payment link line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `modifier_group_id` | Required | string | ID of the text modifier group the buyer answered. minLength: `1`. Example: `"mg_01KEZF7C00XKJJATARG7KDBYM9"`. |
| `value` | Required | string | The text the buyer entered. minLength: `1`. |

