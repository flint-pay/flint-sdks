[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundLineItemAdjustment

An adjustment on a refunded line item, such as a restocking fee or withheld amount, with how much has been refunded and what remains.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustment_type` | Required | string | Values: `"restocking_fee"`, `"withheld_amount"`, `"refund_adjustment"`, `"tax_adjustment"`. |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `applies_to` | Required | string | Values: `"none"`, `"gross"`, `"tax"`. |
| `reason` | Required | [RefundAdjustmentReason](../models/RefundAdjustmentReason.md#refundadjustmentreason) | The reason recorded for a refund line item adjustment, as a `code` with an optional description. `reason`: [field definitions](../models/RefundLineItemAdjustment.md#refundlineitemadjustmentreason). |
| `refund_line_item_adjustment_id` | Required | string |  |
| `refunded_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `refunded_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `remaining_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `remaining_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### RefundLineItemAdjustment.amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### RefundLineItemAdjustment.reason

The reason recorded for a refund line item adjustment, as a `code` with an optional description.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `code` | Required | string | Values: [7 declared values](#refundlineitemadjustmentreason-code-values). |
| `description` | Optional | string |  |

#### RefundLineItemAdjustment.reason code values

- `"customer_agreement"`
- `"jurisdiction_specific_rule"`
- `"merchant_policy"`
- `"customer_request"`
- `"restocking_policy"`
- `"manual_tax_correction"`
- `"other"`

### RefundLineItemAdjustment.refunded_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### RefundLineItemAdjustment.remaining_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

