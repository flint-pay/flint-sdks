<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue|null $amount_money
 * @property-read string|null $invoice_id
 * @property-read string|null $invoice_manual_payment_id
 * @property-read string|null $note
 * @property-read string|null $payment_reference
 * @property-read string|null $received_at
 * @property-read string|null $reversal_note
 * @property-read string|null $reversed_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'amount_money'?: mixed, 'invoice_id'?: mixed, 'invoice_manual_payment_id'?: mixed, 'note'?: mixed, 'payment_reference'?: mixed, 'received_at'?: mixed, 'reversal_note'?: mixed, 'reversed_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceManualPaymentReversedMerchantEventDataPreviousAttributes')); }
    /** Full amount received, including any principal and late fees covered. anyOf[1] (Value): {@see MoneyValue}. Full amount received, including any principal and late fees covered. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getAmountMoney(): MoneyValue|null { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** The invoice this payment was recorded against. anyOf[1] (Value): string. The invoice this payment was recorded against. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. anyOf[1] (Value): string. Stable payment ID. IDs begin with omp_. Gift card loads funded by this payment expose this value as source.order_manual_payment_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceManualPaymentId(): string|null { return $this->get('invoice_manual_payment_id'); }
    public function hasInvoiceManualPaymentId(): bool { return $this->has('invoice_manual_payment_id'); }
    /** Note about the offline payment, up to 4096 characters. anyOf[1] (Value): string. Note about the offline payment, up to 4096 characters. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNote(): string|null { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** Caller-owned check, wire, or bank reference, stored unmodified. anyOf[1] (Value): string. Caller-owned check, wire, or bank reference, stored unmodified. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentReference(): string|null { return $this->get('payment_reference'); }
    public function hasPaymentReference(): bool { return $this->has('payment_reference'); }
    /** When the payment was received. anyOf[1] (Value): string. When the payment was received. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivedAt(): string|null { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Note supplied when reversing the payment. Present only when reversed and a note was supplied. anyOf[1] (Value): string. Note supplied when reversing the payment. Present only when reversed and a note was supplied. minLength: 1. maxLength: 4096. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReversalNote(): string|null { return $this->get('reversal_note'); }
    public function hasReversalNote(): bool { return $this->has('reversal_note'); }
    /** When the payment was reversed. Present only when reversed. anyOf[1] (Value): string. When the payment was reversed. Present only when reversed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReversedAt(): string|null { return $this->get('reversed_at'); }
    public function hasReversedAt(): bool { return $this->has('reversed_at'); }
    /** Whether the payment is recorded or has been reversed in full. Value enum: "recorded", "reversed". anyOf[1] (Value): string. Whether the payment is recorded or has been reversed in full. Value enum: "recorded", "reversed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "reverse". anyOf[1][] (Value): string.  Value enum: "reverse". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
}
