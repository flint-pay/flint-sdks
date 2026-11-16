[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleComponentPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Optional | string or null | Stable identifier of this component within its bundle. `bundle_component_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesbundle_component_id). |
| `delivery_configuration_reason` | Optional | string or null | Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. `delivery_configuration_reason`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesdelivery_configuration_reason). |
| `delivery_configuration_status` | Optional | string or null | Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. `delivery_configuration_status`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesdelivery_configuration_status). |
| `delivery_profile_id` | Optional | string or null | Delivery profile used for this component, including any component override. `delivery_profile_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesdelivery_profile_id). |
| `position` | Optional | integer or null | Display order among the bundle's components, starting at zero. `position`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesposition). |
| `product_id` | Optional | string or null | Identifier of the product the component's variant belongs to. `product_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesproduct_id). |
| `quantity` | Optional | integer or null | Whole-number quantity; fractional quantities are not supported. `quantity`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesquantity). |
| `variant` | Optional | [BundleComponentVariantSummaryPreviousAttributes](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributes) or null | Summary of the component's variant and its selected options. `variant`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant). |
| `variant_id` | Optional | string or null | Identifier of the product variant included in the bundle. `variant_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant_id). |

### BundleComponentPreviousAttributes.bundle_component_id

### BundleComponentPreviousAttributes.bundle_component_id variant 1

anyOf variant 1: Stable identifier of this component within its bundle..

- Value shape: string. Stable identifier of this component within its bundle. 

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

- Value shape: string. Delivery profile used for this component, including any component override. 

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

- Value shape: string. Identifier of the product the component's variant belongs to. 

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

### BundleComponentPreviousAttributes.variant

Summary of the component's variant and its selected options.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Conditional | boolean or null | Whether the component's variant and its product are both active. `is_available_for_sale`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesis_available_for_sale). |
| `name` | Conditional | string or null | Name of the component's variant, when set. `name`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesname). |
| `product_id` | Conditional | string or null | Identifier of the product this component variant belongs to. `product_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant-variant-1product_id). |
| `product_name` | Conditional | string or null | Name of the product the variant belongs to. `product_name`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesproduct_name). |
| `selected_options` | Conditional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option names and values selected by the component's variant. `selected_options`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options). |
| `sku` | Conditional | string or null | Stock keeping unit assigned to the component's variant, when set. `sku`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributessku). |
| `variant_id` | Conditional | string or null | Identifier of the product variant included in the component. `variant_id`: [declared alternatives](../models/BundleComponentPreviousAttributes.md#bundlecomponentpreviousattributesvariant-variant-1variant_id). |

### BundleComponentPreviousAttributes.variant variant 1

anyOf BundleComponentVariantSummaryPreviousAttributes.

- Optional: `is_available_for_sale`, `name`, `product_id`, `product_name`, `selected_options`, `sku`, `variant_id`.

### BundleComponentPreviousAttributes.variant variant 2

anyOf variant 2.

- Undeclared: `is_available_for_sale`, `name`, `product_id`, `product_name`, `selected_options`, `sku`, `variant_id`.
- Value shape: null. Summary of the component's variant and its selected options. 

### BundleComponentPreviousAttributes.variant variant 1.is_available_for_sale

Declared alternatives: [BundleComponentVariantSummaryPreviousAttributes.is_available_for_sale](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesis_available_for_sale).

### BundleComponentPreviousAttributes.variant variant 1.name

Declared alternatives: [BundleComponentVariantSummaryPreviousAttributes.name](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesname).

### BundleComponentPreviousAttributes.variant variant 1.product_id

### BundleComponentPreviousAttributes.variant variant 1.product_id variant 1

anyOf variant 1: Identifier of the product this component variant belongs to..

- Value shape: string. Identifier of the product this component variant belongs to. Identifier of the product this component variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### BundleComponentPreviousAttributes.variant variant 1.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this component variant belongs to. 

### BundleComponentPreviousAttributes.variant variant 1.product_name

Declared alternatives: [BundleComponentVariantSummaryPreviousAttributes.product_name](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesproduct_name).

### BundleComponentPreviousAttributes.variant variant 1.selected_options

Declared alternatives: [BundleComponentVariantSummaryPreviousAttributes.selected_options](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options).

### BundleComponentPreviousAttributes.variant variant 1.sku

Declared alternatives: [BundleComponentVariantSummaryPreviousAttributes.sku](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributessku).

### BundleComponentPreviousAttributes.variant variant 1.variant_id

### BundleComponentPreviousAttributes.variant variant 1.variant_id variant 1

anyOf variant 1: Identifier of the product variant included in the component..

- Value shape: string. Identifier of the product variant included in the component. Identifier of the product variant included in the component. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### BundleComponentPreviousAttributes.variant variant 1.variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product variant included in the component. 

### BundleComponentPreviousAttributes.variant_id

### BundleComponentPreviousAttributes.variant_id variant 1

anyOf variant 1: Identifier of the product variant included in the bundle..

- Value shape: string. Identifier of the product variant included in the bundle. 

### BundleComponentPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product variant included in the bundle. 

