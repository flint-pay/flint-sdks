<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InvoiceLateFeeDueMerchantEventDataObjectCollectionBuyerInitiatedPaymentPolicyPaymentOptionLimitsItemMaxTotalMoney $max_total_money
 * @property-read string $payment_option
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceLateFeeDueMerchantEventDataObjectCollectionBuyerInitiatedPaymentPolicyPaymentOptionLimitsItem extends Model {
    /** @param array{'max_total_money': mixed, 'payment_option': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceLateFeeDueMerchantEventDataObjectCollectionBuyerInitiatedPaymentPolicyPaymentOptionLimitsItem')); }
    /** The largest invoice total, in this currency, for which Flint offers the option. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return InvoiceLateFeeDueMerchantEventDataObjectCollectionBuyerInitiatedPaymentPolicyPaymentOptionLimitsItemMaxTotalMoney
     */
    public function getMaxTotalMoney(): InvoiceLateFeeDueMerchantEventDataObjectCollectionBuyerInitiatedPaymentPolicyPaymentOptionLimitsItemMaxTotalMoney { return $this->get('max_total_money'); }
    public function hasMaxTotalMoney(): bool { return $this->has('max_total_money'); }
    /** The payment option this cap applies to. Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return string
     */
    public function getPaymentOption(): string { return $this->get('payment_option'); }
    public function hasPaymentOption(): bool { return $this->has('payment_option'); }
}
