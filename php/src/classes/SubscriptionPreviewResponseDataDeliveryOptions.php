<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?SubscriptionAddressVerification $address_verification
 * @property-read ?string $currency
 * @property-read ?list<SubscriptionDeliveryOption> $delivery_methods
 * @property-read ?Address $destination_address
 * @property-read ?list<SubscriptionPreviewError> $errors
 * @property-read ?bool $is_valid
 * @property-read string $mode
 * @property-read ?string $subscription_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPreviewResponseDataDeliveryOptions extends Model {
    /** @param array{'address_verification'?: mixed, 'currency'?: string, 'delivery_methods'?: list<mixed>, 'destination_address'?: mixed, 'errors'?: list<mixed>, 'is_valid'?: bool, 'mode': string, 'subscription_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewResponseDataDeliveryOptions')); }
    /** The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.
     * @return ?SubscriptionAddressVerification
     */
    public function getAddressVerification(): ?SubscriptionAddressVerification { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return ?string
     */
    public function getCurrency(): ?string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Present in delivery_options mode ([] when no method applies); absent in create mode. [] (Value): {@see SubscriptionDeliveryOption}. A delivery method offered for a subscription, with its availability, price, and the reason it is unavailable if it is.
     * @return ?list<SubscriptionDeliveryOption>
     */
    public function getDeliveryMethods(): ?array { return $this->get('delivery_methods'); }
    public function hasDeliveryMethods(): bool { return $this->has('delivery_methods'); }
    /** A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getDestinationAddress(): ?Address { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Present in create mode ([] when the subscription is valid); absent in delivery_options mode. [] (Value): {@see SubscriptionPreviewError}. An error found while previewing a subscription, with a `code`, message, and the parameter at fault.
     * @return ?list<SubscriptionPreviewError>
     */
    public function getErrors(): ?array { return $this->get('errors'); }
    public function hasErrors(): bool { return $this->has('errors'); }
    /** Present in create mode; absent in delivery_options mode.
     * @return ?bool
     */
    public function getIsValid(): ?bool { return $this->get('is_valid'); }
    public function hasIsValid(): bool { return $this->has('is_valid'); }
    /** Value enum: "create", "delivery_options".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** subscription_id
     * @return ?string
     */
    public function getSubscriptionId(): ?string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
