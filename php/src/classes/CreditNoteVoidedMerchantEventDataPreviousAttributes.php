<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read mixed $allocated_money
 * @property-read mixed $available_money
 * @property-read mixed $buyer_tax_identity
 * @property-read string|null $created_at
 * @property-read string|null $credit_note_id
 * @property-read string|null $credit_note_number
 * @property-read mixed $external_reference_id
 * @property-read mixed $invoice
 * @property-read string|null $invoice_id
 * @property-read string|null $issued_at
 * @property-read string|null $latest_refund_status
 * @property-read list<CreditNoteLineItemPreviousAttributes>|null $line_items
 * @property-read mixed $memo
 * @property-read string|null $merchant_id
 * @property-read mixed $pending_refund_money
 * @property-read string|null $reason
 * @property-read mixed $refunded_money
 * @property-read mixed $seller_tax_identity
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read list<TaxCurrencyConversionPreviousAttributes>|null $tax_currency_conversions
 * @property-read mixed $total_money
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * @property-read string|null $voided_at
 * Presence-aware response; omitted optional fields return null. */
final class CreditNoteVoidedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'allocated_money'?: mixed, 'available_money'?: mixed, 'buyer_tax_identity'?: mixed, 'created_at'?: mixed, 'credit_note_id'?: mixed, 'credit_note_number'?: mixed, 'external_reference_id'?: mixed, 'invoice'?: mixed, 'invoice_id'?: mixed, 'issued_at'?: mixed, 'latest_refund_status'?: mixed, 'line_items'?: mixed, 'memo'?: mixed, 'merchant_id'?: mixed, 'pending_refund_money'?: mixed, 'reason'?: mixed, 'refunded_money'?: mixed, 'seller_tax_identity'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'tax_currency_conversions'?: mixed, 'total_money'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'voided_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNoteVoidedMerchantEventDataPreviousAttributes')); }
    /** Credit applied to the invoice, net of reversed allocations. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAllocatedMoney(): mixed { return $this->get('allocated_money'); }
    public function hasAllocatedMoney(): bool { return $this->has('allocated_money'); }
    /** Credit available to allocate or refund. Zero on draft and voided notes. On issued notes, total_money equals allocated_money plus pending_refund_money plus refunded_money plus available_money. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getAvailableMoney(): mixed { return $this->get('available_money'); }
    public function hasAvailableMoney(): bool { return $this->has('available_money'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. anyOf[1] (Value): ({@see TaxIdentityPreviousAttributes} or null). Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no buyer tax identity was captured on the source invoice. Customer deletion preserves identities captured on issued invoices and credit notes. anyOf[1].anyOf[1] (Value): {@see TaxIdentityPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getBuyerTaxIdentity(): mixed { return $this->get('buyer_tax_identity'); }
    public function hasBuyerTaxIdentity(): bool { return $this->has('buyer_tax_identity'); }
    /** When the credit note was created. anyOf[1] (Value): string. When the credit note was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier of the credit note. anyOf[1] (Value): string. Unique identifier of the credit note. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreditNoteId(): string|null { return $this->get('credit_note_id'); }
    public function hasCreditNoteId(): bool { return $this->has('credit_note_id'); }
    /** Assigned at issue and stable from then on. Absent while the credit note is a draft. anyOf[1] (Value): string. Assigned at issue and stable from then on. Absent while the credit note is a draft. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreditNoteNumber(): string|null { return $this->get('credit_note_number'); }
    public function hasCreditNoteNumber(): bool { return $this->has('credit_note_number'); }
    /** Caller-owned identifier for this resource in an external system. `null` when unset. anyOf[1] (Value): string or null. Caller-owned identifier for this resource in an external system. `null` when unset. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Summary of the source invoice. Returned only with expand=invoice. anyOf[1] (Value): {@see ExpandedInvoiceSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** The invoice this credit note corrects. anyOf[1] (Value): string. The invoice this credit note corrects. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInvoiceId(): string|null { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** When the credit note was issued. Absent on a draft. anyOf[1] (Value): string. When the credit note was issued. Absent on a draft. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIssuedAt(): string|null { return $this->get('issued_at'); }
    public function hasIssuedAt(): bool { return $this->has('issued_at'); }
    /** Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[1] (Value): string. Status of the most recent refund linked to this credit note. Absent when no refund has been requested. Value enum: "pending", "succeeded", "partially_succeeded", "failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLatestRefundStatus(): string|null { return $this->get('latest_refund_status'); }
    public function hasLatestRefundStatus(): bool { return $this->has('latest_refund_status'); }
    /** Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. anyOf[1] (Value): Array of {@see CreditNoteLineItemPreviousAttributes}. Itemized corrections against frozen invoice lines. Amount and quantity corrections share each source line's remaining value, discount, and tax across issued credit notes that have not been voided. Drafts reserve no credit. anyOf[1][] (Value): {@see CreditNoteLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CreditNoteLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Free text shown on the credit note, up to 4096 characters. `null` when unset. anyOf[1] (Value): string or null. Free text shown on the credit note, up to 4096 characters. `null` when unset. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMemo(): mixed { return $this->get('memo'); }
    public function hasMemo(): bool { return $this->has('memo'); }
    /** The merchant that owns the credit note. anyOf[1] (Value): string. The merchant that owns the credit note. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Credit reserved by linked refunds that have not resolved yet. Released if a refund fails or is canceled. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPendingRefundMoney(): mixed { return $this->get('pending_refund_money'); }
    public function hasPendingRefundMoney(): bool { return $this->has('pending_refund_money'); }
    /** Why the invoice is being corrected. Shown on the credit note document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1] (Value): string. Why the invoice is being corrected. Shown on the credit note document. Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Credit consumed by linked refunds that succeeded. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
    /** Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. anyOf[1] (Value): ({@see TaxIdentityPreviousAttributes} or null). Identity frozen on the source invoice at issue. Later profile edits do not change this document. `null` when no seller tax identity was captured. anyOf[1].anyOf[1] (Value): {@see TaxIdentityPreviousAttributes}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getSellerTaxIdentity(): mixed { return $this->get('seller_tax_identity'); }
    public function hasSellerTaxIdentity(): bool { return $this->has('seller_tax_identity'); }
    /** draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[1] (Value): string. draft while the credit note is editable, issued once it is numbered and frozen, voided once withdrawn. Value enum: "draft", "issued", "voided". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts for this resource now, based on stored state. Independent of the caller's permissions; each action still requires its route's scope. Always [] when no action is available. [] enum: "issue", "void". anyOf[1][] (Value): string.  Value enum: "issue", "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. anyOf[1] (Value): Array of {@see TaxCurrencyConversionPreviousAttributes}. The credit note's VAT stated in the currency of the country that charges it, frozen at issue. Each entry reuses the invoice's currency, exchange_rate, rate_date, and rate_source from snapshot.tax_currency_conversions, with this note's credited VAT and taxable amount converted the same way. Always [] on drafts and when the invoice froze no conversion. The credit note PDF prints the same figures. anyOf[1][] (Value): {@see TaxCurrencyConversionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<TaxCurrencyConversionPreviousAttributes>|null
     */
    public function getTaxCurrencyConversions(): array|null { return $this->get('tax_currency_conversions'); }
    public function hasTaxCurrencyConversions(): bool { return $this->has('tax_currency_conversions'); }
    /** The face value of the credit note, the sum of its lines. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getTotalMoney(): mixed { return $this->get('total_money'); }
    public function hasTotalMoney(): bool { return $this->has('total_money'); }
    /** When the credit note last changed. anyOf[1] (Value): string. When the credit note last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current credit note version. Send this as expected_version when updating the draft. anyOf[1] (Value): integer. Current credit note version. Send this as expected_version when updating the draft. Format: int64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** When the credit note was voided. Absent unless its status is voided. anyOf[1] (Value): string. When the credit note was voided. Absent unless its status is voided. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVoidedAt(): string|null { return $this->get('voided_at'); }
    public function hasVoidedAt(): bool { return $this->has('voided_at'); }
}
