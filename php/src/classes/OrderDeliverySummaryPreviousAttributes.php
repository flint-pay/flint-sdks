<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_method_id
 * @property-read DeliveryRecipientResourcePreviousAttributes|null $recipient
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class OrderDeliverySummaryPreviousAttributes extends Model {
    /** @param array{'delivery_method_id'?: mixed, 'recipient'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliverySummaryPreviousAttributes')); }
    /** Method used by governing_delivery_selection_id. anyOf[1] (Value): string. Method used by governing_delivery_selection_id. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Name, email and phone of the recipient recorded by the governing selection. anyOf[1] (Value): {@see DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryRecipientResourcePreviousAttributes|null
     */
    public function getRecipient(): DeliveryRecipientResourcePreviousAttributes|null { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** How the governing selection delivers this order. Value enum: "shipment", "local_delivery". anyOf[1] (Value): string. How the governing selection delivers this order. Value enum: "shipment", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
