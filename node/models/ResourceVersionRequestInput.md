[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ResourceVersionRequestInput

Request input. Response: [GiftCardVersionRequest](../models/GiftCardVersionRequest.md#giftcardversionrequest).

The request body for: Mark invoice uncollectible; Regenerate invoice public link; Resume one of the current buyer's subscriptions; Resume subscription; Reverse credit note allocation; Void credit note; Void invoice.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Format: `int64`. minimum: `1`. |

