<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Address $address
 * @property-read ?string $delivery_selection_id
 * @property-read ?string $frozen_at
 * @property-read ?OrderDeliveryDestinationRecipient $recipient
 * @property-read string $source
 * Presence-aware response; omitted optional fields return null. */
final class OrderDeliveryDestination extends Model {
    /** @param array{'address': mixed, 'delivery_selection_id'?: string, 'frozen_at'?: string, 'recipient'?: mixed, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestination')); }
    /** Shape $ (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return Address
     */
    public function getAddress(): Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string. Delivery selection that controls this destination, when checkout collected it.
     * @return ?string
     */
    public function getDeliverySelectionId(): ?string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Shape $ (Value): string. Time payment froze this destination. Format: date-time.
     * @return ?string
     */
    public function getFrozenAt(): ?string { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** Shape $ (Value): {@see OrderDeliveryDestinationRecipient}. The name and phone number of the person receiving an order delivery.
     * @return ?OrderDeliveryDestinationRecipient
     */
    public function getRecipient(): ?OrderDeliveryDestinationRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): string.  Value enum: "delivery_selection", "api", "dashboard".
     * @return string
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
