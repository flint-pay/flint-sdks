<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $attested_at
 * @property-read string|null $disclosure_version
 * Presence-aware response; omitted optional fields return null. */
final class TaxConnectionSellerAttestationPreviousAttributes extends Model {
    /** @param array{'attested_at'?: mixed, 'disclosure_version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionSellerAttestationPreviousAttributes')); }
    /** When Flint recorded the seller's agreement. anyOf[1] (Value): string. When Flint recorded the seller's agreement. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAttestedAt(): string|null { return $this->get('attested_at'); }
    public function hasAttestedAt(): bool { return $this->has('attested_at'); }
    /** Opaque version of the disclosure the seller agreed to. anyOf[1] (Value): string. Opaque version of the disclosure the seller agreed to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDisclosureVersion(): string|null { return $this->get('disclosure_version'); }
    public function hasDisclosureVersion(): bool { return $this->has('disclosure_version'); }
}
