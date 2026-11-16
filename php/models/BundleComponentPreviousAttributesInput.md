[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleComponentPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Stable identifier of this component within its bundle. `bundle_component_id`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputbundle_component_id). |
| `delivery_configuration_reason` | Optional | string or null | Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Delivery profile used for this component, including any component override. `delivery_profile_id`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputdelivery_profile_id). |
| `position` | Optional | integer or null | Display order among the bundle's components, starting at zero. `position`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputposition). |
| `product_id` | Optional | string or null | Identifier of the product the component's variant belongs to. `product_id`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputquantity). |
| `variant` | Optional | [BundleComponentVariantSummaryPreviousAttributesInput](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinput) or null | Summary of the component's variant and its selected options. |
| `variant_id` | Optional | string or null | Identifier of the product variant included in the bundle. `variant_id`: [declared alternatives](../models/BundleComponentPreviousAttributesInput.md#bundlecomponentpreviousattributesinputvariant_id). |

### BundleComponentPreviousAttributesInput.bundle_component_id

### BundleComponentPreviousAttributesInput.bundle_component_id variant 1

anyOf variant 1: Stable identifier of this component within its bundle..

- Value shape: string. Stable identifier of this component within its bundle. Stable identifier of this component within its bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. 

### BundleComponentPreviousAttributesInput.bundle_component_id variant 2

anyOf variant 2.

- Value shape: null. Stable identifier of this component within its bundle. 

### BundleComponentPreviousAttributesInput.delivery_configuration_reason

### BundleComponentPreviousAttributesInput.delivery_configuration_reason variant 1

anyOf variant 1: Reason the component's delivery configuration needs attention..

- Value shape: string. Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`.

### BundleComponentPreviousAttributesInput.delivery_configuration_reason variant 2

anyOf variant 2.

- Value shape: null. Reason the component's delivery configuration needs attention. 

### BundleComponentPreviousAttributesInput.delivery_configuration_status

### BundleComponentPreviousAttributesInput.delivery_configuration_status variant 1

anyOf variant 1: Whether the component's delivery configuration is ready, needs attention, or does not apply..

- Value shape: string. Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`.

### BundleComponentPreviousAttributesInput.delivery_configuration_status variant 2

anyOf variant 2.

- Value shape: null. Whether the component's delivery configuration is ready, needs attention, or does not apply. 

### BundleComponentPreviousAttributesInput.delivery_profile_id

### BundleComponentPreviousAttributesInput.delivery_profile_id variant 1

anyOf variant 1: Delivery profile used for this component, including any component override..

- Value shape: string. Delivery profile used for this component, including any component override. Delivery profile used for this component, including any component override. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. 

### BundleComponentPreviousAttributesInput.delivery_profile_id variant 2

anyOf variant 2.

- Value shape: null. Delivery profile used for this component, including any component override. 

### BundleComponentPreviousAttributesInput.position

### BundleComponentPreviousAttributesInput.position variant 1

anyOf variant 1: Display order among the bundle's components, starting at zero..

- Value shape: integer. Display order among the bundle's components, starting at zero. Display order among the bundle's components, starting at zero. Format: `int32`. 

### BundleComponentPreviousAttributesInput.position variant 2

anyOf variant 2.

- Value shape: null. Display order among the bundle's components, starting at zero. 

### BundleComponentPreviousAttributesInput.product_id

### BundleComponentPreviousAttributesInput.product_id variant 1

anyOf variant 1: Identifier of the product the component's variant belongs to..

- Value shape: string. Identifier of the product the component's variant belongs to. Identifier of the product the component's variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### BundleComponentPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product the component's variant belongs to. 

### BundleComponentPreviousAttributesInput.quantity

### BundleComponentPreviousAttributesInput.quantity variant 1

anyOf variant 1: Whole-number quantity; fractional quantities are not supported..

- Value shape: integer. Whole-number quantity; fractional quantities are not supported. Whole-number quantity; fractional quantities are not supported. Format: `int32`. 

### BundleComponentPreviousAttributesInput.quantity variant 2

anyOf variant 2.

- Value shape: null. Whole-number quantity; fractional quantities are not supported. 

### BundleComponentPreviousAttributesInput.variant_id

### BundleComponentPreviousAttributesInput.variant_id variant 1

anyOf variant 1: Identifier of the product variant included in the bundle..

- Value shape: string. Identifier of the product variant included in the bundle. Identifier of the product variant included in the bundle. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### BundleComponentPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product variant included in the bundle. 

