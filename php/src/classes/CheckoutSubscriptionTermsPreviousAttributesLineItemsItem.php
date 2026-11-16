<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $allow_quantity_adjustment
 * @property-read int|null $max_quantity
 * @property-read int|null $min_quantity
 * @property-read string|null $name
 * @property-read int|null $quantity
 * @property-read string|null $subscription_plan_line_item_id
 * @property-read MoneyValuePreviousAttributes|null $unit_price_money
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionTermsPreviousAttributesLineItemsItem extends Model {
    /** @param array{'allow_quantity_adjustment'?: mixed, 'max_quantity'?: mixed, 'min_quantity'?: mixed, 'name'?: mixed, 'quantity'?: mixed, 'subscription_plan_line_item_id'?: mixed, 'unit_price_money'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTermsPreviousAttributesLineItemsItem')); }
    /** Whether the buyer may adjust this line quantity. anyOf[1] (Value): boolean. Whether the buyer may adjust this line quantity. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getAllowQuantityAdjustment(): bool|null { return $this->get('allow_quantity_adjustment'); }
    public function hasAllowQuantityAdjustment(): bool { return $this->has('allow_quantity_adjustment'); }
    /** Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMaxQuantity(): int|null { return $this->get('max_quantity'); }
    public function hasMaxQuantity(): bool { return $this->has('max_quantity'); }
    /** Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getMinQuantity(): int|null { return $this->get('min_quantity'); }
    public function hasMinQuantity(): bool { return $this->has('min_quantity'); }
    /** The captured line name. anyOf[1] (Value): string. The captured line name. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. anyOf[1] (Value): string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanLineItemId(): string|null { return $this->get('subscription_plan_line_item_id'); }
    public function hasSubscriptionPlanLineItemId(): bool { return $this->has('subscription_plan_line_item_id'); }
    /** The captured unit price. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getUnitPriceMoney(): MoneyValuePreviousAttributes|null { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
