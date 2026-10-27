<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryDestinationInputAddressInput extends Model {
    /** @param array{'address': OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryDestinationInputAddressInput')); }
    /** Shape $ (Value): {@see OrderDeliveryDestinationAddressRequestInput}. The delivery address you supply on an order. Postal code and state are required for US addresses.
     * @return OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string.  Value enum: "address".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
