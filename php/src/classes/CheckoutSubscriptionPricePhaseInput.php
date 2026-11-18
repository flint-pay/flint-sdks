<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $billing_period_count
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_total_money
 * @property-read string|\DateTimeInterface|null $starts_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionPricePhaseInput extends Model {
    /** @param array{'billing_period_count': int|null, 'recurring_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'starts_at': string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionPricePhaseInput')); }
    /** Number of paid billing periods at this price. Null when the price continues until cancellation. Format: int32. minimum: 1.
     * @return int|null
     * @throws SdkError When billing_period_count is omitted; use hasBillingPeriodCount() or valueOrDefault().
     */
    public function getBillingPeriodCount(): int|null { return $this->get('billing_period_count'); }
    public function hasBillingPeriodCount(): bool { return $this->has('billing_period_count'); }
    /** Recurring merchandise charge per billing period after discounts, before tax and shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_total_money is omitted; use hasRecurringTotalMoney() or valueOrDefault().
     */
    public function getRecurringTotalMoney(): mixed { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface|null { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
}
