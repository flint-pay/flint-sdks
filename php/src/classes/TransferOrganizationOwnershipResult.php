<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrganizationMembership $membership
 * @property-read string $previous_owner_user_id
 * Presence-aware response; omitted fields throw when accessed. */
final class TransferOrganizationOwnershipResult extends Model {
    /** @param array{'membership': mixed, 'previous_owner_user_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TransferOrganizationOwnershipResult')); }
    /** @return OrganizationMembership
     * @throws SdkError When membership is omitted; use hasMembership() or valueOrDefault().
     */
    public function getMembership(): OrganizationMembership { return $this->get('membership'); }
    public function hasMembership(): bool { return $this->has('membership'); }
    /** @return string
     * @throws SdkError When previous_owner_user_id is omitted; use hasPreviousOwnerUserId() or valueOrDefault().
     */
    public function getPreviousOwnerUserId(): string { return $this->get('previous_owner_user_id'); }
    public function hasPreviousOwnerUserId(): bool { return $this->has('previous_owner_user_id'); }
}
