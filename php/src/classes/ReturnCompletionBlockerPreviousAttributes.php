<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $code
 * @property-read string|null $message
 * @property-read mixed $return_id
 * @property-read string|null $return_line_item_id
 * @property-read string|null $return_receipt_id
 * @property-read string|null $return_resolution_id
 * Presence-aware response; omitted optional fields return null. */
final class ReturnCompletionBlockerPreviousAttributes extends Model {
    /** @param array{'code'?: mixed, 'message'?: mixed, 'return_id'?: mixed, 'return_line_item_id'?: mixed, 'return_receipt_id'?: mixed, 'return_resolution_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnCompletionBlockerPreviousAttributes')); }
    /** What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Value enum: "decision_pending", "handoff_pending", "receipt_pending", "inspection_pending", "inspection_review_required", "disposition_required", "resolution_not_selected", "resolution_pending", "resolution_requires_action", "resolution_failed", "merchandise_exception". anyOf[1] (Value): string. What is still owed before this Return can complete. Each blocker names its Return line, except resolution_pending for a correction and merchandise_exception for unidentified units. resolution_* codes also name return_resolution_id when a resolution exists; merchandise_exception also names return_receipt_id. An empty completion_blockers array means nothing is outstanding. Value enum: "decision_pending", "handoff_pending", "receipt_pending", "inspection_pending", "inspection_review_required", "disposition_required", "resolution_not_selected", "resolution_pending", "resolution_requires_action", "resolution_failed", "merchandise_exception". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCode(): string|null { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Explanation of what is still owed. anyOf[1] (Value): string. Explanation of what is still owed. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string or null. Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line the entry is about. anyOf[1] (Value): string. ID of the Return line the entry is about. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** ID of the receipt holding this blocker up. anyOf[1] (Value): string. ID of the receipt holding this blocker up. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReceiptId(): string|null { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the resolution holding this blocker up. anyOf[1] (Value): string. ID of the resolution holding this blocker up. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnResolutionId(): string|null { return $this->get('return_resolution_id'); }
    public function hasReturnResolutionId(): bool { return $this->has('return_resolution_id'); }
}
