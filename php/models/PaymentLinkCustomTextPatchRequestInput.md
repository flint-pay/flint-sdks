[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkCustomTextPatchRequestInput

Changes to a payment link's custom checkout text. Send null to clear a field.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `order_summary_message` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `2048`. |
| `shipping_address_label` | Optional | string or null | Send null to clear it. minLength: `1`. maxLength: `255`. |

