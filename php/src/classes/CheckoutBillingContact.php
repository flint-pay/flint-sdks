<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Address|null $address
 * @property-read string $name
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutBillingContact extends Model {
    /** @param array{'address': mixed, 'name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBillingContact')); }
    /**  anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getAddress(): Address|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** name
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
