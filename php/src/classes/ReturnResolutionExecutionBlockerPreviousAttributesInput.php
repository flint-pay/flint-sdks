<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $linked_resource
 * @property-read string|null $return_id
 * @property-read string|null $return_line_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnResolutionExecutionBlockerPreviousAttributesInput extends Model {
    /** @param array{'code'?: string|null, 'linked_resource'?: ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'return_id'?: string|null, 'return_line_item_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionExecutionBlockerPreviousAttributesInput')); }
    /** handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending", "refund_pending", "replacement_order_pending", "fulfillment_pending". anyOf[1] (Value): string. handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending", "refund_pending", "replacement_order_pending", "fulfillment_pending". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): mixed { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** The resource the blocker waits on, such as a Refund or the replacement Order. anyOf[1] (Value): {@see ResourceReferencePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ResourceReferencePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When linked_resource is omitted; use hasLinkedResource() or valueOrDefault().
     */
    public function getLinkedResource(): mixed { return $this->get('linked_resource'); }
    public function hasLinkedResource(): bool { return $this->has('linked_resource'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line the blocker gates. Absent when it applies to the whole resolution. anyOf[1] (Value): string. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): mixed { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
