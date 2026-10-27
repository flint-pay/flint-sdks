[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItemVariant

Summary of the component's variant and its selected options.

A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `available_for_sale` | Required | boolean | Whether the component's variant and its product are both active. |
| `name` | Optional | string | Name of the component's variant, when set. |
| `product_name` | Optional | string | Name of the product the variant belongs to. |
| `selected_options` | Optional | Array of ([ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItemVariantSelectedOptionsItem](../models/ReturnPreviewsCreateResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItemVariantSelectedOptionsItem.md#returnpreviewscreateresponse200dataeligibilityeligibilitypolicyevaluationlineitemsitembundlecomponentsitemvariantselectedoptionsitem) and [SelectedProductOption](../models/SelectedProductOption.md#selectedproductoption)) | Option names and values selected by the component's variant. |
| `sku` | Optional | string | Stock keeping unit assigned to the component's variant, when set. |
| `variant_id` | Required | string | Identifier of the product variant included in the component. |

