[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderRequestResumeInput

The `resume` variant of `PayOrderRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"resume"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequestInput](../models/CheckoutBuyerContactRequestInput.md#checkoutbuyercontactrequestinput) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. `buyer_contact`: [field definitions](../models/PayOrderRequestInput.md#payorderrequestinputbuyer_contact). |
| `expected_outstanding_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `order_payment_attempt_id` | Required | string | minLength: `1`. |

### PayOrderRequestResumeInput.buyer_contact

Field definitions: [PayOrderRequestInput.buyer_contact](../models/PayOrderRequestInput.md#payorderrequestinputbuyer_contact).

