<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $discount_money
 * @property-read string $name
 * @property-read int $quantity
 * @property-read string|null $subscription_id
 * @property-read string|null $subscription_line_item_id
 * @property-read MoneyValue $subtotal_money
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionRenewalEstimateLineItem extends Model {
    /** @param array{'discount_money': mixed, 'name': string, 'quantity': int, 'subscription_id': string|null, 'subscription_line_item_id': string|null, 'subtotal_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionRenewalEstimateLineItem')); }
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Subscription that owns subscription_line_item_id. Null when subscription_line_item_id is null for new or replacement lines.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** The saved subscription line ID; null when previewing new or replacement lines.
     * @return string|null
     */
    public function getSubscriptionLineItemId(): string|null { return $this->get('subscription_line_item_id'); }
    public function hasSubscriptionLineItemId(): bool { return $this->has('subscription_line_item_id'); }
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getSubtotalMoney(): MoneyValue { return $this->get('subtotal_money'); }
    public function hasSubtotalMoney(): bool { return $this->has('subtotal_money'); }
}
