<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read SubscriptionRenewalEstimate $renewal
 * @property-read string $subscription_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionPreviewResponseDataNextRenewal extends Model {
    /** @param array{'mode': string, 'renewal': mixed, 'subscription_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPreviewResponseDataNextRenewal')); }
    /** Value enum: "next_renewal".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimate
     */
    public function getRenewal(): SubscriptionRenewalEstimate { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** subscription_id
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
