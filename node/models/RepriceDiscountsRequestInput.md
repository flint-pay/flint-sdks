[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RepriceDiscountsRequestInput

Request input. Response: [GiftCardVersionRequest](../models/GiftCardVersionRequest.md#giftcardversionrequest).

The request body for: Reprice discounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `expected_version` | Optional | integer string | Optional order version from the last order read. The mutation fails if the order changed. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |

