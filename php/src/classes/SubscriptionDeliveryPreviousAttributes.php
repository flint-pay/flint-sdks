<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerificationPreviousAttributes|null $address_verification
 * @property-read SubscriptionDeliveryMethodSummaryPreviousAttributes|null $delivery_method
 * @property-read string|null $delivery_method_id
 * @property-read int|null $delivery_version
 * @property-read SubscriptionDeliveryDestinationPreviousAttributes|null $destination
 * @property-read DeliveryRecipientResourcePreviousAttributes|null $recipient
 * @property-read MoneyValuePreviousAttributes|null $shipping_money
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * @property-read string|null $updated_by
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryPreviousAttributes extends Model {
    /** @param array{'address_verification'?: mixed, 'delivery_method'?: mixed, 'delivery_method_id'?: mixed, 'delivery_version'?: mixed, 'destination'?: mixed, 'recipient'?: mixed, 'shipping_money'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'updated_by'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryPreviousAttributes')); }
    /** Address verification result stored for the destination. Omitted when none is stored. anyOf[1] (Value): {@see SubscriptionAddressVerificationPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionAddressVerificationPreviousAttributes|null
     */
    public function getAddressVerification(): SubscriptionAddressVerificationPreviousAttributes|null { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** Summary of the saved delivery method. anyOf[1] (Value): {@see SubscriptionDeliveryMethodSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionDeliveryMethodSummaryPreviousAttributes|null
     */
    public function getDeliveryMethod(): SubscriptionDeliveryMethodSummaryPreviousAttributes|null { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** ID of the delivery method for future deliveries. Flint prices it again for each renewal. anyOf[1] (Value): string. ID of the delivery method for future deliveries. Flint prices it again for each renewal. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Version of the subscription's saved delivery preference. anyOf[1] (Value): integer. Version of the subscription's saved delivery preference. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDeliveryVersion(): int|null { return $this->get('delivery_version'); }
    public function hasDeliveryVersion(): bool { return $this->has('delivery_version'); }
    /** Where future deliveries go. anyOf[1] (Value): {@see SubscriptionDeliveryDestinationPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionDeliveryDestinationPreviousAttributes|null
     */
    public function getDestination(): SubscriptionDeliveryDestinationPreviousAttributes|null { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Who receives the deliveries. Omitted when no recipient was saved. anyOf[1] (Value): {@see DeliveryRecipientResourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryRecipientResourcePreviousAttributes|null
     */
    public function getRecipient(): DeliveryRecipientResourcePreviousAttributes|null { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Delivery price for one delivery with the saved method and destination. Omitted when Flint can't price the method now. For a quoted method, the most recently paid shipping amount replaces it once one exists. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getShippingMoney(): MoneyValuePreviousAttributes|null { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** How the method delivers the items. Value enum: "shipment", "local_delivery". anyOf[1] (Value): string. How the method delivers the items. Value enum: "shipment", "local_delivery". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration". anyOf[1] (Value): string. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedBy(): string|null { return $this->get('updated_by'); }
    public function hasUpdatedBy(): bool { return $this->has('updated_by'); }
}
