<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active_quote_count
 * @property-read int $current_selection_count
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRevocationImpact extends Model {
    /** @param array{'active_quote_count': int, 'current_selection_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationImpact')); }
    /** Format: int64.
     * @return int
     */
    public function getActiveQuoteCount(): int { return $this->get('active_quote_count'); }
    public function hasActiveQuoteCount(): bool { return $this->has('active_quote_count'); }
    /** Format: int64.
     * @return int
     */
    public function getCurrentSelectionCount(): int { return $this->get('current_selection_count'); }
    public function hasCurrentSelectionCount(): bool { return $this->has('current_selection_count'); }
}
