<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $assigned_quantity
 * @property-read string|null|null $bundle_component_id
 * @property-read int|null $canceled_quantity
 * @property-read int|null $failed_quantity
 * @property-read int|null $fulfilled_quantity
 * @property-read int|null $removed_quantity
 * @property-read int|null $required_quantity
 * @property-read int|null $unassigned_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentQuantitiesPreviousAttributesInput extends Model {
    /** @param array{'assigned_quantity'?: int|null, 'bundle_component_id'?: string|null|null, 'canceled_quantity'?: int|null, 'failed_quantity'?: int|null, 'fulfilled_quantity'?: int|null, 'removed_quantity'?: int|null, 'required_quantity'?: int|null, 'unassigned_quantity'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentQuantitiesPreviousAttributesInput')); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When assigned_quantity is omitted; use hasAssignedQuantity() or valueOrDefault().
     */
    public function getAssignedQuantity(): mixed { return $this->get('assigned_quantity'); }
    public function hasAssignedQuantity(): bool { return $this->has('assigned_quantity'); }
    /** ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. anyOf[1] (Value): string or null. ID of the bundle component these quantities describe. `null` when the line isn't a bundle component. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): mixed { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): mixed { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When failed_quantity is omitted; use hasFailedQuantity() or valueOrDefault().
     */
    public function getFailedQuantity(): mixed { return $this->get('failed_quantity'); }
    public function hasFailedQuantity(): bool { return $this->has('failed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When fulfilled_quantity is omitted; use hasFulfilledQuantity() or valueOrDefault().
     */
    public function getFulfilledQuantity(): mixed { return $this->get('fulfilled_quantity'); }
    public function hasFulfilledQuantity(): bool { return $this->has('fulfilled_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Quantity removed by paid-order edits, in line units for a single item or component units for a bundle component. Removed units cannot be assigned to a fulfillment. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When removed_quantity is omitted; use hasRemovedQuantity() or valueOrDefault().
     */
    public function getRemovedQuantity(): mixed { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Original quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other six quantity fields. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When required_quantity is omitted; use hasRequiredQuantity() or valueOrDefault().
     */
    public function getRequiredQuantity(): mixed { return $this->get('required_quantity'); }
    public function hasRequiredQuantity(): bool { return $this->has('required_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Required quantity still available for assignment to a fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Units reserved by pending_order_edit_id's edit can't be assigned until that edit ends. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When unassigned_quantity is omitted; use hasUnassignedQuantity() or valueOrDefault().
     */
    public function getUnassignedQuantity(): mixed { return $this->get('unassigned_quantity'); }
    public function hasUnassignedQuantity(): bool { return $this->has('unassigned_quantity'); }
}
