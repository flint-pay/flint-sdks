<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem> $line_items
 * @property-read string $selection_type
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItems extends Model {
    /** @param array{'line_items': list<mixed>, 'selection_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItems')); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem} and {@see ReturnEligibilityLineItemRequest}). minItems: 1. Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.
     * @return list<MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionLineItemsLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.  Value enum: "line_items".
     * @return string
     */
    public function getSelectionType(): string { return $this->get('selection_type'); }
    public function hasSelectionType(): bool { return $this->has('selection_type'); }
}
