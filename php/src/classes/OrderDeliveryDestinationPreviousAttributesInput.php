<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $address
 * @property-read string|null $delivery_selection_id
 * @property-read string|\DateTimeInterface|null $frozen_at
 * @property-read OrderDeliveryDestinationRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recipient
 * @property-read string|null $source
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDeliveryDestinationPreviousAttributesInput extends Model {
    /** @param array{'address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'delivery_selection_id'?: string|null, 'frozen_at'?: string|\DateTimeInterface|null, 'recipient'?: OrderDeliveryDestinationRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'source'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliveryDestinationPreviousAttributesInput')); }
    /** Address the order's items are delivered to. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Delivery selection that controls this destination, when checkout collected it. anyOf[1] (Value): string. Delivery selection that controls this destination, when checkout collected it. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): mixed { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Time payment froze this destination. anyOf[1] (Value): string. Time payment froze this destination. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When frozen_at is omitted; use hasFrozenAt() or valueOrDefault().
     */
    public function getFrozenAt(): mixed { return $this->get('frozen_at'); }
    public function hasFrozenAt(): bool { return $this->has('frozen_at'); }
    /** Who receives the order. Omitted when no recipient was saved. anyOf[1] (Value): {@see OrderDeliveryDestinationRecipientPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return OrderDeliveryDestinationRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Where the destination came from. Value enum: "delivery_selection", "api", "dashboard". anyOf[1] (Value): string. Where the destination came from. Value enum: "delivery_selection", "api", "dashboard". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
