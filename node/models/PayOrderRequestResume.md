[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderRequestResume

The `resume` variant of `PayOrderRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"resume"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequest](../models/CheckoutBuyerContactRequest.md#checkoutbuyercontactrequest) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. `buyer_contact`: [field definitions](../models/PayOrderRequest.md#payorderrequestbuyer_contact). |
| `expected_outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_outstanding_money`: [field definitions](../models/PayOrderRequest.md#payorderrequestexpected_outstanding_money). |
| `order_payment_attempt_id` | Required | string | minLength: `1`. |

### PayOrderRequestResume.buyer_contact

Field definitions: [PayOrderRequest.buyer_contact](../models/PayOrderRequest.md#payorderrequestbuyer_contact).

### PayOrderRequestResume.expected_outstanding_money

Field definitions: [PayOrderRequest.expected_outstanding_money](../models/PayOrderRequest.md#payorderrequestexpected_outstanding_money).

