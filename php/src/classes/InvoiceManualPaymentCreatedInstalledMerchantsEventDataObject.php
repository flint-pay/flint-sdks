<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $amount_money
 * @property-read string $invoice_id
 * @property-read string $invoice_manual_payment_id
 * @property-read ?string $note
 * @property-read ?string $payment_reference
 * @property-read string $received_at
 * @property-read ?string $reversal_note
 * @property-read ?string $reversed_at
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'amount_money': mixed, 'invoice_id': string, 'invoice_manual_payment_id': string, 'note'?: string, 'payment_reference'?: string, 'received_at': string, 'reversal_note'?: string, 'reversed_at'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentCreatedInstalledMerchantsEventDataObject')); }
    /** Full amount received, including any principal and late fees covered. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getAmountMoney(): MoneyValue { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The invoice this payment was recorded against.
     * @return string
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id.
     * @return string
     */
    public function getInvoiceManualPaymentId(): string { return $this->get('invoice_manual_payment_id'); }
    public function hasInvoiceManualPaymentId(): bool { return $this->has('invoice_manual_payment_id'); }
    /** minLength: 1. maxLength: 4096.
     * @return ?string
     */
    public function getNote(): ?string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getPaymentReference(): ?string { return $this->get('payment_reference'); }
    public function hasPaymentReference(): bool { return $this->has('payment_reference'); }
    /** When the payment was received. Format: date-time.
     * @return string
     */
    public function getReceivedAt(): string { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: 1. maxLength: 4096.
     * @return ?string
     */
    public function getReversalNote(): ?string { return $this->get('reversal_note'); }
    public function hasReversalNote(): bool { return $this->has('reversal_note'); }
    /** When the payment was reversed. Present only when reversed. Format: date-time.
     * @return ?string
     */
    public function getReversedAt(): ?string { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
    /** Whether the payment is recorded or has been reversed in full. Value enum: "recorded", "reversed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
