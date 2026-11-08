[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionPreviewRequestPromotionApplyInput

The `promotion_apply` variant of `CreateSubscriptionPreviewRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `first_cycle` | Optional | integer | First charged cycle eligible for this promotion. Defaults to the next cycle without a renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2 while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its price. Format: `uint64`. minimum: `1`. |
| `mode` | Required | string | Preview applying a promotion to an existing subscription without saving changes. Values: `"promotion_apply"`. |
| `promotion` | Required | [PromotionRefRequestInput](../models/PromotionRefRequestInput.md#promotionrefrequestinput) | Promotion to attach. Reattaching a removed promotion freezes its current terms and keeps its consumed cycles. Identifies the promotion to apply, by promotion code or by promotion ID. |
| `replace_promotion_id` | Optional | string | Active or scheduled promotion to replace. It stops applying from first_cycle and continues to apply to earlier cycles. Must differ from the new promotion. An offer's own promotion cannot be replaced. minLength: `1`. pattern: `^promo_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"promo_01KEZF7C00QQ8EZ74BDYSZ315V"`. |
| `subscription_id` | Required | string | ID of the subscription to preview. minLength: `1`. pattern: `^sub_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"sub_01KEZF7C00BVRE8YDBXQB74BBM"`. |

