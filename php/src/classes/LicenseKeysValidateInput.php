<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'key': string, 'license_key_activation_id'?: string, 'product_ids': list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeysValidateInput extends Model {
    /** @param array{'body': array{'key': string, 'license_key_activation_id'?: string, 'product_ids': list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeysValidateInput')); }
    /** The full license key and the products the caller accepts.
     * @return array{'key': string, 'license_key_activation_id'?: string, 'product_ids': list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
