<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $deferred_promotion_ids
 * @property-read int $expected_version
 * @property-read list<string> $order_discount_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class RemoveDiscountsRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RemoveDiscountsRequestInput')); }
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
}
