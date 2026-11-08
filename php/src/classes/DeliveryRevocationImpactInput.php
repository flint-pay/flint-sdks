<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $active_quote_count
 * @property-read int $current_selection_count
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRevocationImpactInput extends Model {
    /** @param array{'active_quote_count': int, 'current_selection_count': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationImpactInput')); }
    /** Number of active delivery quotes that depended on the target at revocation creation. This recorded count does not change afterward. Format: int64.
     * @return int
     * @throws SdkError When active_quote_count is omitted; use hasActiveQuoteCount() or valueOrDefault().
     */
    public function getActiveQuoteCount(): int { return $this->get('active_quote_count'); }
    public function hasActiveQuoteCount(): bool { return $this->has('active_quote_count'); }
    /** Number of provisional delivery selections that depended on the target at revocation creation. Payment-owned and committed selections are excluded; this recorded count does not change afterward. Format: int64.
     * @return int
     * @throws SdkError When current_selection_count is omitted; use hasCurrentSelectionCount() or valueOrDefault().
     */
    public function getCurrentSelectionCount(): int { return $this->get('current_selection_count'); }
    public function hasCurrentSelectionCount(): bool { return $this->has('current_selection_count'); }
}
