[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## DeliveryProfileConfigurationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allowed_types` | Optional | Array of string or null | Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`. `allowed_types`: [declared alternatives](../models/DeliveryProfileConfigurationPreviousAttributesInput.md#deliveryprofileconfigurationpreviousattributesinputallowed_types). |
| `combination_policy` | Optional | string or null | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`. `combination_policy`: [declared alternatives](../models/DeliveryProfileConfigurationPreviousAttributesInput.md#deliveryprofileconfigurationpreviousattributesinputcombination_policy). |
| `origin_policy` | Optional | [DeliveryProfileOriginPolicyPreviousAttributesInput](../models/DeliveryProfileOriginPolicyPreviousAttributesInput.md#deliveryprofileoriginpolicypreviousattributesinput) or null | Required for quote resolution and forbidden for none or manual resolution. fixed_location requires location_id. inventory_routing forbids location_id and applies only to tracked inventory. method_origin forbids location_id. |
| `requirement` | Optional | string or null | Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Values: `"none"`, `"required"`. `requirement`: [declared alternatives](../models/DeliveryProfileConfigurationPreviousAttributesInput.md#deliveryprofileconfigurationpreviousattributesinputrequirement). |
| `resolution_mode` | Optional | string or null | Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Values: `"quote"`, `"manual"`. `resolution_mode`: [declared alternatives](../models/DeliveryProfileConfigurationPreviousAttributesInput.md#deliveryprofileconfigurationpreviousattributesinputresolution_mode). |
| `splitting_policy` | Optional | string or null | Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Values: `"whole_line_item"`, `"quantity_split_allowed"`. `splitting_policy`: [declared alternatives](../models/DeliveryProfileConfigurationPreviousAttributesInput.md#deliveryprofileconfigurationpreviousattributesinputsplitting_policy). |

### DeliveryProfileConfigurationPreviousAttributesInput.allowed_types

### DeliveryProfileConfigurationPreviousAttributesInput.allowed_types variant 1

anyOf variant 1: Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service..

- Value shape: Array of string. Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. Items values: `"shipment"`, `"pickup"`, `"local_delivery"`, `"digital"`, `"service"`.

### DeliveryProfileConfigurationPreviousAttributesInput.allowed_types variant 2

anyOf variant 2.

- Value shape: null. Required as a non-empty unique list when requirement is required. quote accepts shipment, pickup, and local_delivery. manual accepts digital and service. 

### DeliveryProfileConfigurationPreviousAttributesInput.combination_policy

### DeliveryProfileConfigurationPreviousAttributesInput.combination_policy variant 1

anyOf variant 1: Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group..

- Value shape: string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. Values: `"combine_when_compatible"`, `"separate_profile"`, `"separate_line_item"`, `"fulfill_alone"`.

### DeliveryProfileConfigurationPreviousAttributesInput.combination_policy variant 2

anyOf variant 2.

- Value shape: null. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls which delivery obligations can share a choice group. 

### DeliveryProfileConfigurationPreviousAttributesInput.requirement

### DeliveryProfileConfigurationPreviousAttributesInput.requirement variant 1

anyOf variant 1: Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode..

- Value shape: string. Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. Values: `"none"`, `"required"`.

### DeliveryProfileConfigurationPreviousAttributesInput.requirement variant 2

anyOf variant 2.

- Value shape: null. Whether delivery planning applies. none forbids every other configuration field. required also requires resolution_mode and allowed_types, plus the fields required by that resolution mode. 

### DeliveryProfileConfigurationPreviousAttributesInput.resolution_mode

### DeliveryProfileConfigurationPreviousAttributesInput.resolution_mode variant 1

anyOf variant 1: Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields..

- Value shape: string. Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. Values: `"quote"`, `"manual"`.

### DeliveryProfileConfigurationPreviousAttributesInput.resolution_mode variant 2

anyOf variant 2.

- Value shape: null. Required when requirement is required. quote plans physical delivery and requires origin_policy, combination_policy, and splitting_policy. manual supports digital and service items and forbids physical planning fields. 

### DeliveryProfileConfigurationPreviousAttributesInput.splitting_policy

### DeliveryProfileConfigurationPreviousAttributesInput.splitting_policy variant 1

anyOf variant 1: Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments..

- Value shape: string. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. Values: `"whole_line_item"`, `"quantity_split_allowed"`.

### DeliveryProfileConfigurationPreviousAttributesInput.splitting_policy variant 2

anyOf variant 2.

- Value shape: null. Required for quote resolution and forbidden when requirement is none or resolution_mode is manual. Controls whether a line item quantity can be split across delivery assignments. 

