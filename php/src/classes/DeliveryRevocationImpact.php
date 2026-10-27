<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $active_quote_count
 * @property-read string $current_selection_count
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRevocationImpact extends Model {
    /** @param array{'active_quote_count': string, 'current_selection_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationImpact')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getActiveQuoteCount(): string { return $this->get('active_quote_count'); }
    public function hasActiveQuoteCount(): bool { return $this->has('active_quote_count'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getCurrentSelectionCount(): string { return $this->get('current_selection_count'); }
    public function hasCurrentSelectionCount(): bool { return $this->has('current_selection_count'); }
}
