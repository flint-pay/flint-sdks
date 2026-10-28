[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem

An item included in a bundle.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_component_id` | Required | string | Stable identifier of this component within its bundle. |
| `delivery_configuration_reason` | Optional | string | Reason the component's delivery configuration needs attention. Values: `"delivery_profile_missing"`, `"delivery_profile_inactive"`. |
| `delivery_configuration_status` | Required | string | Whether the component's delivery configuration is ready, needs attention, or does not apply. Values: `"configured"`, `"action_required"`, `"not_applicable"`. |
| `delivery_profile_id` | Optional | string | Delivery profile used for this component, including any component override. |
| `position` | Required | integer | Display order among the bundle's components, starting at zero. Format: `int32`. |
| `product_id` | Optional | string | Identifier of the product the component's variant belongs to. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `variant` | Optional | [MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItemVariant](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItemVariant.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitypolicyevaluationlineitemsitembundlecomponentsitemvariant) | Summary of the component's variant and its selected options. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale. `variant`: [field definitions](../models/MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem.md#mecreatereturnpreviewresponse200dataeligibilityeligibilitypolicyevaluationlineitemsitembundlecomponentsitemvariant-fields-1). |
| `variant_id` | Required | string | Identifier of the product variant included in the bundle. |

### MeCreateReturnPreviewResponse200DataEligibilityEligibilityPolicyEvaluationLineItemsItemBundleComponentsItem.variant fields 1

Summary of the component's variant and its selected options. A summary of the variant that fills a bundle component: its names, SKU, selected options, and whether it is available for sale.

Field definitions: [shared fields](BundleComponentVariantSummary.md#bundlecomponentvariantsummary).

