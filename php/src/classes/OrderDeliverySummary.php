<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read ?DeliveryRecipientResource $recipient
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class OrderDeliverySummary extends Model {
    /** @param array{'delivery_method_id': string, 'recipient'?: mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliverySummary')); }
    /** Method used by governing_delivery_selection_id.
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Name, email and phone of the recipient recorded by the governing selection. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return ?DeliveryRecipientResource
     */
    public function getRecipient(): ?DeliveryRecipientResource { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** How the governing selection delivers this order. Value enum: "shipment", "local_delivery".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
