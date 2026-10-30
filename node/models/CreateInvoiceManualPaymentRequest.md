[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateInvoiceManualPaymentRequest

The request body for: Create invoice manual payment.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `expected_version` | Optional | integer | Expected version of the invoice. Format: `int64`. minimum: `1`. |
| `note` | Optional | string | minLength: `1`. maxLength: `4096`. |
| `payment_reference` | Optional | string | Caller-owned check, wire, or bank reference, stored unmodified. minLength: `1`. maxLength: `255`. |
| `received_at` | Optional | string | When the payment was received. Defaults to now. Format: `date-time`. minLength: `1`. |

### CreateInvoiceManualPaymentRequest.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

