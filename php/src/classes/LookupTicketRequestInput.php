<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $admission_code
 * Presence-aware input; omitted fields throw when accessed. */
final class LookupTicketRequestInput extends Model {
    /** @param array{'admission_code': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LookupTicketRequestInput')); }
    /** The 16-character Crockford base32 admission code. Spaces, hyphens and ASCII lowercase are normalized. minLength: 16.
     * @return string
     * @throws SdkError When admission_code is omitted; use hasAdmissionCode() or valueOrDefault().
     */
    public function getAdmissionCode(): string { return $this->get('admission_code'); }
    public function hasAdmissionCode(): bool { return $this->has('admission_code'); }
}
