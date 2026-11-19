<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $allocated_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string $credit_note_allocation_id
 * @property-read string $credit_note_id
 * @property-read string|null $idempotency_key
 * @property-read string $invoice_id
 * @property-read string|\DateTimeInterface $reversed_at
 * @property-read list<string> $supported_actions
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNoteAllocationInput extends Model {
    /** @param array{'allocated_at': string|\DateTimeInterface, 'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'credit_note_allocation_id': string, 'credit_note_id': string, 'idempotency_key': string|null, 'invoice_id': string, 'reversed_at'?: string|\DateTimeInterface, 'supported_actions': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteAllocationInput')); }
    /** When the credit was applied to the invoice balance. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When allocated_at is omitted; use hasAllocatedAt() or valueOrDefault().
     */
    public function getAllocatedAt(): string|\DateTimeInterface { return $this->get('allocated_at'); }
    public function hasAllocatedAt(): bool { return $this->has('allocated_at'); }
    /** Credit applied to the invoice balance. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Unique identifier of the allocation. Example: "cna_01KEZF7C00EH6DMS9BD8F72CMA".
     * @return string
     * @throws SdkError When credit_note_allocation_id is omitted; use hasCreditNoteAllocationId() or valueOrDefault().
     */
    public function getCreditNoteAllocationId(): string { return $this->get('credit_note_allocation_id'); }
    public function hasCreditNoteAllocationId(): bool { return $this->has('credit_note_allocation_id'); }
    /** The credit note whose credit was applied. Example: "cn_01KEZF7C00N1TRRCVDNY8S471H".
     * @return string
     * @throws SdkError When credit_note_id is omitted; use hasCreditNoteId() or valueOrDefault().
     */
    public function getCreditNoteId(): string { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource.
     * @return string|null
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** The invoice whose balance the credit reduced. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the allocation was reversed and its credit returned. Absent while the allocation stands. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When reversed_at is omitted; use hasReversedAt() or valueOrDefault().
     */
    public function getReversedAt(): string|\DateTimeInterface { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". [] (Value): string.  Value enum: "reverse".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
