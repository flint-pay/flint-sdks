<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read string $destination_type
 * @property-read ?string $name
 * Presence-aware response; omitted optional fields return null. */
final class BuyerReturnHandoffDestination extends Model {
    /** @param array{'address'?: mixed, 'destination_type': string, 'name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnHandoffDestination')); }
    /** Shape $ (Value): {@see Address}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string.  Value enum: "buyer_address", "location", "external_location".
     * @return string
     */
    public function getDestinationType(): string { return $this->get('destination_type'); }
    public function hasDestinationType(): bool { return $this->has('destination_type'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
