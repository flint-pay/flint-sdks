[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSplitRequestInput

A seller's fixed share of one payment, created with that payment. This divides the payment's funds; split tender divides how the buyer pays.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Seller's share above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Seller's share above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/PaymentSplitRequestInput.md#paymentsplitrequestinputamount_money). |
| `description` | Optional | string | Description shown to the seller, 1 to 500 characters. minLength: `1`. maxLength: `500`. |
| `external_reference_id` | Optional | string | Caller-owned identifier for this resource in an external system. Shown to the seller. Exact, case-sensitive matching. Must contain 1 to 255 characters (Unicode code points). minLength: `1`. maxLength: `255`. Example: `"warehouse-1842"`. |
| `partner_app_install_id` | Required | string | Seller install of the collecting merchant's partner app. At most one split per install. minLength: `1`. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |

### PaymentSplitRequestInput.amount_money

Seller's share above zero, in the payment's currency. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](TippingSettingsSmartTipMoneyOptionsItem.md#tippingsettingssmarttipmoneyoptionsitem).

