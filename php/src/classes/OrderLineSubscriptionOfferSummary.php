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
    /** Shape $ (Value): Array of {@see SubscriptionIntervalOption}. Shape $[] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, offered by a subscription plan.
     * @return list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Shape $ (Value): {@see OrderLineSubscriptionOfferDiscount}. The discount a subscription offer gives, as a fixed amount or a percentage.
     * @return ?OrderLineSubscriptionOfferDiscount
     */
    public function getDiscount(): ?OrderLineSubscriptionOfferDiscount { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
