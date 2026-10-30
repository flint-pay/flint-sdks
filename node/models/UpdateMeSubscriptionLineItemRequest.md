[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateMeSubscriptionLineItemRequest

The request body for: Swap subscription variant.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `uint64`. minimum: `1`. |
| `variant_id` | Required | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. |

