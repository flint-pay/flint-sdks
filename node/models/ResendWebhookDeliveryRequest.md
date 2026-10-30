[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResendWebhookDeliveryRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Optional | string |  |

### ResendWebhookDeliveryRequest variant 1

anyOf variant 1: Declared schema ResendWebhookDeliveryRequest. The request body for: Resend webhook delivery..

- Constraints for `reason_message`: Your note explaining this action. minLength: `1`. maxLength: `500`.

### ResendWebhookDeliveryRequest variant 2

anyOf variant 2: Declared schema ResolveOrderInventoryExceptionRequest. The request body for: Resolve order inventory exception..

- Constraints for `reason_message`: Your note explaining this action. Leading and trailing whitespace is removed; the remaining note can contain at most 500 characters. minLength: `1`.

