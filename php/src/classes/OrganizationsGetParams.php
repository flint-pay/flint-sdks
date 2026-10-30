<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationsGetParams')); }
    /** Supported expansions: parent_organization. Expansion requires accounts.organizations.read. Limits: at most 10 unique expand paths per request. Pass expand=parent_organization. [] enum: "parent_organization". Value enum: "parent_organization". anyOf[1] (Value): Array of string.  [] enum: "parent_organization". anyOf[1][] (Value): string.  Value enum: "parent_organization". anyOf[2] (Value): string.  Value enum: "parent_organization".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
