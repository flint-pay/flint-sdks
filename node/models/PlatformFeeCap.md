[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeCap







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_currency_options` | Optional | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `fixed_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `maximum_fee_currency_options` | Required | Map of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `maximum_fee_currency_options{}`: [field definitions](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options). |
| `percent` | Required | number | minimum: `0`. maximum: `25`. multipleOf: `0.0001`. |

### PlatformFeeCap variant 1

anyOf variant 1: Declared schema PlatformFeeCap. The most a platform fee can take from one payment. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. A currency without a maximum can't carry a platform fee..

- Constraints for `fixed_fee_currency_options`: The fixed part of the cap per payment, keyed by currency code, added to the percentage part. Omitted when no currency has one. Only USD today.
- Constraints for `maximum_fee_currency_options`: The maximum fee on one payment, keyed by currency code. Only USD today.
- Constraints for `percent`: The percentage part of the cap, in percent: 2.5 means 2.5%. 0 when the cap is a fixed part alone.

### PlatformFeeCap variant 2

anyOf variant 2: Declared schema PlatformFeeCapRequest. The whole platform fee cap. The largest platform fee on a payment is percent of the amount it collects, rounded half up to the minor unit, plus the currency's fixed part if it has one, and never more than the currency's maximum: a cap of 1% + 0.30 USD with a 5.00 USD maximum allows up to 1.30 USD on a 100.00 USD payment. percent and maximum_fee_currency_options are required. A write replaces the cap whole, so a cap sent without fixed_fee_currency_options has no fixed part..

- Constraints for `fixed_fee_currency_options`: The fixed part of the cap per payment, keyed by currency code, added to the percentage part: 30 USD minor units with percent 1 is 1% + 0.30 USD. Optional. Each is from 1 minor unit to the same currency's maximum, and a currency needs a maximum to have one; otherwise INVALID_REQUEST with INVALID_VALUE on the entry. Each key must equal its Money's currency. Only USD today.
- Constraints for `maximum_fee_currency_options`: The maximum fee on one payment, keyed by currency code: from 1 to 1,000,000 minor units ($0.01 to $10,000.00). Each key must equal its Money's currency. Only USD today. minProperties: `1`.
- Constraints for `percent`: The percentage part of the cap, in percent: from 0 to 25, with up to four decimal places. 2.5 means 2.5%. 0 needs a fixed part in every currency with a maximum, so the cap is a flat fee per payment; otherwise INVALID_REQUEST with INVALID_VALUE on the maximum of the currency without one.

### PlatformFeeCap variant 1.fixed_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PlatformFeeCap variant 1.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PlatformFeeCap variant 2.fixed_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

### PlatformFeeCap variant 2.maximum_fee_currency_options{}

Field definitions: [BuyerCheckoutSession.tip.smart_tip_money_options[]](../models/BuyerCheckoutSession.md#buyercheckoutsessiontipsmart_tip_money_options).

