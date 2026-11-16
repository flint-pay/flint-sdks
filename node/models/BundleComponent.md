[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BundleComponent

An item included in a bundle.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string | Stable identifier of this component within its bundle. Example: `"bunc_01KEZF7C00CQASEZGAPEANTGD1"`. |
| `delivery_configuration_reason` | Optional | string | Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Delivery profile used for this component, including any component override. Example: `"dprof_01KEZF7C0020J13FQYNY9854R0"`. |
| `position` | Required | integer | Display order among the bundle's components, starting at zero. Format: `int32`. |
| `product_id` | Optional | string | Identifier of the product the component's variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `variant` | Optional | [BundleComponentVariantSummary](../models/BundleComponentVariantSummary.md#bundlecomponentvariantsummary) | Summary of the component's variant and its selected options. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale. `variant`: [field definitions](../models/BundleComponent.md#bundlecomponentvariant). |
| `variant_id` | Required | string | Identifier of the product variant included in the bundle. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### BundleComponent.variant

Summary of the component's variant and its selected options. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `is_available_for_sale` | Required | boolean | Whether the component's variant and its product are both active. |
| `name` | Optional | string | Name of the component's variant, when set. |
| `product_id` | Required | string | Identifier of the product this component variant belongs to. Example: `"prod_01KEZF7C00BVSHCNWVH528HB66"`. |
| `product_name` | Optional | string | Name of the product the variant belongs to. |
| `selected_options` | Optional | Array of [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption) | Option names and values selected by the component's variant. |
| `sku` | Optional | string | Stock keeping unit assigned to the component's variant, when set. |
| `variant_id` | Required | string | Identifier of the product variant included in the component. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

