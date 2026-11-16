<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $attested_at
 * @property-read string|null $disclosure_version
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionSellerAttestationPreviousAttributesInput extends Model {
    /** @param array{'attested_at'?: string|\DateTimeInterface|null, 'disclosure_version'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionSellerAttestationPreviousAttributesInput')); }
    /** When Flint recorded the seller's agreement. anyOf[1] (Value): string. When Flint recorded the seller's agreement. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When attested_at is omitted; use hasAttestedAt() or valueOrDefault().
     */
    public function getAttestedAt(): mixed { return $this->get('attested_at'); }
    public function hasAttestedAt(): bool { return $this->has('attested_at'); }
    /** Opaque version of the disclosure the seller agreed to. anyOf[1] (Value): string. Opaque version of the disclosure the seller agreed to. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When disclosure_version is omitted; use hasDisclosureVersion() or valueOrDefault().
     */
    public function getDisclosureVersion(): mixed { return $this->get('disclosure_version'); }
    public function hasDisclosureVersion(): bool { return $this->has('disclosure_version'); }
}
