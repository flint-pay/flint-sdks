<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $mode
 * @property-read SubscriptionPromotion $promotion
 * @property-read SubscriptionRenewalEstimate $renewal
 * @property-read string $subscription_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewResponseDataPromotionApply extends Model {
    /** @param array{'mode': string, 'promotion': mixed, 'renewal': mixed, 'subscription_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewResponseDataPromotionApply')); }
    /** The kind of subscription pricing estimate. Value enum: "promotion_apply".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** The promotion as it would attach to this subscription. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.
     * @return SubscriptionPromotion
     */
    public function getPromotion(): SubscriptionPromotion { return $this->get('promotion'); }
    public function hasPromotion(): bool { return $this->has('promotion'); }
    /** Estimated renewal for the promotion's first_cycle. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimate
     */
    public function getRenewal(): SubscriptionRenewalEstimate { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** ID of the subscription being previewed. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
