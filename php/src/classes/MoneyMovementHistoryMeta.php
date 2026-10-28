<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $latest_reconciled_at
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class MoneyMovementHistoryMeta extends Model {
    /** @param array{'latest_reconciled_at'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MoneyMovementHistoryMeta')); }
    /** Shape $ (Value): string. When Flint last finished reconciling this list's history with your processor. Absent until a reconciliation finishes. Format: date-time.
     * @return ?string
     */
    public function getLatestReconciledAt(): ?string { return $this->get('latest_reconciled_at'); }
    public function hasLatestReconciledAt(): bool { return $this->has('latest_reconciled_at'); }
    /** Shape $ (Value): string. Why the history may be incomplete: backfilling while Flint is still importing older history from your processor, partial when Flint has records from your processor but hasn't imported its full history, and unavailable when Flint can't say, such as before any import or after one fails. The list still returns every record Flint has. Value enum: "backfilling", "partial", "unavailable".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
