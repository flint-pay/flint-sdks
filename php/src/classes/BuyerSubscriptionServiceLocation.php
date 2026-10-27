<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscriptionServiceLocation extends Model {
    /** @param array{'address'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionServiceLocation')); }
    /** Shape $ (Value): {@see Address}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
}
