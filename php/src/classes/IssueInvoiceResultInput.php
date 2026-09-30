<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceDeliveryAttemptInput|array<array-key, mixed>|\stdClass $delivery_attempt
 * @property-read InvoiceInput|array<array-key, mixed>|\stdClass $invoice
 * @property-read string $public_url
 * Presence-aware input; omitted fields throw when accessed. */
final class IssueInvoiceResultInput extends Model {
    /** @param array{'delivery_attempt'?: InvoiceDeliveryAttemptInput|array<array-key, mixed>|\stdClass, 'invoice': InvoiceInput|array<array-key, mixed>|\stdClass, 'public_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('IssueInvoiceResultInput')); }
    /** @return InvoiceDeliveryAttemptInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_attempt is omitted; use hasDeliveryAttempt() or valueOrDefault().
     */
    public function getDeliveryAttempt(): mixed { return $this->get('delivery_attempt'); }
    public function hasDeliveryAttempt(): bool { return $this->has('delivery_attempt'); }
    /** @return InvoiceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When invoice is omitted; use hasInvoice() or valueOrDefault().
     */
    public function getInvoice(): mixed { return $this->get('invoice'); }
    public function hasInvoice(): bool { return $this->has('invoice'); }
    /** @return string
     * @throws SdkError When public_url is omitted; use hasPublicUrl() or valueOrDefault().
     */
    public function getPublicUrl(): string { return $this->get('public_url'); }
    public function hasPublicUrl(): bool { return $this->has('public_url'); }
}
