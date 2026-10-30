<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read SellerTaxAttestationRequestInput|array<array-key, mixed>|\stdClass $seller_attestation
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionConnectParams extends Model {
    /** @param array{'expected_version'?: int, 'seller_attestation': SellerTaxAttestationRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionConnectParams')); }
    /** Resource version last read by the caller. Omit to apply the change to the current resource. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Presence records the seller's agreement to the named disclosure version. The seller's agreement to the current automatic sales tax disclosure, recorded when connect succeeds.
     * @return SellerTaxAttestationRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When seller_attestation is omitted; use hasSellerAttestation() or valueOrDefault().
     */
    public function getSellerAttestation(): mixed { return $this->get('seller_attestation'); }
    public function hasSellerAttestation(): bool { return $this->has('seller_attestation'); }
}
