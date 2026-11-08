[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialPaymentMethodInput

The `payment_method` variant of `PaymentSourceCredential`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"payment_method"`. |
| `customer_presence` | Optional | string | Whether the customer is present for this payment. Defaults to present. Send absent to charge a saved card while the customer is away, such as for a no-show fee, damages, or a top-up. Flint then sends the charge to the card network as merchant-initiated, using the card's stored credential, so the bank can't ask the customer to authenticate. absent can be sent only with an API key or partner token, and only for a saved card whose usage is off_session; a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason payment_method_not_reusable. If the bank still requires authentication, the payment fails with status requires_payment_method and last_payment_error.code authentication_required. Ask the customer to pay while present instead of retrying. Default: `"present"`. Values: `"present"`, `"absent"`. |
| `payment_method_id` | Required | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |

