<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_amount_money
 * @property-read string $subscription_offer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscribedLineInput extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'recurring_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'subscription_offer_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscribedLineInput')); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Format: int32.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_amount_money is omitted; use hasRecurringAmountMoney() or valueOrDefault().
     */
    public function getRecurringAmountMoney(): mixed { return $this->get('recurring_amount_money'); }
    public function hasRecurringAmountMoney(): bool { return $this->has('recurring_amount_money'); }
    /** subscription_offer_id
     * @return string
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
