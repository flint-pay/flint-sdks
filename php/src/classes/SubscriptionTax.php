<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionTaxCalculation|null $calculation
 * @property-read bool $enabled
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionTax extends Model {
    /** @param array{'calculation': mixed, 'enabled': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionTax')); }
    /** How the subscription's orders calculate tax. `null` when they use `tax.default_calculation` from your settings, where a `provided` default means automatic. anyOf[1] (Value): {@see SubscriptionTaxCalculation}. Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your tax connection. `external` takes the tax your tax calculation callback returns, and requires `components_source: callback`, because Flint creates the subscription's orders and nobody can send their components. anyOf[2] (Value): null.
     * @return SubscriptionTaxCalculation|null
     */
    public function getCalculation(): SubscriptionTaxCalculation|null { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether the subscription's orders calculate tax.
     * @return bool
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
}
