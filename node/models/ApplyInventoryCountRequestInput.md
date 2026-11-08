[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApplyInventoryCountRequestInput

Request input. Response: [CloseGiftCardRequest](../models/CloseGiftCardRequest.md#closegiftcardrequest).

Sets inventory levels to the counted quantities of an open physical count. Every line needs an observation. VERSION_CONFLICT also covers a stale saved physical observation with no corresponding field in this request; these details omit param. Recount affected items and save the complete observations before applying again. Physical changes after observation require recounts, including at a trading location; holds and commitments alone do not invalidate observations.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | Optional resource version the caller last read. Enforced when sent. Format: `uint64`. minimum: `1`. |

