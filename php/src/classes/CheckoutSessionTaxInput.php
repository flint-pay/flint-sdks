<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $enabled
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $location_fixed_by_merchant
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSessionTaxInput extends Model {
    /** @param array{'enabled'?: bool, 'location_fixed_by_merchant'?: AddressInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSessionTaxInput')); }
    /** Whether the session collects tax, as set when it was created.
     * @return bool
     * @throws SdkError When enabled is omitted; use hasEnabled() or valueOrDefault().
     */
    public function getEnabled(): bool { return $this->get('enabled'); }
    public function hasEnabled(): bool { return $this->has('enabled'); }
    /** The tax location your order already held when this session was created over it. Hosted checkout shows it and does not ask the buyer for another. Omitted when the buyer may give or change the location. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When location_fixed_by_merchant is omitted; use hasLocationFixedByMerchant() or valueOrDefault().
     */
    public function getLocationFixedByMerchant(): mixed { return $this->get('location_fixed_by_merchant'); }
    public function hasLocationFixedByMerchant(): bool { return $this->has('location_fixed_by_merchant'); }
}
