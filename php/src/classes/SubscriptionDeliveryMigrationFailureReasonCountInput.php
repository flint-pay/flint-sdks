<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $count
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryMigrationFailureReasonCountInput extends Model {
    /** @param array{'count': string, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryMigrationFailureReasonCountInput')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When count is omitted; use hasCount() or valueOrDefault().
     */
    public function getCount(): string { return $this->get('count'); }
    public function hasCount(): bool { return $this->has('count'); }
    /** Shape $ (Value): string.  Value enum: "method_not_offered", "destination_not_served", "rate_unavailable", "method_unavailable", "no_longer_applicable", "not_movable".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}
