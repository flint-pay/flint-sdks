[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TransitionGiftCardRequestWithoutReasonInput

The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of `TransitionGiftCardRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"unfreeze"`, `"close"`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Optional | string | Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. |

