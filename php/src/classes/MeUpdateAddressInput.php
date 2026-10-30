<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_address_id
 * @property-read array{'address'?: mixed, 'expected_version'?: int, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string|null, 'phone'?: string|null, 'recipient_name'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class MeUpdateAddressInput extends Model {
    /** @param array{'customer_address_id': string, 'body': array{'address'?: mixed, 'expected_version'?: int, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string|null, 'phone'?: string|null, 'recipient_name'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeUpdateAddressInput')); }
    /** Flint customer address ID. Example: "caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** The request body for: Update a customer address; Update one of the current buyer's addresses. minProperties: 1.
     * @return array{'address'?: mixed, 'expected_version'?: int, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string|null, 'phone'?: string|null, 'recipient_name'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
