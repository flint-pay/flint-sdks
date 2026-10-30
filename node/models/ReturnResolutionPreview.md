[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnResolutionPreview

A preview of a return resolution before it is created: returned and replacement totals, adjustments, and amounts due to or from the buyer.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `adjustments` | Required | Array of [ReturnResolutionAdjustment](../models/ReturnResolutionAdjustment.md#returnresolutionadjustment) |  |
| `based_on_return_version` | Required | integer | Format: `int64`. minimum: `0`. |
| `buyer_payment_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_payment_amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `buyer_refund_amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `buyer_refund_amount_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `calculated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `corrects_return_resolution_id` | Optional | string |  |
| `credit_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `credit_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `deduction_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `deduction_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `line_items` | Required | Array of [ReturnResolutionLineItem](../models/ReturnResolutionLineItem.md#returnresolutionlineitem) |  |
| `replacement_line_items` | Required | Array of [ReturnReplacementLineItem](../models/ReturnReplacementLineItem.md#returnreplacementlineitem) |  |
| `replacement_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `replacement_total_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `resolution_type` | Required | string | Values: `"refund"`, `"exchange"`, `"replacement"`, `"store_credit"`, `"no_monetary_action"`, `"correction"`. |
| `return_id` | Required | string |  |
| `returned_total_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `returned_total_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |

### ReturnResolutionPreview.buyer_payment_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### ReturnResolutionPreview.buyer_refund_amount_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### ReturnResolutionPreview.credit_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### ReturnResolutionPreview.deduction_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### ReturnResolutionPreview.replacement_total_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### ReturnResolutionPreview.returned_total_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

