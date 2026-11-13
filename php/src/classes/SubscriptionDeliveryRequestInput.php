<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_method_id
 * @property-read SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass $destination
 * @property-read DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryRequestInput extends Model {
    /** @param array{'delivery_method_id': string, 'destination': SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass, 'recipient'?: DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryRequestInput')); }
    /** ID of the delivery method to use. The subscription's plan must offer it. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Where to deliver future shipments. Where to deliver a subscription: a saved customer address by ID, or a new address.
     * @return SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Who receives the deliveries. Recipient details you supply with a delivery selection or subscription delivery: optional `name`, `email`, and `phone`.
     * @return DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** How the method delivers the items. Must match the method's type. Value enum: "shipment", "local_delivery".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
