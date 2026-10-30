<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnEligibilityLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $selection_type
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnEligibilitySelectionInput extends Model {
    /** @param array{'line_items'?: list<ReturnEligibilityLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'selection_type': string}|object|array{'line_items': list<ReturnEligibilityLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'selection_type': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnEligibilitySelectionInput')); }
    /**  [] (Value): {@see ReturnEligibilityLineItemRequestInput}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.
     * @return list<ReturnEligibilityLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Value enum: "all_remaining_fulfilled", "line_items".
     * @return string
     * @throws SdkError When selection_type is omitted; use hasSelectionType() or valueOrDefault().
     */
    public function getSelectionType(): string { return $this->get('selection_type'); }
    public function hasSelectionType(): bool { return $this->has('selection_type'); }
}
