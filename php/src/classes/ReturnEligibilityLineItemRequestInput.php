<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * @property-read string $order_line_item_id
 * @property-read int $requested_quantity
 * @property-read string $requested_resolution_type
 * @property-read string $return_reason_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnEligibilityLineItemRequestInput extends Model {
    /** @param array{'fulfillment_id'?: string, 'order_line_item_id': string, 'requested_quantity': int, 'requested_resolution_type'?: string, 'return_reason_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnEligibilityLineItemRequestInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return string
     * @throws SdkError When requested_resolution_type is omitted; use hasRequestedResolutionType() or valueOrDefault().
     */
    public function getRequestedResolutionType(): string { return $this->get('requested_resolution_type'); }
    public function hasRequestedResolutionType(): bool { return $this->has('requested_resolution_type'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When return_reason_id is omitted; use hasReturnReasonId() or valueOrDefault().
     */
    public function getReturnReasonId(): string { return $this->get('return_reason_id'); }
    public function hasReturnReasonId(): bool { return $this->has('return_reason_id'); }
}
