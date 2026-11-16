<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $acceptance_decided_at
 * @property-read ReturnActorPreviousAttributes|null $acceptance_decided_by
 * @property-read string|null $acceptance_decision_reason
 * @property-read string|null $acceptance_decision_reason_message
 * @property-read string|null $acceptance_status
 * @property-read int|null $available_disposition_quantity
 * @property-read string|null $condition
 * @property-read list<string>|null $finding_codes
 * @property-read string|null $internal_note
 * @property-read int|null $quantity
 * @property-read string|null $return_id
 * @property-read string|null $return_inspection_id
 * @property-read string|null $return_inspection_line_item_id
 * @property-read string|null $return_line_item_id
 * @property-read string|null $return_receipt_id
 * @property-read string|null $return_receipt_line_item_id
 * @property-read list<string>|null $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class ReturnInspectionLineItemPreviousAttributes extends Model {
    /** @param array{'acceptance_decided_at'?: mixed, 'acceptance_decided_by'?: mixed, 'acceptance_decision_reason'?: mixed, 'acceptance_decision_reason_message'?: mixed, 'acceptance_status'?: mixed, 'available_disposition_quantity'?: mixed, 'condition'?: mixed, 'finding_codes'?: mixed, 'internal_note'?: mixed, 'quantity'?: mixed, 'return_id'?: mixed, 'return_inspection_id'?: mixed, 'return_inspection_line_item_id'?: mixed, 'return_line_item_id'?: mixed, 'return_receipt_id'?: mixed, 'return_receipt_line_item_id'?: mixed, 'supported_actions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionLineItemPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAcceptanceDecidedAt(): string|null { return $this->get('acceptance_decided_at'); }
    public function hasAcceptanceDecidedAt(): bool { return $this->has('acceptance_decided_at'); }
    /** Who made the acceptance decision. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributes|null
     */
    public function getAcceptanceDecidedBy(): ReturnActorPreviousAttributes|null { return $this->get('acceptance_decided_by'); }
    public function hasAcceptanceDecidedBy(): bool { return $this->has('acceptance_decided_by'); }
    /** Why the units were accepted or rejected after review. Value enum: "inspection_result", "return_policy", "manual_review", "other". anyOf[1] (Value): string. Why the units were accepted or rejected after review. Value enum: "inspection_result", "return_policy", "manual_review", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAcceptanceDecisionReason(): string|null { return $this->get('acceptance_decision_reason'); }
    public function hasAcceptanceDecisionReason(): bool { return $this->has('acceptance_decision_reason'); }
    /** Detail about `acceptance_decision_reason`. anyOf[1] (Value): string. Detail about `acceptance_decision_reason`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAcceptanceDecisionReasonMessage(): string|null { return $this->get('acceptance_decision_reason_message'); }
    public function hasAcceptanceDecisionReasonMessage(): bool { return $this->has('acceptance_decision_reason_message'); }
    /** Whether the inspected units were accepted, rejected, or need a merchant's decision. Value enum: "accepted", "rejected", "review_required". anyOf[1] (Value): string. Whether the inspected units were accepted, rejected, or need a merchant's decision. Value enum: "accepted", "rejected", "review_required". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAcceptanceStatus(): string|null { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAvailableDispositionQuantity(): int|null { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined". anyOf[1] (Value): string. `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCondition(): string|null { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". anyOf[1] (Value): Array of string. What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". anyOf[1][] (Value): string.  Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getFindingCodes(): array|null { return $this->get('finding_codes'); }
    public function hasFindingCodes(): bool { return $this->has('finding_codes'); }
    /** Note for your own team about this line. anyOf[1] (Value): string. Note for your own team about this line. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInternalNote(): string|null { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantity(): int|null { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the inspection the line belongs to. anyOf[1] (Value): string. ID of the inspection the line belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnInspectionId(): string|null { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** Unique identifier for this return inspection line item, prefixed `retinli_`. anyOf[1] (Value): string. Unique identifier for this return inspection line item, prefixed `retinli_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnInspectionLineItemId(): string|null { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** ID of the Return line inspected. anyOf[1] (Value): string. ID of the Return line inspected. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Receipt that owns return_receipt_line_item_id. anyOf[1] (Value): string. Receipt that owns return_receipt_line_item_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReceiptId(): string|null { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the receipt line inspected. anyOf[1] (Value): string. ID of the receipt line inspected. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReceiptLineItemId(): string|null { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. [] enum: "decide". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. [] enum: "decide". anyOf[1][] (Value): string.  Value enum: "decide". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
