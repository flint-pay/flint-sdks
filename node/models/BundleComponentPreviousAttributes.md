[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleComponentPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Stable identifier of this component within its bundle. `bundle_component_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesbundle_component_id). |
| `delivery_configuration_reason` | Optional | string or null | Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Delivery profile used for this component, including any component override. `delivery_profile_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesdelivery_profile_id). |
| `position` | Optional | integer or null | Display order among the bundle's components, starting at zero. `position`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesposition). |
| `product_id` | Optional | string or null | Identifier of the product the component's variant belongs to. `product_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `variant` | Optional | [BundleComponentVariantSummaryPreviousAttributes](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributes) or null | Summary of the component's variant and its selected options. |
| `variant_id` | Optional | string or null | Identifier of the product variant included in the bundle. `variant_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant_id). |

### BundleComponentPreviousAttributes.bundle_component_id

### BundleComponentPreviousAttributes.bundle_component_id variant 1

anyOf variant 1: Stable identifier of this component within its bundle..

- Value shape: string. Stable identifier of this component within its bundle. Stable identifier of this component within its bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### BundleComponentPreviousAttributes.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this component within its bundle. 

### BundleComponentPreviousAttributes.delivery_configuration_reason

### BundleComponentPreviousAttributes.delivery_configuration_reason variant 1

anyOf variant 1: Reason the component's delivery configuration needs attention..

- Value shape: string. Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`.

### BundleComponentPreviousAttributes.delivery_configuration_reason variant 2

anyOf variant 2.

- Value shape: null. Reason the component's delivery configuration needs attention. 

### BundleComponentPreviousAttributes.delivery_configuration_status

### BundleComponentPreviousAttributes.delivery_configuration_status variant 1

anyOf variant 1: Whether the component's delivery configuration is ready, needs attention, or does not apply..

- Value shape: string. Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### BundleComponentPreviousAttributes.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Whether the component's delivery configuration is ready, needs attention, or does not apply. 

### BundleComponentPreviousAttributes.delivery_profile_id

### BundleComponentPreviousAttributes.delivery_profile_id variant 1

anyOf variant 1: Delivery profile used for this component, including any component override..

- Value shape: string. Delivery profile used for this component, including any component override. Delivery profile used for this component, including any component override. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. 

### BundleComponentPreviousAttributes.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Delivery profile used for this component, including any component override. 

### BundleComponentPreviousAttributes.position

### BundleComponentPreviousAttributes.position variant 1

anyOf variant 1: Display order among the bundle's components, starting at zero..

- Value shape: integer. Display order among the bundle's components, starting at zero. Display order among the bundle's components, starting at zero. Format: `int32`. 

### BundleComponentPreviousAttributes.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the bundle's components, starting at zero. 

### BundleComponentPreviousAttributes.product_id

### BundleComponentPreviousAttributes.product_id variant 1

anyOf variant 1: Identifier of the product the component's variant belongs to..

- Value shape: string. Identifier of the product the component's variant belongs to. Identifier of the product the component's variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### BundleComponentPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product the component's variant belongs to. 

### BundleComponentPreviousAttributes.quantity

### BundleComponentPreviousAttributes.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int32`. 

### BundleComponentPreviousAttributes.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### BundleComponentPreviousAttributes.variant_id

### BundleComponentPreviousAttributes.variant_id variant 1

anyOf variant 1: Identifier of the product variant included in the bundle..

- Value shape: string. Identifier of the product variant included in the bundle. Identifier of the product variant included in the bundle. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### BundleComponentPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product variant included in the bundle. 

