<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $first_cycle
 * @property-read string $mode
 * @property-read PromotionRefRequestInput|array<array-key, mixed>|\stdClass $promotion
 * @property-read string $replace_promotion_id
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSubscriptionPreviewRequestPromotionApplyInput extends Model {
    /** @param array{'first_cycle'?: int, 'mode': string, 'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass, 'replace_promotion_id'?: string, 'subscription_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSubscriptionPreviewRequestPromotionApplyInput')); }
    /** First charged cycle eligible for this promotion. Defaults to the next cycle without a renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2 while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its price. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When first_cycle is omitted; use hasFirstCycle() or valueOrDefault().
     */
    public function getFirstCycle(): int { return $this->get('first_cycle'); }
    public function hasFirstCycle(): bool { return $this->has('first_cycle'); }
    /** Preview applying a promotion to an existing subscription without saving changes. Value enum: "promotion_apply".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Promotion to attach. Reattaching a removed promotion freezes its current terms and keeps its consumed cycles. Identifies the promotion to apply, by promotion code or by promotion ID.
     * @return PromotionRefRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion is omitted; use hasPromotion() or valueOrDefault().
     */
    public function getPromotion(): mixed { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
    /** Active or scheduled promotion to replace. It stops applying from first_cycle and continues to apply to earlier cycles. Must differ from the new promotion. An offer's own promotion cannot be replaced. minLength: 1. pattern: ^promo_[0-9A-HJKMNP-TV-Z]{26}$. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * @return string
     * @throws SdkError When replace_promotion_id is omitted; use hasReplacePromotionId() or valueOrDefault().
     */
    public function getReplacePromotionId(): string { return $this->get('replace_promotion_id'); }
    public function hasReplacePromotionId(): bool { return $this->has('replace_promotion_id'); }
    /** ID of the subscription to preview. minLength: 1. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
