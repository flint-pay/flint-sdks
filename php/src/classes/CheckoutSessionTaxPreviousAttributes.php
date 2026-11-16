<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutTaxCalculationPreviousAttributes|null $calculation
 * @property-read bool|null $enabled
 * @property-read AddressPreviousAttributes|null $location_fixed_by_merchant
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionTaxPreviousAttributes extends Model {
    /** @param array{'calculation'?: mixed, 'enabled'?: mixed, 'location_fixed_by_merchant'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionTaxPreviousAttributes')); }
    /** The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. anyOf[1] (Value): {@see CheckoutTaxCalculationPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutTaxCalculationPreviousAttributes|null
     */
    public function getCalculation(): CheckoutTaxCalculationPreviousAttributes|null { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether the session collects tax, as set when it was created. anyOf[1] (Value): boolean. Whether the session collects tax, as set when it was created. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getEnabled(): bool|null { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getLocationFixedByMerchant(): AddressPreviousAttributes|null { return $this->get('location_fixed_by_merchant'); }
    public function hasLocationFixedByMerchant(): bool { return $this->has('location_fixed_by_merchant'); }
}
