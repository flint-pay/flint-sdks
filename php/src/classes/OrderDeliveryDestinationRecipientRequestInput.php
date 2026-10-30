<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $name
 * @property-read string|null $phone
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDeliveryDestinationRecipientRequestInput extends Model {
    /** @param array{'name'?: string|null, 'phone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestinationRecipientRequestInput')); }
    /** Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Send null to clear it. minLength: 1. maxLength: 30.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}
