[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentMethodWithSetupInput

The saved payment method, with `client_setup` when the buyer must still complete processor setup before the payment method can be used.

A customer's saved payment details.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `card` | Optional | [CardDetailsInput](../models/CardDetailsInput.md#carddetailsinput) | Brand, expiry and last four digits. Present when `type` is `card`. Card details on a payment method: brand, expiration month and year, last four digits, and the wallet when one was used. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer` | Optional | [ExpandedCustomerSummaryInput](../models/ExpandedCustomerSummaryInput.md#expandedcustomersummaryinput) or null | Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. |
| `customer_id` | Required | string | Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `fingerprint` | Optional | string | A value that is the same for every saved copy of one card number at this merchant and environment, so you can spot duplicates. It doesn't identify the card anywhere else. A card added through Apple Pay or Google Pay can have a different fingerprint from the same card typed in. |
| `is_default` | Required | boolean | Whether this is the customer's default payment method, the one Customer.default_payment_method_id names. Change the default with PATCH /v1/customers/{customer_id}; that sends customer.updated, not a payment method event. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `payment_method_id` | Required | string | Unique identifier for this payment method, prefixed `pm_`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `saved_with` | Optional | string | Where the buyer saved this payment method. Returned on /v1/me/payment-methods responses when Flint wallet support is enabled. Accept future values. Values: `"flint"`, `"store"`. |
| `status` | Required | string | Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Values: `"pending"`, `"active"`, `"expired"`, `"archived"`, `"failed"`. |
| `type` | Required | string | Kind of payment method. Values: `"card"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `usage` | Required | string | When Flint may charge the payment method. off_session payment methods can pay subscriptions, automatic invoices, and other charges without the buyer, and can be a customer's default. on_session payment methods were saved by the buyer in checkout for faster checkout at this merchant; Flint charges them only in checkouts the buyer completes and refuses them for any charge without the buyer and as a default. Payment methods saved before usage existed are off_session. Values: `"on_session"`, `"off_session"`. |
| `client_setup` | Optional | [StripeClientSetupInput](../models/StripeClientSetupInput.md#stripeclientsetupinput) | Present when the buyer must complete processor setup before using this payment method. Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now. setup_collection is guidance instead and never carries a secret. |

