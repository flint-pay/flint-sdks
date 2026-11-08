<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $deferred_promotion_ids
 * @property-read int $expected_version
 * @property-read list<string> $order_discount_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersRemoveDiscountsParams extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersRemoveDiscountsParams')); }
    /** IDs from the order's deferred_promotions to remove before payment. May be omitted or empty when order_discount_ids contains an ID. [] (Value): string. minLength: 1. Example: "dp_01KEZF7C00KR2DPPXEHRHG12N7".
     * @return list<string>
     * @throws SdkError When deferred_promotion_ids is omitted; use hasDeferredPromotionIds() or valueOrDefault().
     */
    public function getDeferredPromotionIds(): array { return $this->get('deferred_promotion_ids'); }
    public function hasDeferredPromotionIds(): bool { return $this->has('deferred_promotion_ids'); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** IDs from the order's discounts to remove. May be omitted or empty when deferred_promotion_ids contains an ID. [] (Value): string. minLength: 1. Example: "ad_01KEZF7C00T30DH97GR0A9BF31".
     * @return list<string>
     * @throws SdkError When order_discount_ids is omitted; use hasOrderDiscountIds() or valueOrDefault().
     */
    public function getOrderDiscountIds(): array { return $this->get('order_discount_ids'); }
    public function hasOrderDiscountIds(): bool { return $this->has('order_discount_ids'); }
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
