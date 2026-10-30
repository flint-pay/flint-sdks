<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'expected_version'?: int, 'tax_default_behavior': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class TaxConnectionDisconnectInput extends Model {
    /** @param array{'body': array{'expected_version'?: int, 'tax_default_behavior': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TaxConnectionDisconnectInput')); }
    /** The request body for: Disconnect automatic tax. Example: {"expected_version":1793016000,"tax_default_behavior":"turn_off"}.
     * @return array{'expected_version'?: int, 'tax_default_behavior': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
