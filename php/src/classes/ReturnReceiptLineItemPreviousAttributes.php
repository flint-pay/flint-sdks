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
 * @property-read ReturnUnverifiedItemPreviousAttributes|null $unverified_item
 * @property-read string|null $verification_reason
 * @property-read string|null $verification_reason_message
 * @property-read string|null $verification_status
 * @property-read string|null $verified_at
 * @property-read ReturnActorPreviousAttributes|null $verified_by
 * Presence-aware response; omitted optional fields return null. */
final class ReturnReceiptLineItemPreviousAttributes extends Model {
    /** @param array{'available_disposition_quantity'?: mixed, 'quantity'?: mixed, 'return_id'?: mixed, 'return_line_item_id'?: mixed, 'return_receipt_id'?: mixed, 'return_receipt_line_item_id'?: mixed, 'supported_actions'?: mixed, 'unverified_item'?: mixed, 'verification_reason'?: mixed, 'verification_reason_message'?: mixed, 'verification_status'?: mixed, 'verified_at'?: mixed, 'verified_by'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptLineItemPreviousAttributes')); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAvailableDispositionQuantity(): int|null { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
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
    /** ID of the Return line the units were matched to. Absent for unverified units. anyOf[1] (Value): string. ID of the Return line the units were matched to. Absent for unverified units. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnLineItemId(): string|null { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** ID of the receipt the line belongs to. anyOf[1] (Value): string. ID of the receipt the line belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReceiptId(): string|null { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** Unique identifier for this return receipt line item, prefixed `retrcli_`. anyOf[1] (Value): string. Unique identifier for this return receipt line item, prefixed `retrcli_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnReceiptLineItemId(): string|null { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. [] enum: "verify". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions the API key or token doesn't have the scope for are left out. `verify` is listed while the receipt is current and the line's `verification_status` is `unverified`. Otherwise empty. [] enum: "verify". anyOf[1][] (Value): string.  Value enum: "verify". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** What the operator recorded for units that match no line. Present on `unverified` lines. anyOf[1] (Value): {@see ReturnUnverifiedItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnUnverifiedItemPreviousAttributes|null
     */
    public function getUnverifiedItem(): ReturnUnverifiedItemPreviousAttributes|null { return $this->get('unverified_item'); }
    public function hasUnverifiedItem(): bool { return $this->has('unverified_item'); }
    /** Why the units were verified against the line. Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other". anyOf[1] (Value): string. Why the units were verified against the line. Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVerificationReason(): string|null { return $this->get('verification_reason'); }
    public function hasVerificationReason(): bool { return $this->has('verification_reason'); }
    /** Detail about `verification_reason`. anyOf[1] (Value): string. Detail about `verification_reason`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVerificationReasonMessage(): string|null { return $this->get('verification_reason_message'); }
    public function hasVerificationReasonMessage(): bool { return $this->has('verification_reason_message'); }
    /** Whether the units are matched to a line. Value enum: "matched", "unverified", "excess". anyOf[1] (Value): string. Whether the units are matched to a line. Value enum: "matched", "unverified", "excess". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVerificationStatus(): string|null { return $this->get('verification_status'); }
    public function hasVerificationStatus(): bool { return $this->has('verification_status'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVerifiedAt(): string|null { return $this->get('verified_at'); }
    public function hasVerifiedAt(): bool { return $this->has('verified_at'); }
    /** Who verified the line. anyOf[1] (Value): {@see ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     * @return ReturnActorPreviousAttributes|null
     */
    public function getVerifiedBy(): ReturnActorPreviousAttributes|null { return $this->get('verified_by'); }
    public function hasVerifiedBy(): bool { return $this->has('verified_by'); }
}
