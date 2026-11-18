<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $legal_address
 * @property-read SellerTaxAttestationRequestInput|array<array-key, mixed>|\stdClass $seller_attestation
 * Presence-aware input; omitted fields throw when accessed. */
final class ConnectTaxConnectionRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'legal_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'seller_attestation': SellerTaxAttestationRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ConnectTaxConnectionRequestInput')); }
    /** Resource version last read by the caller. Omit to apply the change to the current resource. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Test mode only. Business address to use as the sandbox tax origin, overriding verified live details or the merchant profile on initial setup. Omit to use those defaults. Retries and reconnects retain the attested address; after the tax account exists, an explicit address must match it. Live mode rejects this field with INVALID_REQUEST. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal_address is omitted; use hasLegalAddress() or valueOrDefault().
     */
    public function getLegalAddress(): mixed { return $this->get('legal_address'); }
    public function hasLegalAddress(): bool { return $this->has('legal_address'); }
    /** Presence records the seller's agreement to the named disclosure version. The seller's agreement to the current automatic sales tax disclosure, recorded when connect succeeds.
     * @return SellerTaxAttestationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When seller_attestation is omitted; use hasSellerAttestation() or valueOrDefault().
     */
    public function getSellerAttestation(): mixed { return $this->get('seller_attestation'); }
    public function hasSellerAttestation(): bool { return $this->has('seller_attestation'); }
}
