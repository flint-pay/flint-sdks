<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read OrganizationMembershipInput|array<array-key, mixed>|\stdClass $membership
 * @property-read string $previous_owner_user_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TransferOrganizationOwnershipResultInput extends Model {
    /** @param array{'membership': OrganizationMembershipInput|array<array-key, mixed>|\stdClass, 'previous_owner_user_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TransferOrganizationOwnershipResultInput')); }
    /** @return OrganizationMembershipInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When membership is omitted; use hasMembership() or valueOrDefault().
     */
    public function getMembership(): mixed { return $this->get('membership'); }
    public function hasMembership(): bool { return $this->has('membership'); }
    /** @return string
     * @throws SdkError When previous_owner_user_id is omitted; use hasPreviousOwnerUserId() or valueOrDefault().
     */
    public function getPreviousOwnerUserId(): string { return $this->get('previous_owner_user_id'); }
    public function hasPreviousOwnerUserId(): bool { return $this->has('previous_owner_user_id'); }
}
