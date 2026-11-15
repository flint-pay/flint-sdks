[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialInput

The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Selects the credential supplied for this payment. |
| `customer_presence` | Conditional | string | Whether the customer is present for this payment. Defaults to present. Send absent to charge a saved card while the customer is away, such as for a no-show fee, damages, or a top-up. Flint then sends the charge to the card network as merchant-initiated, using the card's stored credential, so the bank can't ask the customer to authenticate. absent can be sent only with an API key or partner token, and only for a saved card whose usage is off_session; a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason payment_method_not_reusable. If the bank still requires authentication, the payment fails with status requires_payment_method and last_payment_error.code authentication_required. Ask the customer to pay while present instead of retrying. Default: `"present"`. Values: `"present"`, `"absent"`. |
| `payment_method_id` | Conditional | string | A payment method saved in Flint for the customer making this payment. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput-variant-2stripe), [field definitions](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput-variant-3stripe). |
| `reader_id` | Conditional | string | Active reader in this merchant and environment. Requires payments.readers.write in addition to this operation's scopes. minLength: `1`. pattern: `^rdr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `tip` | Conditional | [ReaderPaymentSourceTipInput](../models/ReaderPaymentSourceTipInput.md#readerpaymentsourcetipinput) | Optional tip collection on a supported smart reader. Tip collection settings for a payment presented on a smart reader. |

### PaymentSourceCredentialInput variant 1: `credential_type` = `"payment_method"`

oneOf with credential_type: "payment_method": The `payment_method` variant of `PaymentSourceCredential`..

- Required: `payment_method_id`.
- Optional: `customer_presence`.
- Undeclared: `stripe`, `reader_id`, `tip`.
- Constraints for `credential_type`: Values: `"payment_method"`.

### PaymentSourceCredentialInput variant 2: `credential_type` = `"stripe_confirmation_token"`

oneOf with credential_type: "stripe_confirmation_token": The `stripe_confirmation_token` variant of `PaymentSourceCredential`..

- Required: `stripe`.
- Undeclared: `customer_presence`, `payment_method_id`, `reader_id`, `tip`.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.

### PaymentSourceCredentialInput variant 3: `credential_type` = `"stripe_payment_method"`

oneOf with credential_type: "stripe_payment_method": The `stripe_payment_method` variant of `PaymentSourceCredential`..

- Required: `stripe`.
- Undeclared: `customer_presence`, `payment_method_id`, `reader_id`, `tip`.
- Constraints for `credential_type`: Values: `"stripe_payment_method"`.

### PaymentSourceCredentialInput variant 4: `credential_type` = `"reader"`

oneOf with credential_type: "reader": The `reader` variant of `PaymentSourceCredential`..

- Required: `reader_id`.
- Optional: `tip`.
- Undeclared: `customer_presence`, `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"reader"`.

### PaymentSourceCredentialInput variant 2.stripe

Stripe credential collected for this payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `confirmation_token` | Required | string | A Stripe ConfirmationToken your page created with Stripe.js createConfirmationToken. Use this for cards, wallets, ACH and Affirm collected in the browser. minLength: `1`. |

### PaymentSourceCredentialInput variant 3.stripe

Stripe credential collected for this payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_method` | Required | string | A Stripe PaymentMethod your app created with createPaymentMethod, or a Stripe test payment method such as pm_card_visa in a sandbox. It isn't a Flint saved payment method; send those as payment_method. minLength: `1`. |

