<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read mixed $linked_resource
 * @property-read mixed $return_id
 * @property-read string|null $return_line_item_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnResolutionExecutionBlockerPreviousAttributes extends Model {
    /** @param array{'code'?: mixed, 'linked_resource'?: mixed, 'return_id'?: mixed, 'return_line_item_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionExecutionBlockerPreviousAttributes')); }
    /** handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending", "refund_pending", "replacement_order_pending", "fulfillment_pending". anyOf[1] (Value): string. handoff_pending: The buyer has not handed off the required merchandise. receipt_pending: Required merchandise has not been received. inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant must release the resolution. buyer_payment_pending: The buyer's balance has not been collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The replacement Order has not been created. fulfillment_pending: The replacement Order, in linked_resource, has units not yet fulfilled. Value enum: "handoff_pending", "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending", "refund_pending", "replacement_order_pending", "fulfillment_pending". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** The resource the blocker waits on, such as a Refund or the replacement Order. anyOf[1] (Value): {@see ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getLinkedResource(): mixed { return $this->get('linked_resource'); }
    public function hasLinkedResource(): bool { return $this->has('linked_resource'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string or null. Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line the blocker gates. Absent when it applies to the whole resolution. anyOf[1] (Value): string. ID of the Return line the blocker gates. Absent when it applies to the whole resolution. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
