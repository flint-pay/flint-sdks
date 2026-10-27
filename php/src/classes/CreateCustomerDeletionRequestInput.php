<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $customer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateCustomerDeletionRequestInput extends Model {
    /** @param array{'customer_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateCustomerDeletionRequestInput')); }
    /** Shape $ (Value): string. Flint customer ID of the customer to delete. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
}
