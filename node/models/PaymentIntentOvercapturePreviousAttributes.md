[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentIntentOvercapturePreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `maximum_capturable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The most one capture can collect. Equals capturable_money when status is unavailable. `maximum_capturable_money`: [declared alternatives](../models/PaymentIntentOvercapturePreviousAttributes.md#paymentintentovercapturepreviousattributesmaximum_capturable_money). |
| `status` | Optional | string or null | Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`. `status`: [declared alternatives](../models/PaymentIntentOvercapturePreviousAttributes.md#paymentintentovercapturepreviousattributesstatus). |

### PaymentIntentOvercapturePreviousAttributes.maximum_capturable_money

The most one capture can collect. Equals capturable_money when status is unavailable.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### PaymentIntentOvercapturePreviousAttributes.maximum_capturable_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### PaymentIntentOvercapturePreviousAttributes.maximum_capturable_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The most one capture can collect. Equals capturable_money when status is unavailable. 

### PaymentIntentOvercapturePreviousAttributes.maximum_capturable_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### PaymentIntentOvercapturePreviousAttributes.maximum_capturable_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### PaymentIntentOvercapturePreviousAttributes.status

### PaymentIntentOvercapturePreviousAttributes.status variant 1

anyOf variant 1: Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable..

- Value shape: string. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. Values: `"available"`, `"unavailable"`.

### PaymentIntentOvercapturePreviousAttributes.status variant 2

anyOf variant 2.

- Value shape: null. Whether the processor allows overcapturing this authorization. Can gain values; treat an unknown value as unavailable. 

