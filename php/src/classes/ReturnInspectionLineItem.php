<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $acceptance_decided_at
 * @property-read ?ReturnActor $acceptance_decided_by
 * @property-read ?string $acceptance_decision_reason
 * @property-read ?string $acceptance_decision_reason_message
 * @property-read string $acceptance_status
 * @property-read string $available_disposition_quantity
 * @property-read string $condition
 * @property-read list<string> $finding_codes
 * @property-read ?string $internal_note
 * @property-read string $quantity
 * @property-read string $return_inspection_id
 * @property-read string $return_inspection_line_item_id
 * @property-read ?string $return_line_item_id
 * @property-read string $return_receipt_line_item_id
 * @property-read list<string> $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class ReturnInspectionLineItem extends Model {
    /** @param array{'acceptance_decided_at'?: string, 'acceptance_decided_by'?: mixed, 'acceptance_decision_reason'?: string, 'acceptance_decision_reason_message'?: string, 'acceptance_status': string, 'available_disposition_quantity': string, 'condition': string, 'finding_codes': list<string>, 'internal_note'?: string, 'quantity': string, 'return_inspection_id': string, 'return_inspection_line_item_id': string, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionLineItem')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getAcceptanceDecidedAt(): ?string { return $this->get('acceptance_decided_at'); }
    public function hasAcceptanceDecidedAt(): bool { return $this->has('acceptance_decided_at'); }
    /** Shape $ (Value): {@see ReturnActor}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getAcceptanceDecidedBy(): ?ReturnActor { return $this->get('acceptance_decided_by'); }
    public function hasAcceptanceDecidedBy(): bool { return $this->has('acceptance_decided_by'); }
    /** Shape $ (Value): string.  Value enum: "inspection_result", "return_policy", "manual_review", "other".
     * @return ?string
     */
    public function getAcceptanceDecisionReason(): ?string { return $this->get('acceptance_decision_reason'); }
    public function hasAcceptanceDecisionReason(): bool { return $this->has('acceptance_decision_reason'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getAcceptanceDecisionReasonMessage(): ?string { return $this->get('acceptance_decision_reason_message'); }
    public function hasAcceptanceDecisionReasonMessage(): bool { return $this->has('acceptance_decision_reason_message'); }
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required".
     * @return string
     */
    public function getAcceptanceStatus(): string { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getAvailableDispositionQuantity(): string { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     * @return string
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** Shape $ (Value): Array of string.  [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". Shape $[] (Value): string.  Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * @return list<string>
     */
    public function getFindingCodes(): array { return $this->get('finding_codes'); }
    public function hasFindingCodes(): bool { return $this->has('finding_codes'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInternalNote(): ?string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnInspectionId(): string { return $this->get('return_inspection_id'); }
    public function hasReturnInspectionId(): bool { return $this->has('return_inspection_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnInspectionLineItemId(): string { return $this->get('return_inspection_line_item_id'); }
    public function hasReturnInspectionLineItemId(): bool { return $this->has('return_inspection_line_item_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReturnLineItemId(): ?string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "decide". Shape $[] (Value): string.  Value enum: "decide".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
