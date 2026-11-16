<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionTaxCalculationPreviousAttributes|null $calculation
 * @property-read bool|null $enabled
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionTaxPreviousAttributes extends Model {
    /** @param array{'calculation'?: mixed, 'enabled'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTaxPreviousAttributes')); }
    /** How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. anyOf[1] (Value): {@see SubscriptionTaxCalculationPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionTaxCalculationPreviousAttributes|null
     */
    public function getCalculation(): SubscriptionTaxCalculationPreviousAttributes|null { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether the subscription's orders calculate tax. anyOf[1] (Value): boolean. Whether the subscription's orders calculate tax. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getEnabled(): bool|null { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
