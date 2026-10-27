<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_address_id
 * @property-read string $source
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionServiceLocationInputCustomerAddressInput extends Model {
    /** @param array{'customer_address_id': string, 'source': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionServiceLocationInputCustomerAddressInput')); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** Shape $ (Value): string.  Value enum: "customer_address".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
