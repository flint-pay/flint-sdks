[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceVersionRequestInput

The request body for: Mark invoice uncollectible; Reactivate a subscription; Reactivate one of the current buyer's subscriptions; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

