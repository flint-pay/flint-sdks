<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read MoneyValuePreviousAttributes|null $recurring_amount_money
 * @property-read string|null $subscription_offer_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscribedLinePreviousAttributes extends Model {
    /** @param array{'billing_interval'?: mixed, 'billing_interval_count'?: mixed, 'recurring_amount_money'?: mixed, 'subscription_offer_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscribedLinePreviousAttributes')); }
    /** Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingInterval(): string|null { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing_interval units between charges, from 1 to 365. anyOf[1] (Value): integer. Number of billing_interval units between charges, from 1 to 365. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingIntervalCount(): int|null { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRecurringAmountMoney(): MoneyValuePreviousAttributes|null { return $this->get('recurring_amount_money'); }
    public function hasRecurringAmountMoney(): bool { return $this->has('recurring_amount_money'); }
    /** ID of the subscription offer the line was bought under. anyOf[1] (Value): string. ID of the subscription offer the line was bought under. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionOfferId(): string|null { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
