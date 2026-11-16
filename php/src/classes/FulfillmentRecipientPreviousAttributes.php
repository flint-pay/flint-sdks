<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $email
 * @property-read string|null $instructions
 * @property-read string|null $name
 * @property-read string|null $phone
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentRecipientPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'email'?: mixed, 'instructions'?: mixed, 'name'?: mixed, 'phone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentRecipientPreviousAttributes')); }
    /** Postal address where the recipient receives the items. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Recipient's contact email address. anyOf[1] (Value): string. Recipient's contact email address. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. anyOf[1] (Value): string. Instructions for handling the recipient's order. For a pickup that checkout creates, this is the note the buyer left for the store, such as the car to look for. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInstructions(): string|null { return $this->get('instructions'); }
    public function hasInstructions(): bool { return $this->has('instructions'); }
    /** Recipient's name for delivery or pickup. anyOf[1] (Value): string. Recipient's name for delivery or pickup. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Recipient's contact phone number. anyOf[1] (Value): string. Recipient's contact phone number. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
