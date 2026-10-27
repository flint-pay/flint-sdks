<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $source
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionServiceLocationInputAddressInput extends Model {
    /** @param array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'source': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionServiceLocationInputAddressInput')); }
    /** Shape $ (Value): {@see AddressRequestInput}. A postal address you supply when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to clear it.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string.  Value enum: "address".
     * @return string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): string { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
}
