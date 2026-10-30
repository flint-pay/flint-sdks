<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItemsLineItemsItem> $line_items
 * @property-read string $selection_type
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItems extends Model {
    /** @param array{'line_items': list<mixed>, 'selection_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItems')); }
    /** minItems: 1. [] (Value): {@see BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItemsLineItemsItem}. An order line and quantity to check. return_reason_id is optional here; when you send it, Flint checks that the reason is active and applies to the line.
     * @return list<BuyerReturnPreviewResponseDataEligibilityEligibilitySelectionLineItemsLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Value enum: "line_items".
     * @return string
     */
    public function getSelectionType(): string { return $this->get('selection_type'); }
    public function hasSelectionType(): bool { return $this->has('selection_type'); }
}
