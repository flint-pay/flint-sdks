<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $enabled_payment_options
 * @property-read list<InvoicePaymentOptionLimitPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $payment_option_limits
 * @property-read bool|null $show_cost_comparison
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicePaymentPolicyPreviousAttributesInput extends Model {
    /** @param array{'enabled_payment_options'?: list<string>|null, 'payment_option_limits'?: list<InvoicePaymentOptionLimitPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'show_cost_comparison'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentPolicyPreviousAttributesInput')); }
    /** The payment options the buyer can use on the hosted invoice page. Send at least one. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1] (Value): Array of string. The payment options the buyer can use on the hosted invoice page. Send at least one. maxItems: 5. uniqueItems: true. [] enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[1][] (Value): string.  Value enum: "card", "apple_pay", "google_pay", "affirm", "ach_debit". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): mixed { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. anyOf[1] (Value): Array of {@see InvoicePaymentOptionLimitPreviousAttributesInput}. Caps by payment option and currency. Flint doesn't offer an option when the invoice total in that currency is above its max_total_money. maxItems: 100. anyOf[1][] (Value): {@see InvoicePaymentOptionLimitPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<InvoicePaymentOptionLimitPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When payment_option_limits is omitted; use hasPaymentOptionLimits() or valueOrDefault().
     */
    public function getPaymentOptionLimits(): mixed { return $this->get('payment_option_limits'); }
    public function hasPaymentOptionLimits(): bool { return $this->has('payment_option_limits'); }
    /** Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. anyOf[1] (Value): boolean. Whether the buyer's invoice shows the estimated savings of a lower-cost payment option. Requires ach_debit and at least one of card, apple_pay, or google_pay. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When show_cost_comparison is omitted; use hasShowCostComparison() or valueOrDefault().
     */
    public function getShowCostComparison(): mixed { return $this->get('show_cost_comparison'); }
    public function hasShowCostComparison(): bool { return $this->has('show_cost_comparison'); }
}
