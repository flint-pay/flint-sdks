<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_billing_invoice_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSubscriptionInvoicesGetInput extends Model {
    /** @param array{'merchant_billing_invoice_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSubscriptionInvoicesGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_billing_invoice_id is omitted; use hasMerchantBillingInvoiceId() or valueOrDefault().
     */
    public function getMerchantBillingInvoiceId(): string { return $this->get('merchant_billing_invoice_id'); }
    public function hasMerchantBillingInvoiceId(): bool { return $this->has('merchant_billing_invoice_id'); }
}
