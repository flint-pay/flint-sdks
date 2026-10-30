[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemInputBundle

The `bundle` variant of `ReturnReplacementLineItemInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Required | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `name` | Optional | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `sku` | Optional | string | minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"bundle"`. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `variant_id` | Optional | string | minLength: `1`. |

### ReturnReplacementLineItemInputBundle.unit_price_money

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

