<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $role
 * @property-read string $user_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrganizationsGrantMembershipParams extends Model {
    /** @param array{'role': string, 'user_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrganizationsGrantMembershipParams')); }
    /** Value enum: "admin", "operator", "viewer".
     * @return string
     * @throws SdkError When role is omitted; use hasRole() or valueOrDefault().
     */
    public function getRole(): string { return $this->get('role'); }
    public function hasRole(): bool { return $this->has('role'); }
    /** minLength: 1. Example: "usr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When user_id is omitted; use hasUserId() or valueOrDefault().
     */
    public function getUserId(): string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
}
