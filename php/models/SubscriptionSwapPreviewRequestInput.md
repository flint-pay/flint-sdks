[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SubscriptionSwapPreviewRequestInput

A proposed item swap for a buyer renewal preview: the subscription line item and the variant to price in its place.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `subscription_line_item_id` | Required | string | ID of the subscription line item to swap. minLength: `1`. pattern: `^sli_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sli_01KEZF7C00PPWVJ2N321V84ASA"`. |
| `variant_id` | Required | string | ID of the variant to price in place of the line item's current variant. minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

