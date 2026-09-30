<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $selection_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnEligibilitySelectionInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnEligibilitySelectionInput')); }
    /** @return list<ReturnLineItemRequestInput|array<array-key, mixed>|\stdClass>
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
