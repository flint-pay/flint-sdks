<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $available_disposition_quantity
 * @property-read int|null $quantity
 * @property-read string|null $return_id
 * @property-read string|null $return_line_item_id
 * @property-read string|null $return_receipt_id
 * @property-read string|null $return_receipt_line_item_id
 * @property-read list<string>|null $supported_actions
 * @property-read ReturnUnverifiedItemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $unverified_item
 * @property-read string|null $verification_reason
 * @property-read string|null $verification_reason_message
 * @property-read string|null $verification_status
 * @property-read string|\DateTimeInterface|null $verified_at
 * @property-read ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $verified_by
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReceiptLineItemPreviousAttributesInput extends Model {
    /** @param array{'available_disposition_quantity'?: int|null, 'quantity'?: int|null, 'return_id'?: string|null, 'return_line_item_id'?: string|null, 'return_receipt_id'?: string|null, 'return_receipt_line_item_id'?: string|null, 'supported_actions'?: list<string>|null, 'unverified_item'?: ReturnUnverifiedItemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'verification_reason'?: string|null, 'verification_reason_message'?: string|null, 'verification_status'?: string|null, 'verified_at'?: string|\DateTimeInterface|null, 'verified_by'?: ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptLineItemPreviousAttributesInput')); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When available_disposition_quantity is omitted; use hasAvailableDispositionQuantity() or valueOrDefault().
     */
    public function getAvailableDispositionQuantity(): mixed { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): mixed { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Return that owns return_line_item_id. `null` when return_line_item_id is null. anyOf[1] (Value): string. Return that owns return_line_item_id. `null` when return_line_item_id is null. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): mixed { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** ID of the Return line the units were matched to. Absent for unverified units. anyOf[1] (Value): string. ID of the Return line the units were matched to. Absent for unverified units. Example: "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): mixed { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** ID of the receipt the line belongs to. anyOf[1] (Value): string. ID of the receipt the line belongs to. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): mixed { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** Unique identifier for this return receipt line item, prefixed `retrcli_`. anyOf[1] (Value): string. Unique identifier for this return receipt line item, prefixed `retrcli_`. Example: "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): mixed { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. [] enum: "verify". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. [] enum: "verify". anyOf[1][] (Value): string.  Value enum: "verify". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** What the operator recorded for units that match no line. Present on `unverified` lines. anyOf[1] (Value): {@see ReturnUnverifiedItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnUnverifiedItemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When unverified_item is omitted; use hasUnverifiedItem() or valueOrDefault().
     */
    public function getUnverifiedItem(): mixed { return $this->get('unverified_item'); }
    public function hasUnverifiedItem(): bool { return $this->has('unverified_item'); }
    /** Why the units were verified against the line. Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other". anyOf[1] (Value): string. Why the units were verified against the line. Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When verification_reason is omitted; use hasVerificationReason() or valueOrDefault().
     */
    public function getVerificationReason(): mixed { return $this->get('verification_reason'); }
    public function hasVerificationReason(): bool { return $this->has('verification_reason'); }
    /** Detail about `verification_reason`. anyOf[1] (Value): string. Detail about `verification_reason`. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When verification_reason_message is omitted; use hasVerificationReasonMessage() or valueOrDefault().
     */
    public function getVerificationReasonMessage(): mixed { return $this->get('verification_reason_message'); }
    public function hasVerificationReasonMessage(): bool { return $this->has('verification_reason_message'); }
    /** Whether the units are matched to a line. Value enum: "matched", "unverified", "excess". anyOf[1] (Value): string. Whether the units are matched to a line. Value enum: "matched", "unverified", "excess". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When verification_status is omitted; use hasVerificationStatus() or valueOrDefault().
     */
    public function getVerificationStatus(): mixed { return $this->get('verification_status'); }
    public function hasVerificationStatus(): bool { return $this->has('verification_status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When verified_at is omitted; use hasVerifiedAt() or valueOrDefault().
     */
    public function getVerifiedAt(): mixed { return $this->get('verified_at'); }
    public function hasVerifiedAt(): bool { return $this->has('verified_at'); }
    /** Who verified the line. anyOf[1] (Value): {@see ReturnActorPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When verified_by is omitted; use hasVerifiedBy() or valueOrDefault().
     */
    public function getVerifiedBy(): mixed { return $this->get('verified_by'); }
    public function hasVerifiedBy(): bool { return $this->has('verified_by'); }
}
