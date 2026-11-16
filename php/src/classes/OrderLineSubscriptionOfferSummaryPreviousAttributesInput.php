<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $billing_interval_options
 * @property-read OrderLineSubscriptionOfferDiscountPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $discount
 * @property-read string|null $name
 * @property-read string|null $subscription_offer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineSubscriptionOfferSummaryPreviousAttributesInput extends Model {
    /** @param array{'billing_interval_options'?: list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'discount'?: OrderLineSubscriptionOfferDiscountPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'name'?: string|null, 'subscription_offer_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineSubscriptionOfferSummaryPreviousAttributesInput')); }
    /** Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. anyOf[1] (Value): Array of {@see SubscriptionIntervalOptionPreviousAttributesInput}. Billing intervals the offer lists for the line. On a subscribed line they are the options frozen when the buyer signed up. anyOf[1][] (Value): {@see SubscriptionIntervalOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): mixed { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The recurring discount the offer's promotion gives on every charge. Omitted when the offer has no promotion or its discount can't be shown in the order's currency. anyOf[1] (Value): {@see OrderLineSubscriptionOfferDiscountPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderLineSubscriptionOfferDiscountPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When discount is omitted; use hasDiscount() or valueOrDefault().
     */
    public function getDiscount(): mixed { return $this->get('discount'); }
    public function hasDiscount(): bool { return $this->has('discount'); }
    /** Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. anyOf[1] (Value): string. Name of the offer. On a subscribed line it is the name frozen when the buyer signed up. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. anyOf[1] (Value): string. ID of the subscription offer. On a one-time line it is the active offer that covers the line's variant, which you can send as `subscription_offer_id` to sign the buyer up. On a subscribed line it is the offer the buyer chose. Example: "soffer_01KEZF7C00KAA9Y1X1KM70YFAA". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): mixed { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}
