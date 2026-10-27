<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read ?MoneyValue $recurring_amount_money
 * @property-read string $subscription_offer_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscribedLine extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'recurring_amount_money'?: mixed, 'subscription_offer_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscribedLine')); }
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Shape $ (Value): {@see MoneyValue}. Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getRecurringAmountMoney(): ?MoneyValue { return $this->get('recurring_amount_money'); }
    public function hasRecurringAmountMoney(): bool { return $this->has('recurring_amount_money'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
