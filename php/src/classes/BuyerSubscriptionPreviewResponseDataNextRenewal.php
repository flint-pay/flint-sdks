<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $billing_at_if_resumed_now
 * @property-read string $mode
 * @property-read SubscriptionRenewalEstimate $renewal
 * @property-read string $subscription_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionPreviewResponseDataNextRenewal extends Model {
    /** @param array{'billing_at_if_resumed_now'?: string, 'mode': string, 'renewal': mixed, 'subscription_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPreviewResponseDataNextRenewal')); }
    /** Estimated next billing time if the subscriber resumes now and still has paid time left. Omitted when that estimate does not apply. Format: date-time.
     * @return ?string
     */
    public function getBillingAtIfResumedNow(): ?string { return $this->get('billing_at_if_resumed_now'); }
    public function hasBillingAtIfResumedNow(): bool { return $this->has('billing_at_if_resumed_now'); }
    /** The kind of subscription preview. Value enum: "next_renewal".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Estimated charge for the subscription's next renewal. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimate
     */
    public function getRenewal(): SubscriptionRenewalEstimate { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** ID of the subscription the next renewal was estimated for.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
