[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AssignToUnconfiguredDeliveryProfileRequestInput

Request input. Response: [GiftCardVersionRequest](../models/GiftCardVersionRequest.md#giftcardversionrequest).

The request body for: Assign unconfigured catalog entries.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Current version of the delivery profile. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |

