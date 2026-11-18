<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $billing_period_count
 * @property-read MoneyValuePreviousAttributes|null $recurring_total_money
 * @property-read string|null $starts_at
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionPricePhasePreviousAttributes extends Model {
    /** @param array{'billing_period_count'?: mixed, 'recurring_total_money'?: mixed, 'starts_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionPricePhasePreviousAttributes')); }
    /** Number of paid billing periods at this price. Null when the price continues until cancellation. anyOf[1] (Value): integer. Number of paid billing periods at this price. Null when the price continues until cancellation. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingPeriodCount(): int|null { return $this->get('billing_period_count'); }
    public function hasBillingPeriodCount(): bool { return $this->has('billing_period_count'); }
    /** Recurring merchandise charge per billing period after discounts, before tax and shipping. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRecurringTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. anyOf[1] (Value): string. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartsAt(): string|null { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
}
