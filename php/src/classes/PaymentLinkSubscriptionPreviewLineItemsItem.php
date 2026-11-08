<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $allow_quantity_adjustment
 * @property-read int $max_quantity
 * @property-read int $min_quantity
 * @property-read string $name
 * @property-read int $quantity
 * @property-read ?string $subscription_plan_line_item_id
 * @property-read MoneyValue $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkSubscriptionPreviewLineItemsItem extends Model {
    /** @param array{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSubscriptionPreviewLineItemsItem')); }
    /** Whether the buyer may adjust this line quantity.
     * @return bool
     */
    public function getAllowQuantityAdjustment(): bool { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     * @return int
     */
    public function getMaxQuantity(): int { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     * @return int
     */
    public function getMinQuantity(): int { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** The captured line name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The line quantity, before the subscription quantity multiplier. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return ?string
     */
    public function getSubscriptionPlanLineItemId(): ?string { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** The captured unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getUnitPriceMoney(): MoneyValue { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
