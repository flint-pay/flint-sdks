<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $customer_address_id
 * @property-read string|null $customer_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryDestinationPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'customer_address_id'?: mixed, 'customer_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryDestinationPreviousAttributes')); }
    /** Resolved delivery address used by future shipments. `null` when the saved destination has no address. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. anyOf[1] (Value): string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerAddressId(): string|null { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. anyOf[1] (Value): string. Customer that owns customer_address_id. Null when customer_address_id is absent for an inline address. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
}
