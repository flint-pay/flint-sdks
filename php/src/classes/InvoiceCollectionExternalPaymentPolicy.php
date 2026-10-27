<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $enabled_payment_options
 * @property-read ?list<InvoiceCollectionExternalPaymentPolicyPaymentOptionLimitsItem> $payment_option_limits
 * @property-read ?bool $show_cost_comparison
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceCollectionExternalPaymentPolicy extends Model {
    /** @param array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<mixed>, 'show_cost_comparison'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceCollectionExternalPaymentPolicy')); }
    /** Shape $ (Value): Array of string. maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Shape $ (Value): Array of ({@see InvoiceCollectionExternalPaymentPolicyPaymentOptionLimitsItem} and {@see InvoicePaymentOptionLimit}). maxItems: 100. Shape $[] (Value): {@see InvoiceCollectionExternalPaymentPolicyPaymentOptionLimitsItem}. The largest invoice total allowed for a payment option.
     * @return ?list<InvoiceCollectionExternalPaymentPolicyPaymentOptionLimitsItem>
     */
    public function getPaymentOptionLimits(): ?array { return $this->get('payment_option_limits'); }
    public function hasPaymentOptionLimits(): bool { return $this->has('payment_option_limits'); }
    /** Shape $ (Value): boolean.
     * @return ?bool
     */
    public function getShowCostComparison(): ?bool { return $this->get('show_cost_comparison'); }
    public function hasShowCostComparison(): bool { return $this->has('show_cost_comparison'); }
}
