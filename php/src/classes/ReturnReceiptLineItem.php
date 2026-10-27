<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $available_disposition_quantity
 * @property-read string $quantity
 * @property-read ?string $return_line_item_id
 * @property-read string $return_receipt_id
 * @property-read string $return_receipt_line_item_id
 * @property-read list<string> $supported_actions
 * @property-read ?ReturnUnverifiedItem $unverified_item
 * @property-read ?string $verification_reason
 * @property-read ?string $verification_reason_message
 * @property-read string $verification_status
 * @property-read ?string $verified_at
 * @property-read ?ReturnActor $verified_by
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceiptLineItem extends Model {
    /** @param array{'available_disposition_quantity': string, 'quantity': string, 'return_line_item_id'?: string, 'return_receipt_id': string, 'return_receipt_line_item_id': string, 'supported_actions': list<string>, 'unverified_item'?: mixed, 'verification_reason'?: string, 'verification_reason_message'?: string, 'verification_status': string, 'verified_at'?: string, 'verified_by'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptLineItem')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getAvailableDispositionQuantity(): string { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getReturnLineItemId(): ?string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "verify". Shape $[] (Value): string.  Value enum: "verify".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): {@see ReturnUnverifiedItem}. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description.
     * @return ?ReturnUnverifiedItem
     */
    public function getUnverifiedItem(): ?ReturnUnverifiedItem { return $this->get('unverified_item'); }
    public function hasUnverifiedItem(): bool { return $this->has('unverified_item'); }
    /** Shape $ (Value): string.  Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     * @return ?string
     */
    public function getVerificationReason(): ?string { return $this->get('verification_reason'); }
    public function hasVerificationReason(): bool { return $this->has('verification_reason'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getVerificationReasonMessage(): ?string { return $this->get('verification_reason_message'); }
    public function hasVerificationReasonMessage(): bool { return $this->has('verification_reason_message'); }
    /** Shape $ (Value): string.  Value enum: "matched", "unverified", "excess".
     * @return string
     */
    public function getVerificationStatus(): string { return $this->get('verification_status'); }
    public function hasVerificationStatus(): bool { return $this->has('verification_status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getVerifiedAt(): ?string { return $this->get('verified_at'); }
    public function hasVerifiedAt(): bool { return $this->has('verified_at'); }
    /** Shape $ (Value): {@see ReturnActor}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ?ReturnActor
     */
    public function getVerifiedBy(): ?ReturnActor { return $this->get('verified_by'); }
    public function hasVerifiedBy(): bool { return $this->has('verified_by'); }
}
