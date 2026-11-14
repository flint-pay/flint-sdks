<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'components_source'?: string, 'mode': string}|object|null $calculation
 * @property-read bool $enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionTaxInput extends Model {
    /** @param array{'calculation': array{'components_source'?: string, 'mode': string}|object|null, 'enabled': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTaxInput')); }
    /** How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. anyOf[1] (Value): {@see SubscriptionTaxCalculationInput}. Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components. anyOf[2] (Value): null.
     * @return array{'components_source'?: string, 'mode': string}|object|null
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether the subscription's orders calculate tax.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
