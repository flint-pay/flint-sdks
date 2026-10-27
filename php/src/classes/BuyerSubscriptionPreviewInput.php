<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass $address_verification
 * @property-read string $currency
 * @property-read list<SubscriptionDeliveryOptionInput|array<array-key, mixed>|\stdClass> $delivery_methods
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $destination_address
 * @property-read string $mode
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSubscriptionPreviewInput extends Model {
    /** @param array{'address_verification'?: SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass, 'currency'?: string, 'delivery_methods'?: list<SubscriptionDeliveryOptionInput|array<array-key, mixed>|\stdClass>, 'destination_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'mode': string, 'subscription_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionPreviewInput')); }
    /** Shape $ (Value): {@see SubscriptionAddressVerificationInput}. The verification state of a subscription's delivery address: `verified`, `unverified`, `needs_review`, or `unverifiable`.
     * @return SubscriptionAddressVerificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address_verification is omitted; use hasAddressVerification() or valueOrDefault().
     */
    public function getAddressVerification(): mixed { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): Array of {@see SubscriptionDeliveryOptionInput}. Present in delivery_options mode ([] when no method applies); absent in create mode. Shape $[] (Value): {@see SubscriptionDeliveryOptionInput}. A delivery method offered for a subscription, with its availability, price, and the reason it is unavailable if it is.
     * @return list<SubscriptionDeliveryOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When delivery_methods is omitted; use hasDeliveryMethods() or valueOrDefault().
     */
    public function getDeliveryMethods(): array { return $this->get('delivery_methods'); }
    public function hasDeliveryMethods(): bool { return $this->has('delivery_methods'); }
    /** Shape $ (Value): {@see AddressInput}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): mixed { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** Shape $ (Value): string. Always delivery_options for buyer previews. Value enum: "delivery_options".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
