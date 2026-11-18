<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $billing_period_count
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurring_total_money
 * @property-read string|\DateTimeInterface|null $starts_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionPricePhasePreviousAttributesInput extends Model {
    /** @param array{'billing_period_count'?: int|null, 'recurring_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'starts_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionPricePhasePreviousAttributesInput')); }
    /** Number of paid billing periods at this price. Null when the price continues until cancellation. anyOf[1] (Value): integer. Number of paid billing periods at this price. Null when the price continues until cancellation. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_period_count is omitted; use hasBillingPeriodCount() or valueOrDefault().
     */
    public function getBillingPeriodCount(): mixed { return $this->get('billing_period_count'); }
    public function hasBillingPeriodCount(): bool { return $this->has('billing_period_count'); }
    /** Recurring merchandise charge per billing period after discounts, before tax and shipping. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurring_total_money is omitted; use hasRecurringTotalMoney() or valueOrDefault().
     */
    public function getRecurringTotalMoney(): mixed { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. anyOf[1] (Value): string. Fixed start of this phase, when known. Null when the buyer has not paid and the billing start depends on when they pay. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): mixed { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
}
