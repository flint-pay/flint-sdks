<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read SubscriptionCounts $subscription_counts
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionDeliveryMethodCounts extends Model {
    /** @param array{'delivery_method_id': string, 'subscription_counts': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMethodCounts')); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return SubscriptionCounts
     * @throws SdkError When subscription_counts is omitted; use hasSubscriptionCounts() or valueOrDefault().
     */
    public function getSubscriptionCounts(): SubscriptionCounts { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
}
