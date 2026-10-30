<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read SubscriptionCounts $subscription_counts
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryMethodCounts extends Model {
    /** @param array{'delivery_method_id': string, 'subscription_counts': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMethodCounts')); }
    /** delivery_method_id
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Counts of subscriptions by status: active, past due, and paused.
     * @return SubscriptionCounts
     */
    public function getSubscriptionCounts(): SubscriptionCounts { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
}
