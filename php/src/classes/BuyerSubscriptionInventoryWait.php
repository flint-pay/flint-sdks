<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $started_at
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionInventoryWait extends Model {
    /** @param array{'started_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionInventoryWait')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getStartedAt(): string { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
