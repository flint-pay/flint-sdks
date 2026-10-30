<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersCreateAddressInput extends Model {
    /** @param array{'customer_id': string, 'body': array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersCreateAddressInput')); }
    /** Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** The request body for: Create a customer address; Create an address for the current buyer.
     * @return array{'address': mixed, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
