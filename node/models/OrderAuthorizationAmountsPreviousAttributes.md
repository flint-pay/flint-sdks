[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderAuthorizationAmountsPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `authorized_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount authorized on the order's payments. `authorized_money`: [declared alternatives](../models/OrderAuthorizationAmountsPreviousAttributes.md#orderauthorizationamountspreviousattributesauthorized_money). |
| `capturable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the authorized amount that can still be captured. `capturable_money`: [declared alternatives](../models/OrderAuthorizationAmountsPreviousAttributes.md#orderauthorizationamountspreviousattributescapturable_money). |
| `expires_at` | Optional | string or null | Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. `expires_at`: [declared alternatives](../models/OrderAuthorizationAmountsPreviousAttributes.md#orderauthorizationamountspreviousattributesexpires_at). |

### OrderAuthorizationAmountsPreviousAttributes.authorized_money

The amount authorized on the order's payments.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderAuthorizationAmountsPreviousAttributes.authorized_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderAuthorizationAmountsPreviousAttributes.authorized_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount authorized on the order's payments. 

### OrderAuthorizationAmountsPreviousAttributes.authorized_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderAuthorizationAmountsPreviousAttributes.authorized_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderAuthorizationAmountsPreviousAttributes.capturable_money

The part of the authorized amount that can still be captured.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderAuthorizationAmountsPreviousAttributes.capturable_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderAuthorizationAmountsPreviousAttributes.capturable_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of the authorized amount that can still be captured. 

### OrderAuthorizationAmountsPreviousAttributes.capturable_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderAuthorizationAmountsPreviousAttributes.capturable_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderAuthorizationAmountsPreviousAttributes.expires_at

### OrderAuthorizationAmountsPreviousAttributes.expires_at variant 1

anyOf variant 1: Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline..

- Value shape: string. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. 

### OrderAuthorizationAmountsPreviousAttributes.expires_at variant 2

anyOf variant 2.

- Value shape: null. Earliest effective Flint capture deadline among the order's active authorizations. Each authorization is bounded by its provider capture deadline and any resource guarantee. Omitted when no active authorization has a deadline. 

