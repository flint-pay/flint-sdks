[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionInput

Identifies a payment intent to confirm for an order and the credential to use: a token, a saved payment method, a Stripe confirmation token, or the attached source.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string |  |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |
| `token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe). |
| `reader_id` | Conditional | string | Active reader in this merchant and environment. Requires payments.readers.write in addition to this operation’s scopes. minLength: `1`. pattern: `^rdr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `tip` | Conditional | [ReaderPaymentSourceTipInput](../models/ReaderPaymentSourceTipInput.md#readerpaymentsourcetipinput) | Optional tip collection on a supported smart reader. Tip collection settings for a payment presented on a smart reader. |

### OrderPaymentIntentSelectionInput variant 1: `credential_type` = `"token"`

oneOf with credential_type: "token": The `token` variant of `OrderPaymentIntentSelection`..

- Required: `token`.
- Undeclared: `payment_method_id`, `stripe`, `reader_id`, `tip`.
- Constraints for `credential_type`: Values: `"token"`.

### OrderPaymentIntentSelectionInput variant 2: `credential_type` = `"payment_method"`

oneOf with credential_type: "payment_method": The `payment_method` variant of `OrderPaymentIntentSelection`..

- Required: `payment_method_id`.
- Undeclared: `token`, `stripe`, `reader_id`, `tip`.
- Constraints for `credential_type`: Values: `"payment_method"`.

### OrderPaymentIntentSelectionInput variant 3: `credential_type` = `"stripe_confirmation_token"`

oneOf with credential_type: "stripe_confirmation_token": The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`..

- Required: `stripe`.
- Undeclared: `token`, `payment_method_id`, `reader_id`, `tip`.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.

### OrderPaymentIntentSelectionInput variant 4: `credential_type` = `"attached"`

oneOf with credential_type: "attached": Confirm using the payment source already attached..

- Undeclared: `token`, `payment_method_id`, `stripe`, `reader_id`, `tip`.
- Constraints for `credential_type`: Values: `"attached"`.

### OrderPaymentIntentSelectionInput variant 5: `credential_type` = `"reader"`

oneOf with credential_type: "reader": The `reader` variant of `OrderPaymentIntentSelection`..

- Required: `reader_id`.
- Optional: `tip`.
- Undeclared: `token`, `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Selects payment collection on a reader. Values: `"reader"`.

### OrderPaymentIntentSelectionInput variant 3.stripe

Field definitions: [ConfirmPaymentIntentRequestInput variant 3.stripe](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe).

