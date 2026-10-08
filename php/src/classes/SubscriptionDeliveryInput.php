<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass $address_verification
 * @property-read SubscriptionDeliveryMethodSummaryInput|array<array-key, mixed>|\stdClass $delivery_method
 * @property-read string $delivery_method_id
 * @property-read SubscriptionDeliveryDestinationInput|array<array-key, mixed>|\stdClass $destination
 * @property-read DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string $revision
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $shipping_money
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryInput extends Model {
    /** @param array{'address_verification'?: SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass, 'delivery_method'?: SubscriptionDeliveryMethodSummaryInput|array<array-key, mixed>|\stdClass, 'delivery_method_id': string, 'destination': SubscriptionDeliveryDestinationInput|array<array-key, mixed>|\stdClass, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'revision': string, 'shipping_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryInput')); }
    /** @return SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address_verification is omitted; use hasAddressVerification() or valueOrDefault().
     */
    public function getAddressVerification(): mixed { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** @return SubscriptionDeliveryMethodSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_method is omitted; use hasDeliveryMethod() or valueOrDefault().
     */
    public function getDeliveryMethod(): mixed { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return SubscriptionDeliveryDestinationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** @return DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When revision is omitted; use hasRevision() or valueOrDefault().
     */
    public function getRevision(): string { return $this->get('revision'); }
    public function hasRevision(): bool { return $this->has('revision'); }
    /** @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): mixed { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
