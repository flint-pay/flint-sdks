[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## SkipMeSubscriptionCycleRequestInput

Request input. Response: [CloseGiftCardRequest](../models/CloseGiftCardRequest.md#closegiftcardrequest).

The request body for: Skip subscription cycle.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |

