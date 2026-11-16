[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CancelOrderEditRequestInput

Request input. Response: [CloseGiftCardRequest](../models/CloseGiftCardRequest.md#closegiftcardrequest).

Cancel a pending order edit.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer | The order edit version to cancel. A mismatch returns VERSION_CONFLICT before changes. Format: `uint64`. minimum: `1`. |

