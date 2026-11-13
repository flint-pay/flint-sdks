<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CheckoutTaxCalculation $calculation
 * @property-read ?bool $enabled
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutTaxConfig extends Model {
    /** @param array{'calculation'?: mixed, 'enabled'?: bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTaxConfig')); }
    /** How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. The calculation the order Flint creates uses while tax is enabled. Replaced as a whole: send every field you want to keep. Omit it to use `tax.default_calculation` from your settings; a `provided` default applies only to orders you create, so it means automatic here.
     * @return ?CheckoutTaxCalculation
     */
    public function getCalculation(): ?CheckoutTaxCalculation { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings.
     * @return ?bool
     */
    public function getEnabled(): ?bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
