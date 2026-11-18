<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'fingerprint'?: string, 'key': string, 'name': string, 'product_ids': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyActivationsCreateInput extends Model {
    /** @param array{'body': array{'fingerprint'?: string, 'key': string, 'name': string, 'product_ids': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyActivationsCreateInput')); }
    /** The request body for: Activate a license key.
     * @return array{'fingerprint'?: string, 'key': string, 'name': string, 'product_ids': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
