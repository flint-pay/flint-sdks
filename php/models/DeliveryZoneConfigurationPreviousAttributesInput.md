[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryZoneConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `all` | Optional | Array of [DeliveryZoneConfigurationPreviousAttributesInput](../models/DeliveryZoneConfigurationPreviousAttributesInput.md#deliveryzoneconfigurationpreviousattributesinput) or null | Matches when every nested expression matches. `all`: [declared alternatives](../models/DeliveryZoneConfigurationPreviousAttributesInput.md#deliveryzoneconfigurationpreviousattributesinputall). |
| `any` | Optional | Array of [DeliveryZoneConfigurationPreviousAttributesInput](../models/DeliveryZoneConfigurationPreviousAttributesInput.md#deliveryzoneconfigurationpreviousattributesinput) or null | Matches when at least one nested expression matches. `any`: [declared alternatives](../models/DeliveryZoneConfigurationPreviousAttributesInput.md#deliveryzoneconfigurationpreviousattributesinputany). |
| `country` | Optional | [DeliveryCountryConditionPreviousAttributesInput](../models/DeliveryCountryConditionPreviousAttributesInput.md#deliverycountryconditionpreviousattributesinput) or null | Matches when the address is in one of the listed countries. |
| `not` | Optional | [DeliveryZoneConfigurationPreviousAttributesInput](../models/DeliveryZoneConfigurationPreviousAttributesInput.md#deliveryzoneconfigurationpreviousattributesinput) or null | Matches when the nested expression does not match. |
| `postal_code` | Optional | [DeliveryPostalCodeConditionPreviousAttributesInput](../models/DeliveryPostalCodeConditionPreviousAttributesInput.md#deliverypostalcodeconditionpreviousattributesinput) or null | Matches when the address postal code matches one of the listed codes. |
| `radius` | Optional | [DeliveryRadiusConditionPreviousAttributesInput](../models/DeliveryRadiusConditionPreviousAttributesInput.md#deliveryradiusconditionpreviousattributesinput) or null | Matches when the address is within a set distance of an origin. |
| `state` | Optional | [DeliveryStateConditionPreviousAttributesInput](../models/DeliveryStateConditionPreviousAttributesInput.md#deliverystateconditionpreviousattributesinput) or null | Matches when the address is in one of the listed states or provinces. |

### DeliveryZoneConfigurationPreviousAttributesInput variant 1, 2, 3, 4, 5, 6, 7

anyOf variant 1; anyOf variant 2; anyOf variant 3; anyOf variant 4; anyOf variant 5; anyOf variant 6; anyOf variant 7.

No additional constraints.

### DeliveryZoneConfigurationPreviousAttributesInput.all

### DeliveryZoneConfigurationPreviousAttributesInput.all variant 1

anyOf variant 1: Matches when every nested expression matches..

- Value shape: Array of ([DeliveryZoneConfigurationPreviousAttributesInput](../models/DeliveryZoneConfigurationPreviousAttributesInput.md#deliveryzoneconfigurationpreviousattributesinput) and Alternative shapes (see declared variants)). Matches when every nested expression matches. Matches when every nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryZoneConfigurationPreviousAttributesInput.all variant 2

anyOf variant 2.

- Value shape: null. Matches when every nested expression matches. 

### DeliveryZoneConfigurationPreviousAttributesInput.any

### DeliveryZoneConfigurationPreviousAttributesInput.any variant 1

anyOf variant 1: Matches when at least one nested expression matches..

- Value shape: Array of ([DeliveryZoneConfigurationPreviousAttributesInput](../models/DeliveryZoneConfigurationPreviousAttributesInput.md#deliveryzoneconfigurationpreviousattributesinput) and Alternative shapes (see declared variants)). Matches when at least one nested expression matches. Matches when at least one nested expression matches. minItems: `1`. maxItems: `100`. 

### DeliveryZoneConfigurationPreviousAttributesInput.any variant 2

anyOf variant 2.

- Value shape: null. Matches when at least one nested expression matches. 

