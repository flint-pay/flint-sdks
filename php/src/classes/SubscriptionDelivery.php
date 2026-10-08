<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerification $address_verification
 * @property-read SubscriptionDeliveryMethodSummary $delivery_method
 * @property-read string $delivery_method_id
 * @property-read SubscriptionDeliveryDestination $destination
 * @property-read DeliveryRecipientResource $recipient
 * @property-read string $revision
 * @property-read MoneyValue $shipping_money
 * @property-read string $type
 * @property-read string $updated_at
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionDelivery extends Model {
    /** @param array{'address_verification'?: mixed, 'delivery_method'?: mixed, 'delivery_method_id': string, 'destination': mixed, 'recipient'?: mixed, 'revision': string, 'shipping_money'?: mixed, 'type': string, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDelivery')); }
    /** @return SubscriptionAddressVerification
     * @throws SdkError When address_verification is omitted; use hasAddressVerification() or valueOrDefault().
     */
    public function getAddressVerification(): SubscriptionAddressVerification { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** @return SubscriptionDeliveryMethodSummary
     * @throws SdkError When delivery_method is omitted; use hasDeliveryMethod() or valueOrDefault().
     */
    public function getDeliveryMethod(): SubscriptionDeliveryMethodSummary { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** @return SubscriptionDeliveryDestination
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): SubscriptionDeliveryDestination { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** @return DeliveryRecipientResource
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): DeliveryRecipientResource { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When revision is omitted; use hasRevision() or valueOrDefault().
     */
    public function getRevision(): string { return $this->get('revision'); }
    public function hasRevision(): bool { return $this->has('revision'); }
    /** @return MoneyValue
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): MoneyValue { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
