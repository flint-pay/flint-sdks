[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PlatformFeeRulePreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `fixed_fee_money` | Optional | [PlatformFeeRulePreviousAttributesFixedFeeMoney](../models/PlatformFeeRulePreviousAttributesFixedFeeMoney.md#platformfeerulepreviousattributesfixedfeemoney) or null | The fixed amount per payment. `fixed_fee_money`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributesfixed_fee_money). |
| `maximum_fee_money` | Optional | [PlatformFeeRulePreviousAttributesMaximumFeeMoney](../models/PlatformFeeRulePreviousAttributesMaximumFeeMoney.md#platformfeerulepreviousattributesmaximumfeemoney) or null | The maximum fee per payment, at least the fixed amount. `maximum_fee_money`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributesmaximum_fee_money). |
| `partner_app_id` | Optional | string or null | The partner app whose install set the rule. `partner_app_id`: [declared alternatives](../models/PlatformFeeRulePreviousAttributes.md#platformfeerulepreviousattributespartner_app_id). |
| `percent` | Optional | number or null | Percent of the amount collected. Zero requires fixed_fee_money. `percent`: [declared alternatives](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1percent). |

### PlatformFeeRulePreviousAttributes.fixed_fee_money

The fixed amount per payment.

Field definitions: [shared fields](PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money).

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1

anyOf PlatformFeeRulePreviousAttributesFixedFeeMoney.

- Optional: `amount`, `currency`.

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fixed amount per payment. 

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.amount

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.amount](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1amount).

### PlatformFeeRulePreviousAttributes.fixed_fee_money variant 1.currency

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency).

### PlatformFeeRulePreviousAttributes.maximum_fee_money

The maximum fee per payment, at least the fixed amount.

Field definitions: [shared fields](PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money).

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 1

anyOf PlatformFeeRulePreviousAttributesMaximumFeeMoney.

- Optional: `amount`, `currency`.

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The maximum fee per payment, at least the fixed amount. 

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 1.amount

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.amount](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1amount).

### PlatformFeeRulePreviousAttributes.maximum_fee_money variant 1.currency

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.fixed_fee_money variant 1.currency](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1fixed_fee_money-variant-1currency).

### PlatformFeeRulePreviousAttributes.partner_app_id

### PlatformFeeRulePreviousAttributes.partner_app_id variant 1

anyOf variant 1: The partner app whose install set the rule..

- Value shape: string. The partner app whose install set the rule. 

### PlatformFeeRulePreviousAttributes.partner_app_id variant 2

anyOf variant 2.

- Value shape: null. The partner app whose install set the rule. 

### PlatformFeeRulePreviousAttributes.percent

Declared alternatives: [PlatformFeeCanceledEvent.data fields 1.previous_attributes.platform_fee_rule variant 1.percent](../models/PlatformFeeCanceledEvent.md#platformfeecanceledeventdata-fields-1previous_attributesplatform_fee_rule-variant-1percent).

