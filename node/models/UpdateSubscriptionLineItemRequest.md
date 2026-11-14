[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionLineItemRequest

The request body for: Update subscription line item. minProperties: `1`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `variant_id` | Optional | string | ID of the catalog variant to swap the line to. The line keeps its quantity unless `quantity` is also sent, and is priced from the variant's catalog price for the subscription's customer. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

