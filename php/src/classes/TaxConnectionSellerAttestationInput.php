<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $attested_at
 * @property-read string $disclosure_version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionSellerAttestationInput extends Model {
    /** @param array{'attested_at': string|\DateTimeInterface, 'disclosure_version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionSellerAttestationInput')); }
    /** Shape $ (Value): string. When Flint recorded the seller's agreement. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When attested_at is omitted; use hasAttestedAt() or valueOrDefault().
     */
    public function getAttestedAt(): string|\DateTimeInterface { return $this->get('attested_at'); }
    public function hasAttestedAt(): bool { return $this->has('attested_at'); }
    /** Shape $ (Value): string. Opaque version of the disclosure the seller agreed to.
     * @return string
     * @throws SdkError When disclosure_version is omitted; use hasDisclosureVersion() or valueOrDefault().
     */
    public function getDisclosureVersion(): string { return $this->get('disclosure_version'); }
    public function hasDisclosureVersion(): bool { return $this->has('disclosure_version'); }
}
