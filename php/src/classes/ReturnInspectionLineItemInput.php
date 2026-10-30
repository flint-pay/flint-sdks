<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $acceptance_decided_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $acceptance_decided_by
 * @property-read string $acceptance_decision_reason
 * @property-read string $acceptance_decision_reason_message
 * @property-read string $acceptance_status
 * @property-read int $available_disposition_quantity
 * @property-read string $condition
 * @property-read list<string> $finding_codes
 * @property-read string $internal_note
 * @property-read int $quantity
 * @property-read string $return_inspection_id
 * @property-read string $return_inspection_line_item_id
 * @property-read string $return_line_item_id
 * @property-read string $return_receipt_line_item_id
 * @property-read list<string> $supported_actions
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionLineItemInput extends Model {
    /** @param array{'acceptance_decided_at'?: string|\DateTimeInterface, 'acceptance_decided_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, 'acceptance_decision_reason'?: string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'available_disposition_quantity': int, 'condition': string, 'finding_codes': list<string>, 'internal_note'?: string, 'quantity': int, 'return_inspection_id': string, 'return_inspection_line_item_id': string, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionLineItemInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When acceptance_decided_at is omitted; use hasAcceptanceDecidedAt() or valueOrDefault().
     */
    public function getAcceptanceDecidedAt(): string|\DateTimeInterface { return $this->get('acceptance_decided_at'); }
    public function hasAcceptanceDecidedAt(): bool { return $this->has('acceptance_decided_at'); }
    /** Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When acceptance_decided_by is omitted; use hasAcceptanceDecidedBy() or valueOrDefault().
     */
    public function getAcceptanceDecidedBy(): mixed { return $this->get('acceptance_decided_by'); }
    public function hasAcceptanceDecidedBy(): bool { return $this->has('acceptance_decided_by'); }
    /** Value enum: "inspection_result", "return_policy", "manual_review", "other".
     * @return string
     * @throws SdkError When acceptance_decision_reason is omitted; use hasAcceptanceDecisionReason() or valueOrDefault().
     */
    public function getAcceptanceDecisionReason(): string { return $this->get('acceptance_decision_reason'); }
    public function hasAcceptanceDecisionReason(): bool { return $this->has('acceptance_decision_reason'); }
    /** acceptance_decision_reason_message
     * @return string
     * @throws SdkError When acceptance_decision_reason_message is omitted; use hasAcceptanceDecisionReasonMessage() or valueOrDefault().
     */
    public function getAcceptanceDecisionReasonMessage(): string { return $this->get('acceptance_decision_reason_message'); }
    public function hasAcceptanceDecisionReasonMessage(): bool { return $this->has('acceptance_decision_reason_message'); }
    /** Value enum: "accepted", "rejected", "review_required".
     * @return string
     * @throws SdkError When acceptance_status is omitted; use hasAcceptanceStatus() or valueOrDefault().
     */
    public function getAcceptanceStatus(): string { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When available_disposition_quantity is omitted; use hasAvailableDispositionQuantity() or valueOrDefault().
     */
    public function getAvailableDispositionQuantity(): int { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     * @return string
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". [] (Value): string.  Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * @return list<string>
     * @throws SdkError When finding_codes is omitted; use hasFindingCodes() or valueOrDefault().
     */
    public function getFindingCodes(): array { return $this->get('finding_codes'); }
    public function hasFindingCodes(): bool { return $this->has('finding_codes'); }
    /** internal_note
     * @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** return_inspection_id
     * @return string
     * @throws SdkError When return_inspection_id is omitted; use hasReturnInspectionId() or valueOrDefault().
     */
    public function getReturnInspectionId(): string { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** return_inspection_line_item_id
     * @return string
     * @throws SdkError When return_inspection_line_item_id is omitted; use hasReturnInspectionLineItemId() or valueOrDefault().
     */
    public function getReturnInspectionLineItemId(): string { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** return_line_item_id
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** return_receipt_line_item_id
     * @return string
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** [] enum: "decide". [] (Value): string.  Value enum: "decide".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
