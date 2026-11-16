<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $name
 * @property-read string|null $phone
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDeliveryDestinationRecipientPreviousAttributesInput extends Model {
    /** @param array{'name'?: string|null, 'phone'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestinationRecipientPreviousAttributesInput')); }
    /** Name of the person receiving the order. anyOf[1] (Value): string. Name of the person receiving the order. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Phone number for contacting the recipient about the delivery. anyOf[1] (Value): string. Phone number for contacting the recipient about the delivery. maxLength: 30. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): mixed { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
