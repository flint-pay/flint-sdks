<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $linked_resource
 * @property-read string $return_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionExecutionBlockerInput extends Model {
    /** @param array{'code': string, 'linked_resource'?: ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'return_line_item_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionExecutionBlockerInput')); }
    /** handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending", "refund_pending", "replacement_order_pending", "fulfillment_pending".
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When linked_resource is omitted; use hasLinkedResource() or valueOrDefault().
     */
    public function getLinkedResource(): mixed { return $this->get('linked_resource'); }
    public function hasLinkedResource(): bool { return $this->has('linked_resource'); }
    /** return_line_item_id
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
