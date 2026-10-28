<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $attested_at
 * @property-read string $disclosure_version
 * Presence-aware response; omitted optional fields return null. */
final class TaxConnectionSellerAttestation extends Model {
    /** @param array{'attested_at': string, 'disclosure_version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionSellerAttestation')); }
    /** Shape $ (Value): string. When Flint recorded the seller's agreement. Format: date-time.
     * @return string
     */
    public function getAttestedAt(): string { return $this->get('attested_at'); }
    public function hasAttestedAt(): bool { return $this->has('attested_at'); }
    /** Shape $ (Value): string. Opaque version of the disclosure the seller agreed to.
     * @return string
     */
    public function getDisclosureVersion(): string { return $this->get('disclosure_version'); }
    public function hasDisclosureVersion(): bool { return $this->has('disclosure_version'); }
}
