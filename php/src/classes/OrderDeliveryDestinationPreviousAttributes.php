<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $delivery_selection_id
 * @property-read string|null $frozen_at
 * @property-read OrderDeliveryDestinationRecipientPreviousAttributes|null $recipient
 * @property-read string|null $source
 * Presence-aware response; omitted optional fields return null. */
final class OrderDeliveryDestinationPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'delivery_selection_id'?: mixed, 'frozen_at'?: mixed, 'recipient'?: mixed, 'source'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestinationPreviousAttributes')); }
    /** Address the order's items are delivered to. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Delivery selection that controls this destination, when checkout collected it. anyOf[1] (Value): string. Delivery selection that controls this destination, when checkout collected it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliverySelectionId(): string|null { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Time payment froze this destination. anyOf[1] (Value): string. Time payment froze this destination. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFrozenAt(): string|null { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** Who receives the order. Omitted when no recipient was saved. anyOf[1] (Value): {@see OrderDeliveryDestinationRecipientPreviousAttributes}. anyOf[2] (Value): null.
     * @return OrderDeliveryDestinationRecipientPreviousAttributes|null
     */
    public function getRecipient(): OrderDeliveryDestinationRecipientPreviousAttributes|null { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Where the destination came from. Value enum: "delivery_selection", "api", "dashboard". anyOf[1] (Value): string. Where the destination came from. Value enum: "delivery_selection", "api", "dashboard". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSource(): string|null { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
