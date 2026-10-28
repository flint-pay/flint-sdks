<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?list<MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionAllRemainingFulfilledLineItemsItem> $line_items
 * @property-read string $selection_type
 * Presence-aware response; omitted optional fields return null. */
final class MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionAllRemainingFulfilled extends Model {
    /** @param array{'line_items'?: list<mixed>, 'selection_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionAllRemainingFulfilled')); }
    /** Shape $ (Value): Array of ({@see MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionAllRemainingFulfilledLineItemsItem} and {@see ReturnEligibilityLineItemRequest}). Shape $[] (Value): {@see MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionAllRemainingFulfilledLineItemsItem}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.
     * @return ?list<MeCreateReturnPreviewResponse200DataResolutionEligibilitySelectionAllRemainingFulfilledLineItemsItem>
     */
    public function getLineItems(): ?array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): string.  Value enum: "all_remaining_fulfilled".
     * @return string
     */
    public function getSelectionType(): string { return $this->get('selection_type'); }
    public function hasSelectionType(): bool { return $this->has('selection_type'); }
}
