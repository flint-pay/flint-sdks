<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrderDeliveryDestinationAddress $address
 * @property-read string $delivery_selection_id
 * @property-read string $frozen_at
 * @property-read OrderDeliveryDestinationRecipient $recipient
 * @property-read string $source
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderDeliveryDestination extends Model {
    /** @param array{'address': mixed, 'delivery_selection_id'?: string, 'frozen_at'?: string, 'recipient'?: mixed, 'source': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestination')); }
    /** @return OrderDeliveryDestinationAddress
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): OrderDeliveryDestinationAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): string { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** @return string
     * @throws SdkError When frozen_at is omitted; use hasFrozenAt() or valueOrDefault().
     */
    public function getFrozenAt(): string { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** @return OrderDeliveryDestinationRecipient
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): OrderDeliveryDestinationRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
