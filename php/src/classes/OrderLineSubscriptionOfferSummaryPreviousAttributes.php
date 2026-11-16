<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<SubscriptionIntervalOptionPreviousAttributes>|null $billing_interval_options
 * @property-read OrderLineSubscriptionOfferDiscountPreviousAttributes|null $discount
 * @property-read string|null $name
 * @property-read string|null $subscription_offer_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineSubscriptionOfferSummaryPreviousAttributes extends Model {
    /** @param array{'billing_interval_options'?: mixed, 'discount'?: mixed, 'name'?: mixed, 'subscription_offer_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferSummaryPreviousAttributes')); }
    /** Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. anyOf[1] (Value): Array of {@see SubscriptionIntervalOptionPreviousAttributes}. Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. anyOf[1][] (Value): {@see SubscriptionIntervalOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionIntervalOptionPreviousAttributes>|null
     */
    public function getBillingIntervalOptions(): array|null { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. anyOf[1] (Value): {@see OrderLineSubscriptionOfferDiscountPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderLineSubscriptionOfferDiscountPreviousAttributes|null
     */
    public function getDiscount(): OrderLineSubscriptionOfferDiscountPreviousAttributes|null { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. anyOf[1] (Value): string. Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. anyOf[1] (Value): string. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionOfferId(): string|null { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
