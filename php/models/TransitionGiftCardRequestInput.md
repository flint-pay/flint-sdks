[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TransitionGiftCardRequestInput

The request body for: Transition a gift card.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"freeze"`, `"unfreeze"`, `"close"`. |
| `expected_version` | Optional | integer | The gift card version last read. The command changes this card only when its current version matches. Format: `int64`. minimum: `1`. |
| `reason` | Conditional | string | Values: `"suspicious_activity"`, `"customer_request"`, `"support_issue"`. |

### TransitionGiftCardRequestInput variant 1: `action` = `"freeze"`

oneOf with action: "freeze": The `freeze` variant of `TransitionGiftCardRequest`..

- Required: `reason`.
- Constraints for `action`: Values: `"freeze"`.

### TransitionGiftCardRequestInput variant 2

oneOf with action: "close" | "unfreeze": The `close` variant of `TransitionGiftCardRequest`. The `unfreeze` variant of `TransitionGiftCardRequest`..

- Condition: not (present(`reason`)).
- Optional: `reason`.
- Constraints for `action`: Values: `"unfreeze"`, `"close"`.

