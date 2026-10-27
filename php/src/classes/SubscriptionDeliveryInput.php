<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass $address_verification
 * @property-read SubscriptionDeliveryMethodSummaryInput|array<array-key, mixed>|\stdClass $delivery_method
 * @property-read string $delivery_method_id
 * @property-read string $delivery_version
 * @property-read SubscriptionDeliveryDestinationInput|array<array-key, mixed>|\stdClass $destination
 * @property-read DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $shipping_money
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $updated_by
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryInput extends Model {
    /** @param array{'address_verification'?: SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass, 'delivery_method'?: SubscriptionDeliveryMethodSummaryInput|array<array-key, mixed>|\stdClass, 'delivery_method_id': string, 'delivery_version': string, 'destination': SubscriptionDeliveryDestinationInput|array<array-key, mixed>|\stdClass, 'recipient'?: DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass, 'shipping_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'type': string, 'updated_at': string|\DateTimeInterface, 'updated_by'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryInput')); }
    /** Shape $ (Value): {@see SubscriptionAddressVerificationInput}. The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.
     * @return SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address_verification is omitted; use hasAddressVerification() or valueOrDefault().
     */
    public function getAddressVerification(): mixed { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** Shape $ (Value): {@see SubscriptionDeliveryMethodSummaryInput}. A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted.
     * @return SubscriptionDeliveryMethodSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_method is omitted; use hasDeliveryMethod() or valueOrDefault().
     */
    public function getDeliveryMethod(): mixed { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): integer string. Version of the subscription's saved delivery preference. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When delivery_version is omitted; use hasDeliveryVersion() or valueOrDefault().
     */
    public function getDeliveryVersion(): string { return $this->get('delivery_version'); }
    public function hasDeliveryVersion(): bool { return $this->has('delivery_version'); }
    /** Shape $ (Value): {@see SubscriptionDeliveryDestinationInput}. The delivery address for a subscription's future shipments, with the saved customer address it came from.
     * @return SubscriptionDeliveryDestinationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Shape $ (Value): {@see DeliveryRecipientResourceInput}. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return DeliveryRecipientResourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): mixed { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration".
     * @return string
     * @throws SdkError When updated_by is omitted; use hasUpdatedBy() or valueOrDefault().
     */
    public function getUpdatedBy(): string { return $this->get('updated_by'); }
    public function hasUpdatedBy(): bool { return $this->has('updated_by'); }
}
