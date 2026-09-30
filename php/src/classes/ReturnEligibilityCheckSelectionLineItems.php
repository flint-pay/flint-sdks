<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnLineItemRequest> $line_items
 * @property-read string $selection_type
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnEligibilityCheckSelectionLineItems extends Model {
    /** @param array{'line_items': list<mixed>, 'selection_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnEligibilityCheckSelectionLineItems')); }
    /** @return list<ReturnLineItemRequest>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return string
     * @throws SdkError When selection_type is omitted; use hasSelectionType() or valueOrDefault().
     */
    public function getSelectionType(): string { return $this->get('selection_type'); }
    public function hasSelectionType(): bool { return $this->has('selection_type'); }
}
