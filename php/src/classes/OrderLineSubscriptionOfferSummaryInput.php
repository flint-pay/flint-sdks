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
    /**  [] (Value): {@see SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.
     * @return list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The discount a subscription offer gives, as a fixed amount or a percentage.
     * @return OrderLineSubscriptionOfferDiscountInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When discount is omitted; use hasDiscount() or valueOrDefault().
     */
    public function getDiscount(): mixed { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** name
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Example: "soffer_01KEZF7C00KAA9Y1X1KM70YFAA".
     * @return string
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
