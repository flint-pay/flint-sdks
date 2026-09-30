<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $active_quote_count
 * @property-read string $current_selection_count
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRevocationImpactInput extends Model {
    /** @param array{'active_quote_count': string, 'current_selection_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationImpactInput')); }
    /** @return string
     * @throws SdkError When active_quote_count is omitted; use hasActiveQuoteCount() or valueOrDefault().
     */
    public function getActiveQuoteCount(): string { return $this->get('active_quote_count'); }
    public function hasActiveQuoteCount(): bool { return $this->has('active_quote_count'); }
    /** @return string
     * @throws SdkError When current_selection_count is omitted; use hasCurrentSelectionCount() or valueOrDefault().
     */
    public function getCurrentSelectionCount(): string { return $this->get('current_selection_count'); }
    public function hasCurrentSelectionCount(): bool { return $this->has('current_selection_count'); }
}
