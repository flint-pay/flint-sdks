<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerificationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $address_verification
 * @property-read SubscriptionDeliveryMethodSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $delivery_method
 * @property-read string|null $delivery_method_id
 * @property-read int|null $delivery_version
 * @property-read SubscriptionDeliveryDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $destination
 * @property-read DeliveryRecipientResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recipient
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shipping_money
 * @property-read string|null $type
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read string|null $updated_by
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryPreviousAttributesInput extends Model {
    /** @param array{'address_verification'?: SubscriptionAddressVerificationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'delivery_method'?: SubscriptionDeliveryMethodSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'delivery_method_id'?: string|null, 'delivery_version'?: int|null, 'destination'?: SubscriptionDeliveryDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'recipient'?: DeliveryRecipientResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'shipping_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'type'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'updated_by'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryPreviousAttributesInput')); }
    /** Address verification result stored for the destination. Omitted when none is stored. anyOf[1] (Value): {@see SubscriptionAddressVerificationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SubscriptionAddressVerificationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When address_verification is omitted; use hasAddressVerification() or valueOrDefault().
     */
    public function getAddressVerification(): mixed { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** Summary of the saved delivery method. anyOf[1] (Value): {@see SubscriptionDeliveryMethodSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SubscriptionDeliveryMethodSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When delivery_method is omitted; use hasDeliveryMethod() or valueOrDefault().
     */
    public function getDeliveryMethod(): mixed { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** ID of the delivery method for future deliveries. Flint prices it again for each renewal. anyOf[1] (Value): string. ID of the delivery method for future deliveries. Flint prices it again for each renewal. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): mixed { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Version of the subscription's saved delivery preference. anyOf[1] (Value): integer. Version of the subscription's saved delivery preference. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When delivery_version is omitted; use hasDeliveryVersion() or valueOrDefault().
     */
    public function getDeliveryVersion(): mixed { return $this->get('delivery_version'); }
    public function hasDeliveryVersion(): bool { return $this->has('delivery_version'); }
    /** Where future deliveries go. anyOf[1] (Value): {@see SubscriptionDeliveryDestinationPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SubscriptionDeliveryDestinationPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When destination is omitted; use hasDestination() or valueOrDefault().
     */
    public function getDestination(): mixed { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Who receives the deliveries. Omitted when no recipient was saved. anyOf[1] (Value): {@see DeliveryRecipientResourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryRecipientResourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Delivery price for one delivery with the saved method and destination. Omitted when Flint can't price the method now. For a quoted method, the most recently paid shipping amount replaces it once one exists. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shipping_money is omitted; use hasShippingMoney() or valueOrDefault().
     */
    public function getShippingMoney(): mixed { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** How the method delivers the items. Value enum: "shipment", "local_delivery". anyOf[1] (Value): string. How the method delivers the items. Value enum: "shipment", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration". anyOf[1] (Value): string. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When updated_by is omitted; use hasUpdatedBy() or valueOrDefault().
     */
    public function getUpdatedBy(): mixed { return $this->get('updated_by'); }
    public function hasUpdatedBy(): bool { return $this->has('updated_by'); }
}
