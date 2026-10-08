<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read SubscriptionCountsInput|array<array-key, mixed>|\stdClass $subscription_counts
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMethodCountsInput extends Model {
    /** @param array{'delivery_method_id': string, 'subscription_counts': SubscriptionCountsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMethodCountsInput')); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return SubscriptionCountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When subscription_counts is omitted; use hasSubscriptionCounts() or valueOrDefault().
     */
    public function getSubscriptionCounts(): mixed { return $this->get('subscription_counts'); }
    public function hasSubscriptionCounts(): bool { return $this->has('subscription_counts'); }
}
