<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read ?string $email
 * @property-read ?string $instructions
 * @property-read ?string $name
 * @property-read ?string $phone
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentRecipient extends Model {
    /** @param array{'address'?: mixed, 'email'?: string, 'instructions'?: string, 'name'?: string, 'phone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentRecipient')); }
    /** Shape $ (Value): {@see Address}. Postal address where the recipient receives the items. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string. Recipient's contact email address.
     * @return ?string
     */
    public function getEmail(): ?string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string. Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for.
     * @return ?string
     */
    public function getInstructions(): ?string { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Shape $ (Value): string. Recipient's name for delivery or pickup.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Recipient's contact phone number.
     * @return ?string
     */
    public function getPhone(): ?string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
