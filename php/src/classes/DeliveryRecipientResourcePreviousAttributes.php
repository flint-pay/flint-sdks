<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read string|null $name
 * @property-read string|null $phone
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRecipientResourcePreviousAttributes extends Model {
    /** @param array{'email'?: mixed, 'name'?: mixed, 'phone'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRecipientResourcePreviousAttributes')); }
    /** Email address for contacting the recipient about delivery. anyOf[1] (Value): string. Email address for contacting the recipient about delivery. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Name of the person receiving or collecting the items. anyOf[1] (Value): string. Name of the person receiving or collecting the items. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Phone number for contacting the recipient about delivery. anyOf[1] (Value): string. Phone number for contacting the recipient about delivery. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
