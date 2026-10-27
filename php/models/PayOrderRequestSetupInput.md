[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderRequestSetupInput

The `setup` variant of `PayOrderRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"setup"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. `buyer_contact`: [field definitions](../models/PayOrderRequestInput.md#payorderrequestinputbuyer_contact). |
| `expected_outstanding_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `expected_version` | Optional | integer string | Optional version from the order you reviewed. A mismatch returns ORDER_CHANGED_REFRESH_REQUIRED, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `setup_payment_source` | Required | object | `setup_payment_source`: [field definitions](../models/PayOrderRequestInput.md#payorderrequestinput-variant-3setup_payment_source). |

### PayOrderRequestSetupInput.buyer_contact

Field definitions: [PayOrderRequestInput.buyer_contact](../models/PayOrderRequestInput.md#payorderrequestinputbuyer_contact).

### PayOrderRequestSetupInput.setup_payment_source

Field definitions: [PayOrderRequestInput variant 3.setup_payment_source](../models/PayOrderRequestInput.md#payorderrequestinput-variant-3setup_payment_source).

