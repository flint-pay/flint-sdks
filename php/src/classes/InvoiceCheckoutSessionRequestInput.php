<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $invoice_schedule_entry_id
 * @property-read string $page_origin
 * @property-read CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $return_url
 * @property-read string $surface
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceCheckoutSessionRequestInput extends Model {
    /** @param array{'invoice_schedule_entry_id'?: string, 'page_origin'?: string, 'redirects'?: CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass, 'return_url'?: string, 'surface'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCheckoutSessionRequestInput')); }
    /** @return string
     * @throws SdkError When invoice_schedule_entry_id is omitted; use hasInvoiceScheduleEntryId() or valueOrDefault().
     */
    public function getInvoiceScheduleEntryId(): string { return $this->get('invoice_schedule_entry_id'); }
    public function hasInvoiceScheduleEntryId(): bool { return $this->has('invoice_schedule_entry_id'); }
    /** @return string
     * @throws SdkError When page_origin is omitted; use hasPageOrigin() or valueOrDefault().
     */
    public function getPageOrigin(): string { return $this->get('page_origin'); }
    public function hasPageOrigin(): bool { return $this->has('page_origin'); }
    /** @return CheckoutRedirectsConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** @return string
     * @throws SdkError When return_url is omitted; use hasReturnUrl() or valueOrDefault().
     */
    public function getReturnUrl(): string { return $this->get('return_url'); }
    public function hasReturnUrl(): bool { return $this->has('return_url'); }
    /** @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
}
