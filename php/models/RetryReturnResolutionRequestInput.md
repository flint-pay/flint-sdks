[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RetryReturnResolutionRequestInput

The request body for: Retry return resolution.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |
| `gift_card_refund_destination` | Optional | string | Where the gift-card-paid portion is refunded. original credits the original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a correction of store_credit. Omit for store_credit, replacement, and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and its corrections always issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen destination before starting the new attempt. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `reason` | Required | string | Values: `"dependency_recovered"`, `"payment_method_updated"`, `"operator_retry"`, `"other"`. |
| `reason_message` | Optional | string | minLength: `1`. |

