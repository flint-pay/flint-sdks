<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $billing_period_count
 * @property-read MoneyValue $recurring_total_money
 * @property-read string|null $starts_at
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionPricePhase extends Model {
    /** @param array{'billing_period_count': int|null, 'recurring_total_money': mixed, 'starts_at': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionPricePhase')); }
    /** Number of paid billing periods at this price. Null when the price continues until cancellation. Format: int32. minimum: 1.
     * @return int|null
     */
    public function getBillingPeriodCount(): int|null { return $this->get('billing_period_count'); }
    public function hasBillingPeriodCount(): bool { return $this->has('billing_period_count'); }
    /** Recurring merchandise charge per billing period after discounts, before tax and shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRecurringTotalMoney(): MoneyValue { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: date-time.
     * @return string|null
     */
    public function getStartsAt(): string|null { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
}
