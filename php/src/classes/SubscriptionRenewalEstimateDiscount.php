<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $discount_money
 * @property-read string $name
 * @property-read string|null $promotion_id
 * @property-read string $source
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionRenewalEstimateDiscount extends Model {
    /** @param array{'discount_money': mixed, 'name': string, 'promotion_id': string|null, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalEstimateDiscount')); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getDiscountMoney(): MoneyValue { return $this->get('discount_money'); }
    public function hasDiscountMoney(): bool { return $this->has('discount_money'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Promotion ID for a promotion discount; null for unused-time credit.
     * @return string|null
     */
    public function getPromotionId(): string|null { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
    /** Value enum: "promotion", "plan_change_credit".
     * @return string
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
