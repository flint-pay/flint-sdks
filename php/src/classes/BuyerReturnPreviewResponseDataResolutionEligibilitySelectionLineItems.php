<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItemsLineItemsItem> $line_items
 * @property-read string $selection_type
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItems extends Model {
    /** @param array{'line_items': list<mixed>, 'selection_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItems')); }
    /** minItems: 1. [] (Value): {@see BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItemsLineItemsItem}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.
     * @return list<BuyerReturnPreviewResponseDataResolutionEligibilitySelectionLineItemsLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Value enum: "line_items".
     * @return string
     */
    public function getSelectionType(): string { return $this->get('selection_type'); }
    public function hasSelectionType(): bool { return $this->has('selection_type'); }
}
