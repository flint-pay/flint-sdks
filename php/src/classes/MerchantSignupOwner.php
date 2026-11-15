<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * @property-read string $first_name
 * @property-read string $last_name
 * Presence-aware response; omitted optional fields return null. */
final class MerchantSignupOwner extends Model {
    /** @param array{'email': string, 'first_name': string, 'last_name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupOwner')); }
    /** The owner's email address, lowercased, at most 254 characters. Flint emails the code here, and it becomes the new merchant's account email and the owner's Flint login. Send an address the owner gave you, never one on a domain you control.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** The owner's first name, 1 to 100 characters. It becomes the Flint user's first name when Flint creates the user.
     * @return string
     */
    public function getFirstName(): string { return $this->get('first_name'); }
    public function hasFirstName(): bool { return $this->has('first_name'); }
    /** The owner's last name, 1 to 100 characters. It becomes the Flint user's last name when Flint creates the user.
     * @return string
     */
    public function getLastName(): string { return $this->get('last_name'); }
    public function hasLastName(): bool { return $this->has('last_name'); }
}
