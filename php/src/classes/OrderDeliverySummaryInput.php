<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderDeliverySummaryInput extends Model {
    /** @param array{'delivery_method_id': string, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderDeliverySummaryInput')); }
    /** Method used by governing_delivery_selection_id. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Name, email and phone of the recipient recorded by the governing selection. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** How the governing selection delivers this order. Value enum: "shipment", "local_delivery".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
