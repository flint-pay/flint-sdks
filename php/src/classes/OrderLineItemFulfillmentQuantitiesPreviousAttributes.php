<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $assigned_quantity
 * @property-read string|null $bundle_component_id
 * @property-read int|null $canceled_quantity
 * @property-read int|null $failed_quantity
 * @property-read int|null $fulfilled_quantity
 * @property-read int|null $removed_quantity
 * @property-read int|null $required_quantity
 * @property-read int|null $unassigned_quantity
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentQuantitiesPreviousAttributes extends Model {
    /** @param array{'assigned_quantity'?: mixed, 'bundle_component_id'?: mixed, 'canceled_quantity'?: mixed, 'failed_quantity'?: mixed, 'fulfilled_quantity'?: mixed, 'removed_quantity'?: mixed, 'required_quantity'?: mixed, 'unassigned_quantity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentQuantitiesPreviousAttributes')); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAssignedQuantity(): int|null { return $this->get('assigned_quantity'); }
    public function hasAssignedQuantity(): bool { return $this->has('assigned_quantity'); }
    /** ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. anyOf[1] (Value): string. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCanceledQuantity(): int|null { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getFailedQuantity(): int|null { return $this->get('failed_quantity'); }
    public function hasFailedQuantity(): bool { return $this->has('failed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getFulfilledQuantity(): int|null { return $this->get('fulfilled_quantity'); }
    public function hasFulfilledQuantity(): bool { return $this->has('fulfilled_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRemovedQuantity(): int|null { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRequiredQuantity(): int|null { return $this->get('required_quantity'); }
    public function hasRequiredQuantity(): bool { return $this->has('required_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getUnassignedQuantity(): int|null { return $this->get('unassigned_quantity'); }
    public function hasUnassignedQuantity(): bool { return $this->has('unassigned_quantity'); }
}
