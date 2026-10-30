<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $enabled_payment_options
 * @property-read ?list<InvoiceCreatedMerchantEventDataObjectCollectionExternalPaymentPolicyPaymentOptionLimitsItem> $payment_option_limits
 * @property-read ?bool $show_cost_comparison
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceCreatedMerchantEventDataObjectCollectionExternalPaymentPolicy extends Model {
    /** @param array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<mixed>, 'show_cost_comparison'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCreatedMerchantEventDataObjectCollectionExternalPaymentPolicy')); }
    /** The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". [] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: 100. [] (Value): {@see InvoiceCreatedMerchantEventDataObjectCollectionExternalPaymentPolicyPaymentOptionLimitsItem}. The largest invoice total allowed for a payment option.
     * @return ?list<InvoiceCreatedMerchantEventDataObjectCollectionExternalPaymentPolicyPaymentOptionLimitsItem>
     */
    public function getPaymentOptionLimits(): ?array { return $this->get('payment_option_limits'); }
    public function hasPaymentOptionLimits(): bool { return $this->has('payment_option_limits'); }
    /** Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay.
     * @return ?bool
     */
    public function getShowCostComparison(): ?bool { return $this->get('show_cost_comparison'); }
    public function hasShowCostComparison(): bool { return $this->has('show_cost_comparison'); }
}
