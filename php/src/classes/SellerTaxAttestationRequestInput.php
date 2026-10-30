<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $disclosure_version
 * Presence-aware input; omitted fields throw when accessed. */
final class SellerTaxAttestationRequestInput extends Model {
    /** @param array{'disclosure_version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SellerTaxAttestationRequestInput')); }
    /** Current disclosure version from GET /v1/tax-connection. Send only after the seller agrees to every rendered statement. minLength: 1.
     * @return string
     * @throws SdkError When disclosure_version is omitted; use hasDisclosureVersion() or valueOrDefault().
     */
    public function getDisclosureVersion(): string { return $this->get('disclosure_version'); }
    public function hasDisclosureVersion(): bool { return $this->has('disclosure_version'); }
}
