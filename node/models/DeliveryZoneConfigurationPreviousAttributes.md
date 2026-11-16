[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfigurationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Optional | Array of [DeliveryZoneConfigurationPreviousAttributes](../models/DeliveryZoneConfigurationPreviousAttributes.md#deliveryzoneconfigurationpreviousattributes) or null | Matches when every nested expression matches. `all`: [declared alternatives](../models/DeliveryZoneConfigurationPreviousAttributes.md#deliveryzoneconfigurationpreviousattributesall). |
| `any` | Optional | Array of [DeliveryZoneConfigurationPreviousAttributes](../models/DeliveryZoneConfigurationPreviousAttributes.md#deliveryzoneconfigurationpreviousattributes) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryZoneConfigurationPreviousAttributes.md#deliveryzoneconfigurationpreviousattributesany). |
| `country` | Optional | [DeliveryStateConditionPreviousAttributes](../models/DeliveryStateConditionPreviousAttributes.md#deliverystateconditionpreviousattributes) or null | Matches when the address is in one of the listed countries. `country`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry). |
| `not` | Optional | [DeliveryZoneConfigurationPreviousAttributes](../models/DeliveryZoneConfigurationPreviousAttributes.md#deliveryzoneconfigurationpreviousattributes) or null | Matches when the nested expression does not match. |
| `postal_code` | Optional | [DeliveryPostalCodeConditionPreviousAttributes](../models/DeliveryPostalCodeConditionPreviousAttributes.md#deliverypostalcodeconditionpreviousattributes) or null | Matches when the address postal code matches one of the listed codes. |
| `radius` | Optional | [DeliveryRadiusConditionPreviousAttributes](../models/DeliveryRadiusConditionPreviousAttributes.md#deliveryradiusconditionpreviousattributes) or null | Matches when the address is within a set distance of an origin. |
| `state` | Optional | [DeliveryStateConditionPreviousAttributes](../models/DeliveryStateConditionPreviousAttributes.md#deliverystateconditionpreviousattributes) or null | Matches when the address is in one of the listed states or provinces. `state`: [declared alternatives](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesstate). |

### DeliveryZoneConfigurationPreviousAttributes variant 1, 2, 3, 4, 5, 6, 7

anyOf variant 1; anyOf variant 2; anyOf variant 3; anyOf variant 4; anyOf variant 5; anyOf variant 6; anyOf variant 7.

No additional constraints.

### DeliveryZoneConfigurationPreviousAttributes.all

### DeliveryZoneConfigurationPreviousAttributes.all variant 1

anyOf variant 1: Matches when every nested expression matches..

- Value shape: Array of ([DeliveryZoneConfigurationPreviousAttributes](../models/DeliveryZoneConfigurationPreviousAttributes.md#deliveryzoneconfigurationpreviousattributes) and Alternative shapes (see declared variants)). Matches when every nested expression matches. Matches when every nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryZoneConfigurationPreviousAttributes.all variant 2

anyOf variant 2.

- Value shape: null. Matches when every nested expression matches. 

### DeliveryZoneConfigurationPreviousAttributes.any

### DeliveryZoneConfigurationPreviousAttributes.any variant 1

anyOf variant 1: Matches when at least one nested expression matches..

- Value shape: Array of ([DeliveryZoneConfigurationPreviousAttributes](../models/DeliveryZoneConfigurationPreviousAttributes.md#deliveryzoneconfigurationpreviousattributes) and Alternative shapes (see declared variants)). Matches when at least one nested expression matches. Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryZoneConfigurationPreviousAttributes.any variant 2

anyOf variant 2.

- Value shape: null. Matches when at least one nested expression matches. 

### DeliveryZoneConfigurationPreviousAttributes.country

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.country](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributescountry).

### DeliveryZoneConfigurationPreviousAttributes.state

Declared alternatives: [DeliveryEligibilityExpressionPreviousAttributes.state](../models/DeliveryEligibilityExpressionPreviousAttributes.md#deliveryeligibilityexpressionpreviousattributesstate).

