<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read int $first_cycle
 * @property-read PromotionRefRequestInput|array<array-key, mixed>|\stdClass $promotion
 * @property-read string $replace_promotion_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionsApplyPromotionParams extends Model {
    /** @param array{'expected_version'?: int, 'first_cycle'?: int, 'promotion': PromotionRefRequestInput|array<array-key, mixed>|\stdClass, 'replace_promotion_id'?: string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionsApplyPromotionParams')); }
    /** Apply only if this matches the subscription's current version. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** First charged cycle eligible for this promotion. Defaults to the next cycle without a renewal order, which is also the minimum: completed_cycles + 1, or completed_cycles + 2 while past_due. The maximum is completed_cycles + 120. The unpaid past_due order keeps its price. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When first_cycle is omitted; use hasFirstCycle() or valueOrDefault().
     */
    public function getFirstCycle(): int { return $this->get('first_cycle'); }
    public function hasFirstCycle(): bool { return $this->has('first_cycle'); }
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
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
