[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCardPresentDetails

Card and wallet details recorded when a payment is presented on a reader.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `application_id` | Required | string or null | EMV application identifier (AID). Null when absent or outside the supported shape. pattern: `^[0-9A-F]{10,32}$`. Example: `"A0000000031010"`. |
| `application_name` | Required | string or null | Card application's label, such as VISA CREDIT. Null when absent or outside the supported shape. pattern: `^[ -~]{1,16}$`. |
| `authorization_code` | Required | string or null | Issuer's authorization code. Null when absent or outside the supported shape. pattern: `^[0-9A-Za-z]{1,12}$`. |
| `cardholder_verification` | Required | string | How the buyer was verified. consumer_device means the phone verified the buyer. Unrecognized methods are other. Values: `"pin"`, `"signature"`, `"consumer_device"`, `"none"`, `"other"`. |
| `read_method` | Required | string | How the card was read. swipe_fallback means a swipe after a failed chip read. Unrecognized methods are other. Values: `"contactless"`, `"chip"`, `"swipe"`, `"swipe_fallback"`, `"other"`. |
| `wallet` | Optional | string | Wallet used on the reader. Absent when a card was used; unrecognized wallets are other. Values: `"apple_pay"`, `"google_pay"`, `"samsung_pay"`, `"other"`. |

