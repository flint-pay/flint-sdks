<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read string $mode
 * @property-read SubscriptionCounts $no_longer_eligible_counts
 * @property-read SubscriptionCounts $subscription_counts
 * Presence-aware response; omitted fields throw when accessed. */
final class MeCreateSubscriptionPreviewResponse200DataDeliveryMethodUpdate extends Model {
    /** @param array{'delivery_method_id': string, 'mode': string, 'no_longer_eligible_counts': mixed, 'subscription_counts': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateSubscriptionPreviewResponse200DataDeliveryMethodUpdate')); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return SubscriptionCounts
     * @throws SdkError When no_longer_eligible_counts is omitted; use hasNoLongerEligibleCounts() or valueOrDefault().
     */
    public function getNoLongerEligibleCounts(): SubscriptionCounts { return $this->get('no_longer_eligible_counts'); }
    public function hasNoLongerEligibleCounts(): bool { return $this->has('no_longer_eligible_counts'); }
    /** @return SubscriptionCounts
     * @throws SdkError When subscription_counts is omitted; use hasSubscriptionCounts() or valueOrDefault().
     */
    public function getSubscriptionCounts(): SubscriptionCounts { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
}
