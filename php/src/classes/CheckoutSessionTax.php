<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?bool $enabled
 * @property-read ?CheckoutTaxLocation $location_fixed_by_merchant
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSessionTax extends Model {
    /** @param array{'enabled'?: bool, 'location_fixed_by_merchant'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionTax')); }
    /** Shape $ (Value): boolean. Whether the session collects tax, as set when it was created.
     * @return ?bool
     */
    public function getEnabled(): ?bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** Shape $ (Value): {@see CheckoutTaxLocation}. The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. A tax location: country and postal code, with address lines, city, and state when set.
     * @return ?CheckoutTaxLocation
     */
    public function getLocationFixedByMerchant(): ?CheckoutTaxLocation { return $this->get('location_fixed_by_merchant'); }
    public function hasLocationFixedByMerchant(): bool { return $this->has('location_fixed_by_merchant'); }
}
