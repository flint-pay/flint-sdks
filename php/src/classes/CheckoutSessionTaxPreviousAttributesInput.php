<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $calculation
 * @property-read bool|null $enabled
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $location_fixed_by_merchant
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionTaxPreviousAttributesInput extends Model {
    /** @param array{'calculation'?: CheckoutTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'enabled'?: bool|null, 'location_fixed_by_merchant'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionTaxPreviousAttributesInput')); }
    /** The calculation the session's order uses, as set when the session was created. Omitted when the session followed `tax.default_calculation` from your settings; read `tax` on the order for what it uses. anyOf[1] (Value): {@see CheckoutTaxCalculationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return CheckoutTaxCalculationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When calculation is omitted; use hasCalculation() or valueOrDefault().
     */
    public function getCalculation(): mixed { return $this->get('calculation'); }
    public function hasCalculation(): bool { return $this->has('calculation'); }
    /** Whether the session collects tax, as set when it was created. anyOf[1] (Value): boolean. Whether the session collects tax, as set when it was created. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): mixed { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When location_fixed_by_merchant is omitted; use hasLocationFixedByMerchant() or valueOrDefault().
     */
    public function getLocationFixedByMerchant(): mixed { return $this->get('location_fixed_by_merchant'); }
    public function hasLocationFixedByMerchant(): bool { return $this->has('location_fixed_by_merchant'); }
}
