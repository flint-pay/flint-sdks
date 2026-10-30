<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $name
 * @property-read ?string $phone
 * Presence-aware response; omitted optional fields return null. */
final class OrderDeliveryDestinationRecipient extends Model {
    /** @param array{'name'?: string, 'phone'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestinationRecipient')); }
    /** maxLength: 255.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** maxLength: 30.
     * @return ?string
     */
    public function getPhone(): ?string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
