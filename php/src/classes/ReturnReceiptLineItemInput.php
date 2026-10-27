<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $available_disposition_quantity
 * @property-read string $quantity
 * @property-read string $return_line_item_id
 * @property-read string $return_receipt_id
 * @property-read string $return_receipt_line_item_id
 * @property-read list<string> $supported_actions
 * @property-read ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass $unverified_item
 * @property-read string $verification_reason
 * @property-read string $verification_reason_message
 * @property-read string $verification_status
 * @property-read string|\DateTimeInterface $verified_at
 * @property-read ReturnActorInput|array<array-key, mixed>|\stdClass $verified_by
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptLineItemInput extends Model {
    /** @param array{'available_disposition_quantity': string, 'quantity': string, 'return_line_item_id'?: string, 'return_receipt_id': string, 'return_receipt_line_item_id': string, 'supported_actions': list<string>, 'unverified_item'?: ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass, 'verification_reason'?: string, 'verification_reason_message'?: string, 'verification_status': string, 'verified_at'?: string|\DateTimeInterface, 'verified_by'?: ReturnActorInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptLineItemInput')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When available_disposition_quantity is omitted; use hasAvailableDispositionQuantity() or valueOrDefault().
     */
    public function getAvailableDispositionQuantity(): string { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Shape $ (Value): Array of string.  [] enum: "verify". Shape $[] (Value): string.  Value enum: "verify".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): {@see ReturnUnverifiedItemInput}. Merchandise received in a return that does not match an expected return line, described by name, SKU, and description.
     * @return ReturnUnverifiedItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unverified_item is omitted; use hasUnverifiedItem() or valueOrDefault().
     */
    public function getUnverifiedItem(): mixed { return $this->get('unverified_item'); }
    public function hasUnverifiedItem(): bool { return $this->has('unverified_item'); }
    /** Shape $ (Value): string.  Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     * @return string
     * @throws SdkError When verification_reason is omitted; use hasVerificationReason() or valueOrDefault().
     */
    public function getVerificationReason(): string { return $this->get('verification_reason'); }
    public function hasVerificationReason(): bool { return $this->has('verification_reason'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When verification_reason_message is omitted; use hasVerificationReasonMessage() or valueOrDefault().
     */
    public function getVerificationReasonMessage(): string { return $this->get('verification_reason_message'); }
    public function hasVerificationReasonMessage(): bool { return $this->has('verification_reason_message'); }
    /** Shape $ (Value): string.  Value enum: "matched", "unverified", "excess".
     * @return string
     * @throws SdkError When verification_status is omitted; use hasVerificationStatus() or valueOrDefault().
     */
    public function getVerificationStatus(): string { return $this->get('verification_status'); }
    public function hasVerificationStatus(): bool { return $this->has('verification_status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When verified_at is omitted; use hasVerifiedAt() or valueOrDefault().
     */
    public function getVerifiedAt(): string|\DateTimeInterface { return $this->get('verified_at'); }
    public function hasVerifiedAt(): bool { return $this->has('verified_at'); }
    /** Shape $ (Value): {@see ReturnActorInput}. Who performed a return action: a buyer, merchant, integration, or the system, with an optional ID.
     * @return ReturnActorInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When verified_by is omitted; use hasVerifiedBy() or valueOrDefault().
     */
    public function getVerifiedBy(): mixed { return $this->get('verified_by'); }
    public function hasVerifiedBy(): bool { return $this->has('verified_by'); }
}
