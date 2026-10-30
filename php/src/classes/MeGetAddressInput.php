<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_address_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeGetAddressInput extends Model {
    /** @param array{'customer_address_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeGetAddressInput')); }
    /** Flint customer address ID. Example: "caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
}
