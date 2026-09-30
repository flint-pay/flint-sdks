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
 * @property-read ReturnUnverifiedItem $unverified_item
 * @property-read string $verification_reason
 * @property-read string $verification_reason_message
 * @property-read string $verification_status
 * @property-read string $verified_at
 * @property-read ReturnActor $verified_by
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnReceiptLineItem extends Model {
    /** @param array{'available_disposition_quantity': string, 'quantity': string, 'return_line_item_id'?: string, 'return_receipt_id': string, 'return_receipt_line_item_id': string, 'supported_actions': list<string>, 'unverified_item'?: mixed, 'verification_reason'?: string, 'verification_reason_message'?: string, 'verification_status': string, 'verified_at'?: string, 'verified_by'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReceiptLineItem')); }
    /** @return string
     * @throws SdkError When available_disposition_quantity is omitted; use hasAvailableDispositionQuantity() or valueOrDefault().
     */
    public function getAvailableDispositionQuantity(): string { return $this->get('available_disposition_quantity'); }
    public function hasAvailableDispositionQuantity(): bool { return $this->has('available_disposition_quantity'); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
    /** @return string
     * @throws SdkError When return_receipt_id is omitted; use hasReturnReceiptId() or valueOrDefault().
     */
    public function getReturnReceiptId(): string { return $this->get('return_receipt_id'); }
    public function hasReturnReceiptId(): bool { return $this->has('return_receipt_id'); }
    /** @return string
     * @throws SdkError When return_receipt_line_item_id is omitted; use hasReturnReceiptLineItemId() or valueOrDefault().
     */
    public function getReturnReceiptLineItemId(): string { return $this->get('return_receipt_line_item_id'); }
    public function hasReturnReceiptLineItemId(): bool { return $this->has('return_receipt_line_item_id'); }
    /** @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** @return ReturnUnverifiedItem
     * @throws SdkError When unverified_item is omitted; use hasUnverifiedItem() or valueOrDefault().
     */
    public function getUnverifiedItem(): ReturnUnverifiedItem { return $this->get('unverified_item'); }
    public function hasUnverifiedItem(): bool { return $this->has('unverified_item'); }
    /** @return string
     * @throws SdkError When verification_reason is omitted; use hasVerificationReason() or valueOrDefault().
     */
    public function getVerificationReason(): string { return $this->get('verification_reason'); }
    public function hasVerificationReason(): bool { return $this->has('verification_reason'); }
    /** @return string
     * @throws SdkError When verification_reason_message is omitted; use hasVerificationReasonMessage() or valueOrDefault().
     */
    public function getVerificationReasonMessage(): string { return $this->get('verification_reason_message'); }
    public function hasVerificationReasonMessage(): bool { return $this->has('verification_reason_message'); }
    /** @return string
     * @throws SdkError When verification_status is omitted; use hasVerificationStatus() or valueOrDefault().
     */
    public function getVerificationStatus(): string { return $this->get('verification_status'); }
    public function hasVerificationStatus(): bool { return $this->has('verification_status'); }
    /** @return string
     * @throws SdkError When verified_at is omitted; use hasVerifiedAt() or valueOrDefault().
     */
    public function getVerifiedAt(): string { return $this->get('verified_at'); }
    public function hasVerifiedAt(): bool { return $this->has('verified_at'); }
    /** @return ReturnActor
     * @throws SdkError When verified_by is omitted; use hasVerifiedBy() or valueOrDefault().
     */
    public function getVerifiedBy(): ReturnActor { return $this->get('verified_by'); }
    public function hasVerifiedBy(): bool { return $this->has('verified_by'); }
}
