<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $enabled_payment_options
 * @property-read list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass> $payment_option_limits
 * @property-read bool $show_cost_comparison
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentPolicyInput extends Model {
    /** @param array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>, 'show_cost_comparison'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentPolicyInput')); }
    /** Shape $ (Value): Array of string. The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". Shape $[] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit".
     * @return list<string>
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Shape $ (Value): Array of {@see InvoicePaymentOptionLimitInput}. Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: 100. Shape $[] (Value): {@see InvoicePaymentOptionLimitInput}. The largest invoice total allowed for a payment option.
     * @return list<InvoicePaymentOptionLimitInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When payment_option_limits is omitted; use hasPaymentOptionLimits() or valueOrDefault().
     */
    public function getPaymentOptionLimits(): array { return $this->get('payment_option_limits'); }
    public function hasPaymentOptionLimits(): bool { return $this->has('payment_option_limits'); }
    /** Shape $ (Value): boolean. Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay.
     * @return bool
     * @throws SdkError When show_cost_comparison is omitted; use hasShowCostComparison() or valueOrDefault().
     */
    public function getShowCostComparison(): bool { return $this->get('show_cost_comparison'); }
    public function hasShowCostComparison(): bool { return $this->has('show_cost_comparison'); }
}
