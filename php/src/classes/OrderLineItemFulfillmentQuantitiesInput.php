<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $assigned_quantity
 * @property-read string $bundle_component_id
 * @property-read string $canceled_quantity
 * @property-read string $failed_quantity
 * @property-read string $fulfilled_quantity
 * @property-read string $required_quantity
 * @property-read string $unassigned_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderLineItemFulfillmentQuantitiesInput extends Model {
    /** @param array{'assigned_quantity': string, 'bundle_component_id'?: string, 'canceled_quantity': string, 'failed_quantity': string, 'fulfilled_quantity': string, 'required_quantity': string, 'unassigned_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderLineItemFulfillmentQuantitiesInput')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Quantity owned by a non-terminal fulfillment, including a fulfillment on hold. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When assigned_quantity is omitted; use hasAssignedQuantity() or valueOrDefault().
     */
    public function getAssignedQuantity(): string { return $this->get('assigned_quantity'); }
    public function hasAssignedQuantity(): bool { return $this->has('assigned_quantity'); }
    /** Shape $ (Value): string. ID of the bundle component these quantities describe. Omitted for a single item.
     * @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Quantity owned by canceled or no_show fulfillments. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): string { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Quantity owned by failed fulfillments that kept their quantity. Failed fulfillments that released quantity own nothing; their quantity becomes unassigned again. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When failed_quantity is omitted; use hasFailedQuantity() or valueOrDefault().
     */
    public function getFailedQuantity(): string { return $this->get('failed_quantity'); }
    public function hasFailedQuantity(): bool { return $this->has('failed_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Quantity owned by completed fulfillments. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When fulfilled_quantity is omitted; use hasFulfilledQuantity() or valueOrDefault().
     */
    public function getFulfilledQuantity(): string { return $this->get('fulfilled_quantity'); }
    public function hasFulfilledQuantity(): bool { return $this->has('fulfilled_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Total quantity requiring fulfillment, in line units for a single item or component units for a bundle component. Equals the sum of the other five quantity fields. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When required_quantity is omitted; use hasRequiredQuantity() or valueOrDefault().
     */
    public function getRequiredQuantity(): string { return $this->get('required_quantity'); }
    public function hasRequiredQuantity(): bool { return $this->has('required_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Required quantity owned by no fulfillment, in any resolution mode. Includes quantity released by a failed fulfillment. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When unassigned_quantity is omitted; use hasUnassignedQuantity() or valueOrDefault().
     */
    public function getUnassignedQuantity(): string { return $this->get('unassigned_quantity'); }
    public function hasUnassignedQuantity(): bool { return $this->has('unassigned_quantity'); }
}
