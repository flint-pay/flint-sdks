<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $invoice_id
 * @property-read string|null $order_id
 * @property-read string|\DateTimeInterface|null $started_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionInventoryWaitPreviousAttributesInput extends Model {
    /** @param array{'invoice_id'?: string|null, 'order_id'?: string|null, 'started_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionInventoryWaitPreviousAttributesInput')); }
    /** ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. anyOf[1] (Value): string. ID of the invoice recorded for the renewal that stock is blocking. Merchant credentials only. Example: "inv_01KEZF7C00A5GEBMWHEAJFSAR4". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): mixed { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** ID of the order waiting for stock, if one was created. Merchant credentials only. anyOf[1] (Value): string. ID of the order waiting for stock, if one was created. Merchant credentials only. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When started_at is omitted; use hasStartedAt() or valueOrDefault().
     */
    public function getStartedAt(): mixed { return $this->get('started_at'); }
    public function hasStartedAt(): bool { return $this->has('started_at'); }
}
