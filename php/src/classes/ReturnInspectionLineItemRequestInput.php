<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $acceptance_status
 * @property-read string $condition
 * @property-read list<string> $finding_codes
 * @property-read string $internal_note
 * @property-read string $quantity
 * @property-read string $return_line_item_id
 * @property-read string $return_receipt_line_item_id
 * @property-read string $verification_reason
 * @property-read string $verification_reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnInspectionLineItemRequestInput extends Model {
    /** @param array{'acceptance_status': string, 'condition': string, 'finding_codes'?: list<string>, 'internal_note'?: string, 'quantity': string, 'return_line_item_id'?: string, 'return_receipt_line_item_id': string, 'verification_reason'?: string, 'verification_reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnInspectionLineItemRequestInput')); }
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required".
     * @return string
     * @throws SdkError When acceptance_status is omitted; use hasAcceptanceStatus() or valueOrDefault().
     */
    public function getAcceptanceStatus(): string { return $this->get('acceptance_status'); }
    public function hasAcceptanceStatus(): bool { return $this->has('acceptance_status'); }
    /** Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     * @return string
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** Shape $ (Value): Array of string.  [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other". Shape $[] (Value): string.  Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * @return list<string>
     * @throws SdkError When finding_codes is omitted; use hasFindingCodes() or valueOrDefault().
     */
    public function getFindingCodes(): array { return $this->get('finding_codes'); }
    public function hasFindingCodes(): bool { return $this->has('finding_codes'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When internal_note is omitted; use hasInternalNote() or valueOrDefault().
     */
    public function getInternalNote(): string { return $this->get('internal_note'); }
    public function hasInternalNote(): bool { return $this->has('internal_note'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Shape $ (Value): string.  Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     * @return string
     * @throws SdkError When verification_reason is omitted; use hasVerificationReason() or valueOrDefault().
     */
    public function getVerificationReason(): string { return $this->get('verification_reason'); }
    public function hasVerificationReason(): bool { return $this->has('verification_reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When verification_reason_message is omitted; use hasVerificationReasonMessage() or valueOrDefault().
     */
    public function getVerificationReasonMessage(): string { return $this->get('verification_reason_message'); }
    public function hasVerificationReasonMessage(): bool { return $this->has('verification_reason_message'); }
}
