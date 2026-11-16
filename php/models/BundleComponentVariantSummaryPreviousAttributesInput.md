[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleComponentVariantSummaryPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Optional | boolean or null | Whether the component's variant and its product are both active. `is_available_for_sale`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinputis_available_for_sale). |
| `name` | Optional | string or null | Name of the component's variant, when set. `name`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinputname). |
| `product_id` | Optional | string or null | Identifier of the product this component variant belongs to. `product_id`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinputproduct_id). |
| `product_name` | Optional | string or null | Name of the product the variant belongs to. `product_name`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinputproduct_name). |
| `selected_options` | Optional | Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput) or null | Option names and values selected by the component's variant. `selected_options`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinputselected_options). |
| `sku` | Optional | string or null | Stock keeping unit assigned to the component's variant, when set. `sku`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinputsku). |
| `variant_id` | Optional | string or null | Identifier of the product variant included in the component. `variant_id`: [declared alternatives](../models/BundleComponentVariantSummaryPreviousAttributesInput.md#bundlecomponentvariantsummarypreviousattributesinputvariant_id). |

### BundleComponentVariantSummaryPreviousAttributesInput.is_available_for_sale

### BundleComponentVariantSummaryPreviousAttributesInput.is_available_for_sale variant 1

anyOf variant 1: Whether the component's variant and its product are both active..

- Value shape: boolean. Whether the component's variant and its product are both active. 

### BundleComponentVariantSummaryPreviousAttributesInput.is_available_for_sale variant 2

anyOf variant 2.

- Value shape: null. Whether the component's variant and its product are both active. 

### BundleComponentVariantSummaryPreviousAttributesInput.name

### BundleComponentVariantSummaryPreviousAttributesInput.name variant 1

anyOf variant 1: Name of the component's variant, when set..

- Value shape: string. Name of the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributesInput.name variant 2

anyOf variant 2.

- Value shape: null. Name of the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributesInput.product_id

### BundleComponentVariantSummaryPreviousAttributesInput.product_id variant 1

anyOf variant 1: Identifier of the product this component variant belongs to..

- Value shape: string. Identifier of the product this component variant belongs to. Identifier of the product this component variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. 

### BundleComponentVariantSummaryPreviousAttributesInput.product_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product this component variant belongs to. 

### BundleComponentVariantSummaryPreviousAttributesInput.product_name

### BundleComponentVariantSummaryPreviousAttributesInput.product_name variant 1

anyOf variant 1: Name of the product the variant belongs to..

- Value shape: string. Name of the product the variant belongs to. 

### BundleComponentVariantSummaryPreviousAttributesInput.product_name variant 2

anyOf variant 2.

- Value shape: null. Name of the product the variant belongs to. 

### BundleComponentVariantSummaryPreviousAttributesInput.selected_options

### BundleComponentVariantSummaryPreviousAttributesInput.selected_options variant 1

anyOf variant 1: Option names and values selected by the component's variant..

- Value shape: Array of [SelectedProductOptionPreviousAttributesInput](../models/SelectedProductOptionPreviousAttributesInput.md#selectedproductoptionpreviousattributesinput). Option names and values selected by the component's variant. 

### BundleComponentVariantSummaryPreviousAttributesInput.selected_options variant 2

anyOf variant 2.

- Value shape: null. Option names and values selected by the component's variant. 

### BundleComponentVariantSummaryPreviousAttributesInput.sku

### BundleComponentVariantSummaryPreviousAttributesInput.sku variant 1

anyOf variant 1: Stock keeping unit assigned to the component's variant, when set..

- Value shape: string. Stock keeping unit assigned to the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributesInput.sku variant 2

anyOf variant 2.

- Value shape: null. Stock keeping unit assigned to the component's variant, when set. 

### BundleComponentVariantSummaryPreviousAttributesInput.variant_id

### BundleComponentVariantSummaryPreviousAttributesInput.variant_id variant 1

anyOf variant 1: Identifier of the product variant included in the component..

- Value shape: string. Identifier of the product variant included in the component. Identifier of the product variant included in the component. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. 

### BundleComponentVariantSummaryPreviousAttributesInput.variant_id variant 2

anyOf variant 2.

- Value shape: null. Identifier of the product variant included in the component. 

