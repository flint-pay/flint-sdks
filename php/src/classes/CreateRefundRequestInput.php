<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read list<RefundChargeInput|array<array-key, mixed>|\stdClass> $charges
 * @property-read string $credit_note_id
 * @property-read RefundDestinationsInput|array<array-key, mixed>|\stdClass $destinations
 * @property-read int $expected_credit_note_version
 * @property-read string $external_reference_id
 * @property-read string $gift_card_load_id
 * @property-read list<RefundLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $order_id
 * @property-read string $payment_intent_id
 * @property-read string $processed_by
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read bool $refund_platform_fee
 * @property-read string $refund_reference
 * @property-read string $refund_type
 * @property-read string|\DateTimeInterface $refunded_at
 * @property-read list<SplitReversalRequestInput|array<array-key, mixed>|\stdClass> $split_reversals
 * @property-read list<RefundTaxBreakdownRefundInInput|array<array-key, mixed>|\stdClass> $tax_breakdown_refunds
 * @property-read list<RefundTenderAllocationRequestInput|array<array-key, mixed>|\stdClass> $tender_allocations
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateRefundRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateRefundRequestInput')); }
    /** Required for refund_type amount and optional for credit_note; omit it on credit_note to refund all available credit, resolved once when Flint accepts the request. With processed_by merchant, the default is capped by the invoice's manually recorded money not already returned. Forbidden for full and targets. Total to refund, including named targets and any value Flint allocates to the remaining components. Tender allocations must sum to this amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Named order charges to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. [] (Value): {@see RefundChargeInput}. An order charge to refund when creating a refund, with an optional amount to refund.
     * @return list<RefundChargeInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Issued credit note on a paid invoice whose credit is returned to the buyer. Required only for refund_type credit_note. minLength: 1. pattern: ^cn_[0-9A-HJKMNP-TV-Z]{26}$. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Default destinations for allocations Flint plans. Allowed with full, amount without tender_allocations, and targets. Each key defaults to original, and a key for a tender absent from the refund has no effect. Not allowed with tender_allocations or gift_card_load_id; use destination on each explicit allocation. new_gift_card on a payment intent is store credit and requires a payment belonging to an order. Payments without an order return 400 INVALID_REQUEST with a NOT_ALLOWED detail at destinations.payment_intent. The merchant keeps the cash and the original processing fee is not returned; no processor refund is made. New gift card codes are returned for 24 hours. The refund reports each result in tender_allocations, without echoing destinations. Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted.
     * @return RefundDestinationsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destinations is omitted; use hasDestinations() or valueOrDefault().
     */
    public function getDestinations(): mixed { return $this->get('destinations'); }
    public function hasDestinations(): bool { return $this->has('destinations'); }
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
    /** Allowed with refund_type full or amount. Original standalone gift card funding load paid by a Flint payment. Refunds its paid consideration and removes the corresponding eligible unspent face value. Requires Idempotency-Key; cannot be combined with order, line item, charge, tax or tender targets. minLength: 1. pattern: ^gcl_[0-9A-HJKMNP-TV-Z]{26}$. Example: "gcl_01KEZF7C00YJED2857SE0J6KWC".
     * @return string
     * @throws SdkError When gift_card_load_id is omitted; use hasGiftCardLoadId() or valueOrDefault().
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
    /** Named order line items to refund. Allowed with refund_type amount or targets. In amount mode their resolved value must fit within amount_money; Flint allocates the rest. [] (Value): {@see RefundLineItemInput}. An order line item to refund, with the quantity or amount, tax handling, and any adjustments such as a restocking fee.
     * @return list<RefundLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order to refund. May be combined with payment_intent_id to select a payment on that order. Required for named targets unless payment_intent_id belongs to an order. minLength: 1. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Payment to refund. May be combined with its order_id. Named targets require a payment on an order. minLength: 1. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     * @return string
     * @throws SdkError When payment_intent_id is omitted; use hasPaymentIntentId() or valueOrDefault().
     */
    public function getPaymentIntentId(): string { return $this->get('payment_intent_id'); }
    public function hasPaymentIntentId(): bool { return $this->has('payment_intent_id'); }
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
    /** Return the platform fee on the payments this refund refunds, as Stripe's refund_application_fee does. By default the partner app keeps its fee. With true, each refunded payment that carries the partner app's collected platform fee returns all of the fee's unreturned amount when this refund returns the whole captured amount, and otherwise a proportional share, rounded half up; the refund that completes the payment returns what rounding left, when every earlier refund of it also returned the fee. Each payment refund reports its share in refunded_platform_fee_money, and Flint returns it to the merchant once that payment refund succeeds. Payments without a platform fee are refunded normally. Only the partner app install token whose app charged the fee can send true; from any other credential, or when a refunded payment carries another app's fee, it is INVALID_REQUEST with NOT_ALLOWED on refund_platform_fee. Not accepted with refund_type credit_note. Part of the request fingerprint. See [Platform fees](/docs/guides/platform-fees). Default: false.
     * @return bool
     * @throws SdkError When refund_platform_fee is omitted; use hasRefundPlatformFee() or valueOrDefault().
     */
    public function getRefundPlatformFee(): bool { return $this->get('refund_platform_fee'); }
    public function hasRefundPlatformFee(): bool { return $this->has('refund_platform_fee'); }
    /** Optional check, wire, or other reference for the money you returned outside Flint. Opaque, 1 to 255 characters, and preserved exactly. Use external_reference_id for your own refund ID. Accepted only when `processed_by` is `merchant`; otherwise the request fails with `400 INVALID_REQUEST` (`NOT_ALLOWED`). minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When refund_reference is omitted; use hasRefundReference() or valueOrDefault().
     */
    public function getRefundReference(): string { return $this->get('refund_reference'); }
    public function hasRefundReference(): bool { return $this->has('refund_reference'); }
    /** What to refund and how much: credit_note returns a credit note's available credit; full refunds the full remaining amount; amount requires amount_money and permits named targets and tender_allocations within that amount; targets refunds named line_items, charges, or tax_breakdown_refunds without amount_money. Full and targets do not accept tender_allocations. Gift card loads support full and amount only. Value enum: "full", "amount", "targets", "credit_note".
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
    /** Exhaustive seller amounts to take back from the payments this refund covers. Omit for cumulative allocation; send [] to fund the whole refund yourself. Splits not named give back nothing. Each split must be eligible and belong to a refunded payment. Each positive amount uses the payment's currency and is at most its unreversed amount; otherwise LIMIT_EXCEEDED reports maximum_money. Entries for each payment total at most that payment's refund; otherwise INVALID_REQUEST reports maximum_money at split_reversals. [] (Value): {@see SplitReversalRequestInput}. The seller amount to take back from one eligible payment split when creating a refund.
     * @return list<SplitReversalRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When split_reversals is omitted; use hasSplitReversals() or valueOrDefault().
     */
    public function getSplitReversals(): array { return $this->get('split_reversals'); }
    public function hasSplitReversals(): bool { return $this->has('split_reversals'); }
    /** Named order tax breakdowns to refund. Allowed with refund_type amount or targets. In amount mode their value must fit within amount_money; Flint allocates the rest. Requires commerce.refunds.tax_overrides.write. [] (Value): {@see RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by `tax_breakdown_id`, when setting tax refunds explicitly.
     * @return list<RefundTaxBreakdownRefundInInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tax_breakdown_refunds is omitted; use hasTaxBreakdownRefunds() or valueOrDefault().
     */
    public function getTaxBreakdownRefunds(): array { return $this->get('tax_breakdown_refunds'); }
    public function hasTaxBreakdownRefunds(): bool { return $this->has('tax_breakdown_refunds'); }
    /** Exhaustive allocations to original tenders. Allowed only with refund_type amount. Amounts must sum to the required amount_money. Selected line-item, charge and flat-tax components must be covered by their original tenders. Additional untargeted value follows the default tender order. Destinations default to original. Select new_gift_card when the original card is closed or cannot accept the full credit within its balance cap. For gift card redemptions made outside a Flint order, send the allocations without order_id. minItems: 1. maxItems: 21. [] (Value): {@see RefundTenderAllocationRequestInput}. Where part of a refund goes: back to a payment intent or to a gift card redemption, with the amount.
     * @return list<RefundTenderAllocationRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When tender_allocations is omitted; use hasTenderAllocations() or valueOrDefault().
     */
    public function getTenderAllocations(): array { return $this->get('tender_allocations'); }
    public function hasTenderAllocations(): bool { return $this->has('tender_allocations'); }
}
