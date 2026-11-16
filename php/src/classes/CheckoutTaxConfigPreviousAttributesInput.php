<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $calculation
 * @property-read bool|null $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutTaxConfigPreviousAttributesInput extends Model {
    /** @param array{'calculation'?: CheckoutTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'enabled'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutTaxConfigPreviousAttributesInput')); }
    /** How the order Flint creates calculates tax while tax is enabled. Omitted when it follows `tax.default_calculation` from your settings, where a `provided` default means automatic. On a payment link update, send null to follow your settings again. anyOf[1] (Value): {@see CheckoutTaxCalculationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return CheckoutTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. anyOf[1] (Value): boolean. Whether Flint calculates tax on the order it creates for this checkout. Omit to use tax.default_enabled from your settings. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): mixed { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
