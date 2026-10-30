<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $merchant_billing_invoice_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantBillingInvoicesGetInput extends Model {
    /** @param array{'merchant_billing_invoice_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantBillingInvoicesGetInput')); }
    /** Flint merchant billing invoice ID. Example: "msinv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When merchant_billing_invoice_id is omitted; use hasMerchantBillingInvoiceId() or valueOrDefault().
     */
    public function getMerchantBillingInvoiceId(): string { return $this->get('merchant_billing_invoice_id'); }
    public function hasMerchantBillingInvoiceId(): bool { return $this->has('merchant_billing_invoice_id'); }
}
