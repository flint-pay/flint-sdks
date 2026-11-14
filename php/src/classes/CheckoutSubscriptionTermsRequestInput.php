<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null $gift_recipient
 * @property-read int $quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionTermsRequestInput extends Model {
    /** @param array{'billing_interval'?: string, 'billing_interval_count'?: int, 'gift_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null}|object|null, 'quantity'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTermsRequestInput')); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** minimum: 1. maximum: 365.
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
    /** Legacy subscription multiplier. Only 1 is accepted. Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
}
