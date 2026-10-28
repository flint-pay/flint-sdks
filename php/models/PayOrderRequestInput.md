[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderRequestInput

The request body for: Pay order.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `accepted_gift_card_allocation` | Conditional | [OrderGiftCardAllocationAcceptanceInput](../models/OrderGiftCardAllocationAcceptanceInput.md#ordergiftcardallocationacceptanceinput) | Accept the exact gift_card_estimate returned on the current order, including all selected cards and both totals. Requires an Idempotency-Key. Gift card payments collect the full amount due and may use one processor payment intent for the processor_money remainder. |
| `action` | Required | string |  |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. `buyer_contact`: [field definitions](../models/PayOrderRequestInput.md#payorderrequestinputbuyer_contact). |
| `expected_outstanding_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Conditional | integer string | Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `payment_source` | Conditional | [PaymentSourceCredentialInput](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput) | The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token. |
| `save_payment_method` | Conditional | boolean | The buyer's choice to save the card they typed for faster checkout at this merchant. Send true only from the checkout session's own credential, when the session's can_save_payment_method is true and save_payment_method_requires_verification is false, for one newly collected card sent as stripe.confirmation_token created with setup_future_usage on_session. The card is saved with usage on_session once the payment succeeds, for the customer the checkout acts for: the customer the merchant created the session for, or the customer whose email the buyer confirmed in it. A typed buyer_contact.email never decides it. A checkout that acts for no customer refuses the save until the buyer confirms their email with a code, unless it sends save_payment_method_phone. A checkout the buyer bound by a texted code saves the card with that number. A checkout whose buyer confirmed the customer's email can also send save_payment_method_phone, to save the card with a number the buyer confirms by text after paying. A checkout can send the buyer's choice with every payment button: Apple Pay, Google Pay, a bank account, or Affirm, in stripe.confirmation_token created with no setup_future_usage, pays without the save, and the payment attempt's payment_method_save reports not_saved with reason payment_method_not_saveable. The session's save_payment_method_types lists what is saved. Send false or omit it when the buyer does not choose to save; stripe.confirmation_token must then have no setup_future_usage. Default: `false`. |
| `save_payment_method_phone` | Conditional | string | A US or Canadian mobile phone number in E.164 format, such as +14155552671, that confirms a card saved while the checkout acts for no customer, or for the customer whose email the buyer confirmed in it. Send it with save_payment_method: true only from the checkout session's own credential, when the session's can_save_payment_method_with_phone is true. The card is kept for the customer the checkout acts for, or else the merchant's customer with the buyer's email, once the payment succeeds, or once it is approved when the merchant captures later, but works for nothing until the buyer confirms it within 24 hours, with a code texted to this number or, when the customer's email is the email of the payment, emailed there instead: request the code with POST /v1/checkout-sessions/{checkout_session_id}/customer-verifications and purpose confirm_saved_payment_method, and read payment_method_save on the checkout session. A card saved with the number makes it the customer's saved number, and the cards saved with the number it replaces are removed. A card not confirmed in time is not saved. minLength: `1`. maxLength: `16`. pattern: `^\+1[2-9][0-9]{2}[2-9][0-9]{6}$`. |
| `completion_behavior` | Conditional | string | Values: `"complete_order"`, `"partial_payment"`. |
| `payment_intents` | Conditional | Array of [OrderPaymentIntentSelectionInput](../models/OrderPaymentIntentSelectionInput.md#orderpaymentintentselectioninput) | minItems: `1`. |
| `setup_payment_source` | Conditional | [PaymentSourceCredentialTokenInput](../models/PaymentSourceCredentialTokenInput.md#paymentsourcecredentialtokeninput) | The `token` variant of `PaymentSourceCredential`. |
| `order_payment_attempt_id` | Conditional | string | minLength: `1`. |

### PayOrderRequestInput variant 1: `action` = `"pay"`

oneOf variant 1: The `pay` variant of `PayOrderRequest`..

- Optional: `accepted_gift_card_allocation`, `expected_version`, `payment_source`, `save_payment_method`, `save_payment_method_phone`.
- Undeclared: `completion_behavior`, `payment_intents`, `setup_payment_source`, `order_payment_attempt_id`.
- Constraints for `action`: Values: `"pay"`.

### PayOrderRequestInput variant 2: `action` = `"confirm_payment_intents"`

oneOf variant 2: The `confirm_payment_intents` variant of `PayOrderRequest`..

- Required: `payment_intents`.
- Optional: `accepted_gift_card_allocation`, `completion_behavior`, `expected_version`, `save_payment_method`, `save_payment_method_phone`.
- Undeclared: `payment_source`, `setup_payment_source`, `order_payment_attempt_id`.
- Constraints for `action`: Values: `"confirm_payment_intents"`.

### PayOrderRequestInput variant 3: `action` = `"setup"`

oneOf variant 3: The `setup` variant of `PayOrderRequest`..

- Required: `setup_payment_source`.
- Optional: `expected_version`.
- Undeclared: `accepted_gift_card_allocation`, `payment_source`, `save_payment_method`, `save_payment_method_phone`, `completion_behavior`, `payment_intents`, `order_payment_attempt_id`.
- Constraints for `action`: Values: `"setup"`.

### PayOrderRequestInput variant 4: `action` = `"resume"`

oneOf variant 4: The `resume` variant of `PayOrderRequest`..

- Required: `order_payment_attempt_id`.
- Undeclared: `accepted_gift_card_allocation`, `expected_version`, `payment_source`, `save_payment_method`, `save_payment_method_phone`, `completion_behavior`, `payment_intents`, `setup_payment_source`.
- Constraints for `action`: Values: `"resume"`.

### PayOrderRequestInput.buyer_contact

Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. minProperties: `1`.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `email` | Optional | (string or null) and string | Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the saved email. Format: `email`. minLength: `1`. maxLength: `255`. minLength: `1`. Email for the buyer, such as buyer@example.com. On checkout session updates, null clears the saved email. Format: `email`. minLength: `1`. maxLength: `255`. minLength: `1`. |
| `phone` | Optional | (string or null) and string | Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null clears the saved phone. minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. minLength: `1`. Phone for the buyer, in E.164 format, such as +14155551234. On checkout session updates, null clears the saved phone. minLength: `1`. pattern: `^\+[1-9][0-9]{1,14}$`. minLength: `1`. |

