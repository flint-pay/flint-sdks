<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $enabled_payment_options
 * @property-read list<InvoicePaymentOptionLimit> $payment_option_limits
 * @property-read bool $show_cost_comparison
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoicePaymentPolicy extends Model {
    /** @param array{'enabled_payment_options': list<string>, 'payment_option_limits'?: list<mixed>, 'show_cost_comparison'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicePaymentPolicy')); }
    /** @return list<string>
     * @throws SdkError When enabled_payment_options is omitted; use hasEnabledPaymentOptions() or valueOrDefault().
     */
    public function getEnabledPaymentOptions(): array { return $this->get('enabled_payment_options'); }
    public function hasEnabledPaymentOptions(): bool { return $this->has('enabled_payment_options'); }
    /** @return list<InvoicePaymentOptionLimit>
     * @throws SdkError When payment_option_limits is omitted; use hasPaymentOptionLimits() or valueOrDefault().
     */
    public function getPaymentOptionLimits(): array { return $this->get('payment_option_limits'); }
    public function hasPaymentOptionLimits(): bool { return $this->has('payment_option_limits'); }
    /** @return bool
     * @throws SdkError When show_cost_comparison is omitted; use hasShowCostComparison() or valueOrDefault().
     */
    public function getShowCostComparison(): bool { return $this->get('show_cost_comparison'); }
    public function hasShowCostComparison(): bool { return $this->has('show_cost_comparison'); }
}
