<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $role
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $suggested_address
 * @property-read string $verification_state
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryAddressAdvisoryResourceInput extends Model {
    /** @param array{'role': string, 'suggested_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'verification_state': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryAddressAdvisoryResourceInput')); }
    /** Value enum: "destination_address", "buyer_location".
     * @return string
     * @throws SdkError When role is omitted; use hasRole() or valueOrDefault().
     */
    public function getRole(): string { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When suggested_address is omitted; use hasSuggestedAddress() or valueOrDefault().
     */
    public function getSuggestedAddress(): mixed { return $this->get('suggested_address'); }
    public function hasSuggestedAddress(): bool { return $this->has('suggested_address'); }
    /** Value enum: "needs_review", "unverifiable".
     * @return string
     * @throws SdkError When verification_state is omitted; use hasVerificationState() or valueOrDefault().
     */
    public function getVerificationState(): string { return $this->get('verification_state'); }
    public function hasVerificationState(): bool { return $this->has('verification_state'); }
}
