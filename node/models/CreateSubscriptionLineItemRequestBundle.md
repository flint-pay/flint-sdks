[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionLineItemRequestBundle

The `bundle` variant of `CreateSubscriptionLineItemRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `expected_subscription_version` | Optional | integer | Subscription version last read. A stale version returns VERSION_CONFLICT. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `type` | Required | string | The catalog source of the new line: variant or bundle. Values: `"bundle"`. |
| `variant_id` | Optional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

