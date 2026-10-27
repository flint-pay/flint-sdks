<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $earliest_available_at
 * @property-read ?string $latest_reconciled_at
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class MoneyMovementHistoryMeta extends Model {
    /** @param array{'earliest_available_at'?: string, 'latest_reconciled_at'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementHistoryMeta')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getEarliestAvailableAt(): ?string { return $this->get('earliest_available_at'); }
    public function hasEarliestAvailableAt(): bool { return $this->has('earliest_available_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getLatestReconciledAt(): ?string { return $this->get('latest_reconciled_at'); }
    public function hasLatestReconciledAt(): bool { return $this->has('latest_reconciled_at'); }
    /** Shape $ (Value): string.  Value enum: "backfilling", "partial", "unavailable".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
