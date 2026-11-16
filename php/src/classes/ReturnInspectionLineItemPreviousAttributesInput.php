<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $acceptance_decided_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $acceptance_decided_by
 * @property-read string|null $acceptance_decision_reason
 * @property-read string|null $acceptance_decision_reason_message
 * @property-read string|null $acceptance_status
 * @property-read int|null $available_disposition_quantity
 * @property-read string|null $condition
 * @property-read list<string>|null $finding_codes
 * @property-read string|null $internal_note
 * @property-read int|null $quantity
 * @property-read string|null|null $return_id
 * @property-read string|null $return_inspection_id
 * @property-read string|null $return_inspection_line_item_id
 * @property-read string|null $return_line_item_id
 * @property-read string|null $return_receipt_id
 * @property-read string|null $return_receipt_line_item_id
 * @property-read list<string>|null $supported_actions
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionLineItemPreviousAttributesInput extends Model {
    /** @param array{'acceptance_decided_at'?: string|\DateTimeInterface|null, 'acceptance_decided_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'acceptance_decision_reason'?: string|null, 'acceptance_decision_reason_message'?: string|null, 'acceptance_status'?: string|null, 'available_disposition_quantity'?: int|null, 'condition'?: string|null, 'finding_codes'?: list<string>|null, 'internal_note'?: string|null, 'quantity'?: int|null, 'return_id'?: string|null|null, 'return_inspection_id'?: string|null, 'return_inspection_line_item_id'?: string|null, 'return_line_item_id'?: string|null, 'return_receipt_id'?: string|null, 'return_receipt_line_item_id'?: string|null, 'supported_actions'?: list<string>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionLineItemPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When acceptance_decided_at is omitted; use hasAcceptanceDecidedAt() or valueOrDefault().
     */
    public function getAcceptanceDecidedAt(): mixed { return $this->get('acceptance_decided_at'); }
    public function hasAcceptanceDecidedAt(): bool { return $this->has('acceptance_decided_at'); }
    /** Who made the acceptance decision. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When acceptance_decided_by is omitted; use hasAcceptanceDecidedBy() or valueOrDefault().
     */
    public function getAcceptanceDecidedBy(): mixed { return $this->get('acceptance_decided_by'); }
    public function hasAcceptanceDecidedBy(): bool { return $this->has('acceptance_decided_by'); }
    /** Why the units were accepted or rejected after review. Value enum: "inspection_result", "return_policy", "manual_review", "other". anyOf[1] (Value): string. Why the units were accepted or rejected after review. Value enum: "inspection_result", "return_policy", "manual_review", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When acceptance_decision_reason is omitted; use hasAcceptanceDecisionReason() or valueOrDefault().
     */
    public function getAcceptanceDecisionReason(): mixed { return $this->get('acceptance_decision_reason'); }
    public function hasAcceptanceDecisionReason(): bool { return $this->has('acceptance_decision_reason'); }
    /** Detail about `acceptance_decision_reason`. anyOf[1] (Value): string. Detail about `acceptance_decision_reason`. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When acceptance_decision_reason_message is omitted; use hasAcceptanceDecisionReasonMessage() or valueOrDefault().
     */
    public function getAcceptanceDecisionReasonMessage(): mixed { return $this->get('acceptance_decision_reason_message'); }
    public function hasAcceptanceDecisionReasonMessage(): bool { return $this->has('acceptance_decision_reason_message'); }
    /** Whether the inspected units were accepted, rejected, or need a merchant's decision. Value enum: "accepted", "rejected", "review_required". anyOf[1] (Value): string. Whether the inspected units were accepted, rejected, or need a merchant's decision. Value enum: "accepted", "rejected", "review_required". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When acceptance_status is omitted; use hasAcceptanceStatus() or valueOrDefault().
     */
    public function getAcceptanceStatus(): mixed { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When available_disposition_quantity is omitted; use hasAvailableDispositionQuantity() or valueOrDefault().
     */
    public function getAvailableDispositionQuantity(): mixed { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined". anyOf[1] (Value): string. `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): mixed { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". anyOf[1] (Value): Array of string. What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". anyOf[1][] (Value): string.  Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When finding_codes is omitted; use hasFindingCodes() or valueOrDefault().
     */
    public function getFindingCodes(): mixed { return $this->get('finding_codes'); }
    public function hasFindingCodes(): bool { return $this->has('finding_codes'); }
    /** Note for your own team about this line. anyOf[1] (Value): string. Note for your own team about this line. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): mixed { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string or null. Return that owns return_line_item_id. `null` when return_line_item_id is null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the inspection the line belongs to. anyOf[1] (Value): string. ID of the inspection the line belongs to. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): mixed { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** Unique identifier for this return inspection line item, prefixed `retinli_`. anyOf[1] (Value): string. Unique identifier for this return inspection line item, prefixed `retinli_`. Example: "retinli_01KEZF7C0039VC3XNJ3ZTX8PV4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_inspection_line_item_id is omitted; use hasReturnInspectionLineItemId() or valueOrDefault().
     */
    public function getReturnInspectionLineItemId(): mixed { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** ID of the Return line inspected. anyOf[1] (Value): string. ID of the Return line inspected. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): mixed { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Receipt that owns return_receipt_line_item_id. anyOf[1] (Value): string. Receipt that owns return_receipt_line_item_id. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): mixed { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** ID of the receipt line inspected. anyOf[1] (Value): string. ID of the receipt line inspected. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): mixed { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. [] enum: "decide". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `decide` is listed while the inspection is current and the line's `acceptance_status` is `review_required`. Otherwise empty. [] enum: "decide". anyOf[1][] (Value): string.  Value enum: "decide". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
