<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_address_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryDestinationInputCustomerAddressInput extends Model {
    /** @param array{'customer_address_id': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryDestinationInputCustomerAddressInput')); }
    /** Shape $ (Value): string. minLength: 1. pattern: ^caddr_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** Shape $ (Value): string.  Value enum: "customer_address".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
