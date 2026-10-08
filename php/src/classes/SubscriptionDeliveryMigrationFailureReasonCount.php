<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $count
 * @property-read string $reason
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationFailureReasonCount extends Model {
    /** @param array{'count': string, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationFailureReasonCount')); }
    /** @return string
     * @throws SdkError When count is omitted; use hasCount() or valueOrDefault().
     */
    public function getCount(): string { return $this->get('count'); }
    public function hasCount(): bool { return $this->has('count'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
