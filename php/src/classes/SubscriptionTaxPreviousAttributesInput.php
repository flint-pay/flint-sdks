<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $calculation
 * @property-read bool|null $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionTaxPreviousAttributesInput extends Model {
    /** @param array{'calculation'?: SubscriptionTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'enabled'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTaxPreviousAttributesInput')); }
    /** How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. anyOf[1] (Value): ({@see SubscriptionTaxCalculationPreviousAttributesInput} or null). How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. anyOf[1].anyOf[1] (Value): {@see SubscriptionTaxCalculationPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return SubscriptionTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether the subscription's orders calculate tax. anyOf[1] (Value): boolean. Whether the subscription's orders calculate tax. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): mixed { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
