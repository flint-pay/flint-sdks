[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialReader

The `reader` variant of `PaymentSourceCredential`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Selects payment collection on a reader. Values: `"reader"`. |
| `reader_id` | Required | string | Active reader in this merchant and environment. Requires payments.readers.write in addition to this operation’s scopes. minLength: `1`. pattern: `^rdr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `tip` | Optional | [ReaderPaymentSourceTip](../models/ReaderPaymentSourceTip.md#readerpaymentsourcetip) | Optional tip collection on a supported smart reader. Tip collection settings for a payment presented on a smart reader. |

