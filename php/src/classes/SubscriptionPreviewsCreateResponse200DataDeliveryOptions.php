<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read SubscriptionAddressVerification $address_verification
 * @property-read string $currency
 * @property-read list<SubscriptionDeliveryOption> $delivery_methods
 * @property-read PostalAddress $destination_address
 * @property-read list<SubscriptionPreviewError> $errors
 * @property-read bool $is_valid
 * @property-read string $mode
 * @property-read string $subscription_id
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionPreviewsCreateResponse200DataDeliveryOptions extends Model {
    /** @param array{'address_verification'?: mixed, 'currency'?: string, 'delivery_methods'?: list<mixed>, 'destination_address'?: mixed, 'errors'?: list<mixed>, 'is_valid'?: bool, 'mode': string, 'subscription_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPreviewsCreateResponse200DataDeliveryOptions')); }
    /** @return SubscriptionAddressVerification
     * @throws SdkError When address_verification is omitted; use hasAddressVerification() or valueOrDefault().
     */
    public function getAddressVerification(): SubscriptionAddressVerification { return $this->get('address_verification'); }
    public function hasAddressVerification(): bool { return $this->has('address_verification'); }
    /** @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** @return list<SubscriptionDeliveryOption>
     * @throws SdkError When delivery_methods is omitted; use hasDeliveryMethods() or valueOrDefault().
     */
    public function getDeliveryMethods(): array { return $this->get('delivery_methods'); }
    public function hasDeliveryMethods(): bool { return $this->has('delivery_methods'); }
    /** @return PostalAddress
     * @throws SdkError When destination_address is omitted; use hasDestinationAddress() or valueOrDefault().
     */
    public function getDestinationAddress(): PostalAddress { return $this->get('destination_address'); }
    public function hasDestinationAddress(): bool { return $this->has('destination_address'); }
    /** @return list<SubscriptionPreviewError>
     * @throws SdkError When errors is omitted; use hasErrors() or valueOrDefault().
     */
    public function getErrors(): array { return $this->get('errors'); }
    public function hasErrors(): bool { return $this->has('errors'); }
    /** @return bool
     * @throws SdkError When is_valid is omitted; use hasIsValid() or valueOrDefault().
     */
    public function getIsValid(): bool { return $this->get('is_valid'); }
    public function hasIsValid(): bool { return $this->has('is_valid'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}
