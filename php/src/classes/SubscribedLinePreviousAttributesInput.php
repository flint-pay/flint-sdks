<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurring_amount_money
 * @property-read string|null $subscription_offer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscribedLinePreviousAttributesInput extends Model {
    /** @param array{'billing_interval'?: string|null, 'billing_interval_count'?: int|null, 'recurring_amount_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'subscription_offer_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscribedLinePreviousAttributesInput')); }
    /** Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the billing period the line was bought on. Sent with `billing_interval_count`, the pair must be one of the offer's billing interval options. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): mixed { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing_interval units between charges, from 1 to 365. anyOf[1] (Value): integer. Number of billing_interval units between charges, from 1 to 365. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): mixed { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Line amount for the first renewal, including modifiers and recurring discounts, before shipping and tax. Signup-only discounts are excluded. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurring_amount_money is omitted; use hasRecurringAmountMoney() or valueOrDefault().
     */
    public function getRecurringAmountMoney(): mixed { return $this->get('recurring_amount_money'); }
    public function hasRecurringAmountMoney(): bool { return $this->has('recurring_amount_money'); }
    /** ID of the subscription offer the line was bought under. anyOf[1] (Value): string. ID of the subscription offer the line was bought under. Example: "soffer_01KEZF7C00KAA9Y1X1KM70YFAA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): mixed { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
