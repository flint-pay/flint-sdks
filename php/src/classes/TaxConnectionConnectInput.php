<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'expected_version'?: int, 'seller_attestation': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionConnectInput extends Model {
    /** @param array{'body': array{'expected_version'?: int, 'seller_attestation': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionConnectInput')); }
    /** The request body for: Connect automatic tax. Example: {"expected_version":1793016000,"seller_attestation":{"disclosure_version":"2026-11-01.5f3a9c1e"}}.
     * @return array{'expected_version'?: int, 'seller_attestation': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
