<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null $gift_recipient
 * @property-read list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionTermsRequestInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'gift_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null, 'line_items'?: list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'quantity'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTermsRequestInput')); }
    /** Unit of the billing period the buyer chose from `subscription_terms.billing_interval_options`. Send it with `billing_interval_count`; omit both to keep the interval the session already has. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of `billing_interval` units between charges. Send it with `billing_interval`. minimum: 1. maximum: 365.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Who receives the gift, when subscription_terms.gifts_enabled is true. Replaces the whole recipient; send null to clear it. The buyer stays the purchaser. anyOf[1] (Value): {@see SubscriptionGiftRecipientRequestInput}. Who receives a gift subscription. Sending it replaces the whole recipient. anyOf[2] (Value): null.
     * @return array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null
     * @throws SdkError When gift_recipient is omitted; use hasGiftRecipient() or valueOrDefault().
     */
    public function getGiftRecipient(): mixed { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** Partial quantities for distinct frozen plan lines. Omitted lines keep their quantities. Checkout credentials may set only the adjustable line, within min_quantity and max_quantity (defaults 1 and 9,999). Merchant credentials may set any line to 1 through 9,999. maxItems: 50. [] (Value): {@see SubscriptionPlanChangeLineItemRequestInput}. Quantity override for a line in the target subscription plan.
     * @return list<SubscriptionPlanChangeLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Legacy subscription multiplier. Only 1 is accepted. Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
