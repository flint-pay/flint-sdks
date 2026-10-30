[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PayOrderRequestSetup

The `setup` variant of `PayOrderRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"setup"`. |
| `buyer_contact` | Optional | [CheckoutBuyerContactRequest](../models/CheckoutBuyerContactRequest.md#checkoutbuyercontactrequest) | Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. Buyer email and phone recorded on the order. A checkout session payment uses the session's saved contact for omitted fields. Email and phone cannot be null. minProperties: `1`. Buyer contact to supply with payment or save during checkout. Send at least one field. Values are stored exactly as sent, so an email with surrounding spaces is rejected. Checkout session updates keep omitted fields and accept null to clear a field. Payment requests do not accept null. `buyer_contact`: [field definitions](../models/PayOrderRequest.md#payorderrequestbuyer_contact). |
| `expected_outstanding_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The outstanding balance you reviewed. Required with checkout credentials, and with an API key or partner token when the order has an open checkout session. Optional otherwise. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `expected_outstanding_money`: [field definitions](../models/PayOrderRequest.md#payorderrequest-variant-1expected_outstanding_money). |
| `expected_version` | Optional | integer | Optional version from the order you reviewed. A mismatch returns VERSION_CONFLICT, even when the outstanding amount is unchanged. Starting a payment advances the order's version. After a declined or failed attempt, use the order returned in the pay response or read the order again before retrying. When accepted_gift_card_allocation is sent, its order_version must match this value. Format: `int64`. minimum: `1`. |
| `setup_payment_source` | Required | [PaymentSourceCredentialToken](../models/PaymentSourceCredentialToken.md#paymentsourcecredentialtoken) | The `token` variant of `PaymentSourceCredential`. |

### PayOrderRequestSetup.buyer_contact

Field definitions: [PayOrderRequest.buyer_contact](../models/PayOrderRequest.md#payorderrequestbuyer_contact).

### PayOrderRequestSetup.expected_outstanding_money

Field definitions: [PayOrderRequest variant 1.expected_outstanding_money](../models/PayOrderRequest.md#payorderrequest-variant-1expected_outstanding_money).

