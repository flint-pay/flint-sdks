<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $address
 * @property-read string|null $customer_address_id
 * @property-read string|null|null $customer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryDestinationPreviousAttributesInput extends Model {
    /** @param array{'address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, 'customer_address_id'?: string|null, 'customer_id'?: string|null|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryDestinationPreviousAttributesInput')); }
    /** Resolved delivery address used by future shipments. `null` when the saved destination has no address. anyOf[1] (Value): ({@see AddressPreviousAttributesInput} or null). Resolved delivery address used by future shipments. `null` when the saved destination has no address. anyOf[1].anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. anyOf[1] (Value): string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. Example: "caddr_01KEZF7C00K2Q127FBJAXWB0FP". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): mixed { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. anyOf[1] (Value): string or null. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
}
