<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read ?OrderLineSubscriptionOfferDiscount $discount
 * @property-read string $name
 * @property-read string $subscription_offer_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineSubscriptionOfferSummary extends Model {
    /** @param array{'billing_interval_options': list<mixed>, 'discount'?: mixed, 'name': string, 'subscription_offer_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferSummary')); }
    /** Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. [] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.
     * @return list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. The discount a subscription offer gives, as a fixed amount or a percentage.
     * @return ?OrderLineSubscriptionOfferDiscount
     */
    public function getDiscount(): ?OrderLineSubscriptionOfferDiscount { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** Name of the offer. On a subscribed line it is the name frozen when the buyer signed up.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose.
     * @return string
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
