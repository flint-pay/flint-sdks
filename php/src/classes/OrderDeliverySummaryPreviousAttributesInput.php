<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_method_id
 * @property-read DeliveryRecipientResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recipient
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDeliverySummaryPreviousAttributesInput extends Model {
    /** @param array{'delivery_method_id'?: string|null, 'recipient'?: DeliveryRecipientResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliverySummaryPreviousAttributesInput')); }
    /** Method used by governing_delivery_selection_id. anyOf[1] (Value): string. Method used by governing_delivery_selection_id. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): mixed { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Name, email and phone of the recipient recorded by the governing selection. anyOf[1] (Value): {@see DeliveryRecipientResourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryRecipientResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** How the governing selection delivers this order. Value enum: "shipment", "local_delivery". anyOf[1] (Value): string. How the governing selection delivers this order. Value enum: "shipment", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
