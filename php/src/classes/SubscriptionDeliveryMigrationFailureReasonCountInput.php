<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $count
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationFailureReasonCountInput extends Model {
    /** @param array{'count': int, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationFailureReasonCountInput')); }
    /** Format: int64.
     * @return int
     * @throws SdkError When count is omitted; use hasCount() or valueOrDefault().
     */
    public function getCount(): int { return $this->get('count'); }
    public function hasCount(): bool { return $this->has('count'); }
    /** Value enum: "method_not_offered", "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
