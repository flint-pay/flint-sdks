[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TransitionGiftCardRequestInput

The request body for: Transition a gift card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"freeze"`, `"unfreeze"`, `"close"`. |
| `expected_version` | Optional | integer string | The gift card version last read. The command changes this card only when its current version matches. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `reason` | Conditional | string | Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. |

### TransitionGiftCardRequestInput variant 1: `action` = `"freeze"`

oneOf variant 1: The `freeze` variant of `TransitionGiftCardRequest`..

- Required: `reason`.
- Constraints for `action`: Values: `"freeze"`.

### TransitionGiftCardRequestInput variant 2

oneOf variant 2: The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of `TransitionGiftCardRequest`..

- Condition: not (present(`reason`)).
- Optional: `reason`.
- Constraints for `action`: Values: `"unfreeze"`, `"close"`.

