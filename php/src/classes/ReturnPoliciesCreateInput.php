<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'revision': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnPoliciesCreateInput extends Model {
    /** @param array{'body': array{'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'revision': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnPoliciesCreateInput')); }
    /** The request body for: Create return policy.
     * @return array{'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'revision': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
