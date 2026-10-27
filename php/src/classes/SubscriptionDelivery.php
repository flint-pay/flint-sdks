<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?SubscriptionAddressVerification $address_verification
 * @property-read ?SubscriptionDeliveryMethodSummary $delivery_method
 * @property-read string $delivery_method_id
 * @property-read string $delivery_version
 * @property-read SubscriptionDeliveryDestination $destination
 * @property-read ?DeliveryRecipientResource $recipient
 * @property-read ?MoneyValue $shipping_money
 * @property-read string $type
 * @property-read string $updated_at
 * @property-read ?string $updated_by
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDelivery extends Model {
    /** @param array{'address_verification'?: mixed, 'delivery_method'?: mixed, 'delivery_method_id': string, 'delivery_version': string, 'destination': mixed, 'recipient'?: mixed, 'shipping_money'?: mixed, 'type': string, 'updated_at': string, 'updated_by'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDelivery')); }
    /** Shape $ (Value): {@see SubscriptionAddressVerification}. The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.
     * @return ?SubscriptionAddressVerification
     */
    public function getAddressVerification(): ?SubscriptionAddressVerification { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** Shape $ (Value): {@see SubscriptionDeliveryMethodSummary}. A short summary of a subscription's delivery method: name, description, type, and whether its price is fixed or quoted.
     * @return ?SubscriptionDeliveryMethodSummary
     */
    public function getDeliveryMethod(): ?SubscriptionDeliveryMethodSummary { return $this->get('delivery_method'); }
    public function hasDeliveryMethod(): bool { return $this->has('delivery_method'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryMethodId(): string { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): integer string. Version of the subscription's saved delivery preference. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     */
    public function getDeliveryVersion(): string { return $this->get('delivery_version'); }
    public function hasDeliveryVersion(): bool { return $this->has('delivery_version'); }
    /** Shape $ (Value): {@see SubscriptionDeliveryDestination}. The delivery address for a subscription's future shipments, with the saved customer address it came from.
     * @return SubscriptionDeliveryDestination
     */
    public function getDestination(): SubscriptionDeliveryDestination { return $this->get('destination'); }
    public function hasDestination(): bool { return $this->has('destination'); }
    /** Shape $ (Value): {@see DeliveryRecipientResource}. The person receiving a delivery selection, with optional `name`, `email`, and `phone`.
     * @return ?DeliveryRecipientResource
     */
    public function getRecipient(): ?DeliveryRecipientResource { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getShippingMoney(): ?MoneyValue { return $this->get('shipping_money'); }
    public function hasShippingMoney(): bool { return $this->has('shipping_money'); }
    /** Shape $ (Value): string.  Value enum: "shipment", "local_delivery".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string. Who last changed the delivery preference. Omitted until the preference changes after creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration".
     * @return ?string
     */
    public function getUpdatedBy(): ?string { return $this->get('updated_by'); }
    public function hasUpdatedBy(): bool { return $this->has('updated_by'); }
}
