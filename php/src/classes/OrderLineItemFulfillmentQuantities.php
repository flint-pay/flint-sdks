<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $assigned_quantity
 * @property-read ?string $bundle_component_id
 * @property-read int $canceled_quantity
 * @property-read int $failed_quantity
 * @property-read int $fulfilled_quantity
 * @property-read int $required_quantity
 * @property-read int $unassigned_quantity
 * Presence-aware response; omitted optional fields return null. */
final class OrderLineItemFulfillmentQuantities extends Model {
    /** @param array{'assigned_quantity': int, 'bundle_component_id'?: string, 'canceled_quantity': int, 'failed_quantity': int, 'fulfilled_quantity': int, 'required_quantity': int, 'unassigned_quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentQuantities')); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. Format: int64.
     * @return int
     */
    public function getAssignedQuantity(): int { return $this->get('assigned_quantity'); }
    public function hasAssignedQuantity(): bool { return $this->has('assigned_quantity'); }
    /** ID of the bundle component these quantities describe. Omitted for a single item.
     * @return ?string
     */
    public function getBundleComponentId(): ?string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. Format: int64.
     * @return int
     */
    public function getCanceledQuantity(): int { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. Format: int64.
     * @return int
     */
    public function getFailedQuantity(): int { return $this->get('failed_quantity'); }
    public function hasFailedQuantity(): bool { return $this->has('failed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. Format: int64.
     * @return int
     */
    public function getFulfilledQuantity(): int { return $this->get('fulfilled_quantity'); }
    public function hasFulfilledQuantity(): bool { return $this->has('fulfilled_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Total quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other five quantity fields. Format: int64.
     * @return int
     */
    public function getRequiredQuantity(): int { return $this->get('required_quantity'); }
    public function hasRequiredQuantity(): bool { return $this->has('required_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Required quantity owned by no fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Format: int64.
     * @return int
     */
    public function getUnassignedQuantity(): int { return $this->get('unassigned_quantity'); }
    public function hasUnassignedQuantity(): bool { return $this->has('unassigned_quantity'); }
}
