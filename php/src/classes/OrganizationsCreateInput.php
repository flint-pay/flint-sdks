<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'metadata'?: mixed, 'name': string, 'parent_organization_id': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationsCreateInput extends Model {
    /** @param array{'body': array{'metadata'?: mixed, 'name': string, 'parent_organization_id': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationsCreateInput')); }
    /** The request body for: Create organization. Example: {"metadata":{"segment":"enterprise"},"name":"Northeast Region","parent_organization_id":"org_01JQ4X2R0W0RTM8VJQ8YQ7P9AB"}.
     * @return array{'metadata'?: mixed, 'name': string, 'parent_organization_id': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
