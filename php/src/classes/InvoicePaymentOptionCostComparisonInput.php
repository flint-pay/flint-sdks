<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $compared_with_payment_option
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $estimated_savings_money
 * @property-read string $lower_cost_payment_option
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentOptionCostComparisonInput extends Model {
    /** @param array{'compared_with_payment_option': string, 'estimated_savings_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'lower_cost_payment_option': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentOptionCostComparisonInput')); }
    /** Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return string
     * @throws SdkError When compared_with_payment_option is omitted; use hasComparedWithPaymentOption() or valueOrDefault().
     */
    public function getComparedWithPaymentOption(): string { return $this->get('compared_with_payment_option'); }
    public function hasComparedWithPaymentOption(): bool { return $this->has('compared_with_payment_option'); }
    /** Estimated savings for the merchant, as a positive amount. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When estimated_savings_money is omitted; use hasEstimatedSavingsMoney() or valueOrDefault().
     */
    public function getEstimatedSavingsMoney(): mixed { return $this->get('estimated_savings_money'); }
    public function hasEstimatedSavingsMoney(): bool { return $this->has('estimated_savings_money'); }
    /** Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return string
     * @throws SdkError When lower_cost_payment_option is omitted; use hasLowerCostPaymentOption() or valueOrDefault().
     */
    public function getLowerCostPaymentOption(): string { return $this->get('lower_cost_payment_option'); }
    public function hasLowerCostPaymentOption(): bool { return $this->has('lower_cost_payment_option'); }
}
