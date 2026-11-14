<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutTaxCalculationInput|array<array-key, mixed>|\stdClass $calculation
 * @property-read bool $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutTaxConfigInput extends Model {
    /** @param array{'calculation'?: CheckoutTaxCalculationInput|array<array-key, mixed>|\stdClass, 'enabled'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTaxConfigInput')); }
    /** How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here.
     * @return CheckoutTaxCalculationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
