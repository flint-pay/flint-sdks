<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $compared_with_payment_option
 * @property-read MoneyValue $estimated_savings_money
 * @property-read string $lower_cost_payment_option
 * Presence-aware response; omitted optional fields return null. */
final class InvoicePaymentOptionCostComparison extends Model {
    /** @param array{'compared_with_payment_option': string, 'estimated_savings_money': mixed, 'lower_cost_payment_option': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentOptionCostComparison')); }
    /** Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return string
     */
    public function getComparedWithPaymentOption(): string { return $this->get('compared_with_payment_option'); }
    public function hasComparedWithPaymentOption(): bool { return $this->has('compared_with_payment_option'); }
    /** Estimated savings for the merchant, as a positive amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getEstimatedSavingsMoney(): MoneyValue { return $this->get('estimated_savings_money'); }
    public function hasEstimatedSavingsMoney(): bool { return $this->has('estimated_savings_money'); }
    /** Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return string
     */
    public function getLowerCostPaymentOption(): string { return $this->get('lower_cost_payment_option'); }
    public function hasLowerCostPaymentOption(): bool { return $this->has('lower_cost_payment_option'); }
}
