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
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return SubscriptionDeliveryDestinationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** @return DeliverySelectionRecipientRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
