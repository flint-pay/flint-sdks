<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $credit_note_id
 * @property-read int $expected_credit_note_version
 * @property-read string $external_reference_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $processed_by
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string $refund_reference
 * @property-read string $refund_type
 * @property-read string|\DateTimeInterface $refunded_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRefundRequestCreditNoteInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundRequestCreditNoteInput')); }
    /** Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Credit note version last read. Optional; a stale version returns VERSION_CONFLICT with the current_version. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_credit_note_version is omitted; use hasExpectedCreditNoteVersion() or valueOrDefault().
     */
    public function getExpectedCreditNoteVersion(): int { return $this->get('expected_credit_note_version'); }
    public function hasExpectedCreditNoteVersion(): bool { return $this->has('expected_credit_note_version'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Who moves the money for this refund. Allowed only for refund_type credit_note. Omit or use flint for Flint to return the money to the invoice's payments. Use merchant to record money you already returned outside Flint, for example by check or wire; Flint moves no money. Default: "flint". Value enum: "flint", "merchant".
     * @return string
     * @throws SdkError When processed_by is omitted; use hasProcessedBy() or valueOrDefault().
     */
    public function getProcessedBy(): string { return $this->get('processed_by'); }
    public function hasProcessedBy(): bool { return $this->has('processed_by'); }
    /** Optional. When omitted, no reason is recorded or sent to the processor, and the buyer's refund email has no reason line. Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found", "accidental_order", "other", "out_of_stock".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Optional note explaining the refund, up to 1,024 characters. minLength: 1. maxLength: 1024.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When refund_reference is omitted; use hasRefundReference() or valueOrDefault().
     */
    public function getRefundReference(): string { return $this->get('refund_reference'); }
    public function hasRefundReference(): bool { return $this->has('refund_reference'); }
    /** What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Value enum: "credit_note".
     * @return string
     * @throws SdkError When refund_type is omitted; use hasRefundType() or valueOrDefault().
     */
    public function getRefundType(): string { return $this->get('refund_type'); }
    public function hasRefundType(): bool { return $this->has('refund_type'); }
    /** When you report returning the money outside Flint. Omit to use the current time. Must be an RFC 3339 timestamp at or before now; offsets are normalized to UTC and fractional seconds are truncated. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When refunded_at is omitted; use hasRefundedAt() or valueOrDefault().
     */
    public function getRefundedAt(): string|\DateTimeInterface { return $this->get('refunded_at'); }
    public function hasRefundedAt(): bool { return $this->has('refunded_at'); }
}
