<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass $recipient
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDeliveryDestinationRequestInput extends Model {
    /** @param array{'address': OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestinationRequestInput')); }
    /** @return OrderDeliveryDestinationAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return OrderDeliveryDestinationRecipientRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
}
