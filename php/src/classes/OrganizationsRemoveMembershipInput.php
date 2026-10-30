<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $organization_id
 * @property-read string $user_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationsRemoveMembershipInput extends Model {
    /** @param array{'organization_id': string, 'user_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationsRemoveMembershipInput')); }
    /** Flint organization ID. Example: "org_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** Flint user ID. Example: "usr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When user_id is omitted; use hasUserId() or valueOrDefault().
     */
    public function getUserId(): string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
}
