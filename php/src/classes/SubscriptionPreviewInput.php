<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass $address_verification
 * @property-read string $currency
 * @property-read list<SubscriptionDeliveryOptionInput|array<array-key, mixed>|\stdClass> $delivery_methods
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read list<SubscriptionPreviewErrorInput|array<array-key, mixed>|\stdClass> $errors
 * @property-read bool $is_valid
 * @property-read string $mode
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPreviewInput extends Model {
    /** @param array{'address_verification'?: SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass, 'currency'?: string, 'delivery_methods'?: list<SubscriptionDeliveryOptionInput|array<array-key, mixed>|\stdClass>, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'errors'?: list<SubscriptionPreviewErrorInput|array<array-key, mixed>|\stdClass>, 'is_valid'?: bool, 'mode': string, 'subscription_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewInput')); }
    /** The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.
     * @return SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address_verification is omitted; use hasAddressVerification() or valueOrDefault().
     */
    public function getAddressVerification(): mixed { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Present in delivery_options mode ([] when no method applies); absent in create mode. [] (Value): {@see SubscriptionDeliveryOptionInput}. A delivery method offered for a subscription, with its availability, price, and the reason it is unavailable if it is.
     * @return list<SubscriptionDeliveryOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When delivery_methods is omitted; use hasDeliveryMethods() or valueOrDefault().
     */
    public function getDeliveryMethods(): array { return $this->get('delivery_methods'); }
    public function hasDeliveryMethods(): bool { return $this->has('delivery_methods'); }
    /** A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Present in create mode ([] when the subscription is valid); absent in delivery_options mode. [] (Value): {@see SubscriptionPreviewErrorInput}. An error found while previewing a subscription, with a `code`, message, and the parameter at fault.
     * @return list<SubscriptionPreviewErrorInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When errors is omitted; use hasErrors() or valueOrDefault().
     */
    public function getErrors(): array { return $this->get('errors'); }
    public function hasErrors(): bool { return $this->has('errors'); }
    /** Present in create mode; absent in delivery_options mode.
     * @return bool
     * @throws SdkError When is_valid is omitted; use hasIsValid() or valueOrDefault().
     */
    public function getIsValid(): bool { return $this->get('is_valid'); }
    public function hasIsValid(): bool { return $this->has('is_valid'); }
    /** Value enum: "create", "delivery_options".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** subscription_id
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
