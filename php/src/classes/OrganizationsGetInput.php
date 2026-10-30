<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $organization_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationsGetInput extends Model {
    /** @param array{'organization_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationsGetInput')); }
    /** Flint organization ID. Example: "org_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** Supported expansions: parent_organization. Expansion requires accounts.organizations.read. Limits: at most 10 unique expand paths per request. Pass expand=parent_organization. [] enum: "parent_organization". Value enum: "parent_organization". anyOf[1] (Value): Array of string.  [] enum: "parent_organization". anyOf[1][] (Value): string.  Value enum: "parent_organization". anyOf[2] (Value): string.  Value enum: "parent_organization".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
