<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read OrderLineSubscriptionOfferDiscountInput|array<array-key, mixed>|\stdClass $discount
 * @property-read string $name
 * @property-read string $subscription_offer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineSubscriptionOfferSummaryInput extends Model {
    /** @param array{'billing_interval_options': list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'discount'?: OrderLineSubscriptionOfferDiscountInput|array<array-key, mixed>|\stdClass, 'name': string, 'subscription_offer_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferSummaryInput')); }
    /** Shape $ (Value): Array of {@see SubscriptionIntervalOptionInput}. Shape $[] (Value): {@see SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a subscription plan.
     * @return list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Shape $ (Value): {@see OrderLineSubscriptionOfferDiscountInput}. The discount a subscription offer gives, as a fixed amount or a percentage.
     * @return OrderLineSubscriptionOfferDiscountInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount is omitted; use hasDiscount() or valueOrDefault().
     */
    public function getDiscount(): mixed { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
