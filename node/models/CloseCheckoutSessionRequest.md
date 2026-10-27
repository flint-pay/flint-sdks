[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CloseCheckoutSessionRequest







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `reason_message` | Optional | string |  |

### CloseCheckoutSessionRequest variant 1

anyOf variant 1: Declared schema CloseCheckoutSessionRequest. The request body for: Close checkout session..

- Constraints for `reason_message`: Your note explaining why you are closing the checkout session. It is not shown to the buyer. minLength: `1`.

### CloseCheckoutSessionRequest variant 2

anyOf variant 2: Declared schema ResendWebhookDeliveryRequest. The request body for: Resend webhook delivery..

- Constraints for `reason_message`: Your note explaining this action. minLength: `1`. maxLength: `500`.

### CloseCheckoutSessionRequest variant 3

anyOf variant 3: Declared schema ResolveOrderInventoryExceptionRequest. The request body for: Resolve order inventory exception..

- Constraints for `reason_message`: Your note explaining this action. minLength: `1`.

