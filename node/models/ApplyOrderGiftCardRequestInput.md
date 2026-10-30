[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ApplyOrderGiftCardRequestInput

Request input. Response: [GiftCardVersionRequest](../models/GiftCardVersionRequest.md#giftcardversionrequest).

The request body for: Apply a gift card to an order.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | minLength: `1`. maxLength: `64`. Input only. |
| `expected_version` | Optional | integer | Optional order version from the last order read. The mutation fails if the order changed. Format: `int64`. minimum: `1`. |

