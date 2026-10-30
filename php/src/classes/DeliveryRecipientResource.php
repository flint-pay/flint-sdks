<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $email
 * @property-read ?string $name
 * @property-read ?string $phone
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRecipientResource extends Model {
    /** @param array{'email'?: string, 'name'?: string, 'phone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRecipientResource')); }
    /** email
     * @return ?string
     */
    public function getEmail(): ?string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** phone
     * @return ?string
     */
    public function getPhone(): ?string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
