[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleComponentVariantSummaryPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Optional | boolean or null | Whether the component's variant and its product are both active. `is_available_for_sale`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesis_available_for_sale). |
| `name` | Optional | string or null | Name of the component's variant, when set. `name`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesname). |
| `product_id` | Optional | string or null | Identifier of the product this component variant belongs to. `product_id`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesproduct_id). |
| `product_name` | Optional | string or null | Name of the product the variant belongs to. `product_name`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesproduct_name). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes) or null | Option names and values selected by the component's variant. `selected_options`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to the component's variant, when set. `sku`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributessku). |
| `variant_id` | Optional | string or null | Identifier of the product variant included in the component. `variant_id`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesvariant_id). |

### BundleComponentVariantSummaryPreviousAttributes.is_available_for_sale

### BundleComponentVariantSummaryPreviousAttributes.is_available_for_sale variant 1

anyOf variant 1: Whether the component's variant and its product are both active..

- Value shape: boolean. Whether the component's variant and its product are both active. 

### BundleComponentVariantSummaryPreviousAttributes.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the component's variant and its product are both active. 

### BundleComponentVariantSummaryPreviousAttributes.name

### BundleComponentVariantSummaryPreviousAttributes.name variant 1

anyOf variant 1: Name of the component's variant, when set..

- Value shape: string. Name of the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributes.name variant 2

anyOf variant 2.

- Value shape: null. Name of the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributes.product_id

### BundleComponentVariantSummaryPreviousAttributes.product_id variant 1

anyOf variant 1: Identifier of the product this component variant belongs to..

- Value shape: string. Identifier of the product this component variant belongs to. 

### BundleComponentVariantSummaryPreviousAttributes.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this component variant belongs to. 

### BundleComponentVariantSummaryPreviousAttributes.product_name

### BundleComponentVariantSummaryPreviousAttributes.product_name variant 1

anyOf variant 1: Name of the product the variant belongs to..

- Value shape: string. Name of the product the variant belongs to. 

### BundleComponentVariantSummaryPreviousAttributes.product_name variant 2

anyOf variant 2.

- Value shape: null. Name of the product the variant belongs to. 

### BundleComponentVariantSummaryPreviousAttributes.selected_options

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1

anyOf variant 1: Option names and values selected by the component's variant..

- Value shape: Array of [SelectedProductOptionPreviousAttributes](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributes). Option names and values selected by the component's variant. 

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option names and values selected by the component's variant. 

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `option_id` | Optional | string or null | Identifier of the selected product option. `option_id`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options-variant-1-fields-1option_id). |
| `option_name` | Optional | string or null | Name of the selected product option. `option_name`: [declared alternatives](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributesoption_name). |
| `option_value_id` | Optional | string or null | Identifier of the selected option value. `option_value_id`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributes.md#bundlecomponentvariantsummarypreviousattributesselected_options-variant-1-fields-1option_value_id). |
| `value` | Optional | string or null | Selected value of the product option. `value`: [declared alternatives](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributesvalue). |

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.option_id

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.option_id variant 1

anyOf variant 1: Identifier of the selected product option..

- Value shape: string. Identifier of the selected product option. Identifier of the selected product option. Example: `"opt_01KEZF7C008R5Q9BG9B4B4KQH8"`. 

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.option_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the selected product option. 

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.option_name

Declared alternatives: [SelectedProductOptionPreviousAttributes.option_name](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributesoption_name).

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.option_value_id

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.option_value_id variant 1

anyOf variant 1: Identifier of the selected option value..

- Value shape: string. Identifier of the selected option value. Identifier of the selected option value. Example: `"optv_01KEZF7C0078SVZ1T7PVRXQK7F"`. 

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.option_value_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the selected option value. 

### BundleComponentVariantSummaryPreviousAttributes.selected_options variant 1.[] fields 1.value

Declared alternatives: [SelectedProductOptionPreviousAttributes.value](../models/SelectedProductOptionPreviousAttributes.md#selectedproductoptionpreviousattributesvalue).

### BundleComponentVariantSummaryPreviousAttributes.sku

### BundleComponentVariantSummaryPreviousAttributes.sku variant 1

anyOf variant 1: Stock keeping unit assigned to the component's variant, when set..

- Value shape: string. Stock keeping unit assigned to the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributes.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit assigned to the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributes.variant_id

### BundleComponentVariantSummaryPreviousAttributes.variant_id variant 1

anyOf variant 1: Identifier of the product variant included in the component..

- Value shape: string. Identifier of the product variant included in the component. 

### BundleComponentVariantSummaryPreviousAttributes.variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product variant included in the component. 

