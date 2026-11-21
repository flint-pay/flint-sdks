<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $name
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutBillingContactPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'name'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutBillingContactPreviousAttributes')); }
    /** Billing address entered by the buyer. Null when no billing address was collected. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Billing name entered by the buyer. anyOf[1] (Value): string. Billing name entered by the buyer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}
