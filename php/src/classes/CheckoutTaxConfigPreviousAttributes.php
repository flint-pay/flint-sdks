<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutTaxCalculationPreviousAttributes|null $calculation
 * @property-read bool|null $enabled
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutTaxConfigPreviousAttributes extends Model {
    /** @param array{'calculation'?: mixed, 'enabled'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTaxConfigPreviousAttributes')); }
    /** How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. anyOf[1] (Value): {@see CheckoutTaxCalculationPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutTaxCalculationPreviousAttributes|null
     */
    public function getCalculation(): CheckoutTaxCalculationPreviousAttributes|null { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. anyOf[1] (Value): boolean. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getEnabled(): bool|null { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
