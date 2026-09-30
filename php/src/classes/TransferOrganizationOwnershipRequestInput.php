<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $new_owner_user_id
 * Presence-aware input; omitted fields throw when accessed. */
final class TransferOrganizationOwnershipRequestInput extends Model {
    /** @param array{'new_owner_user_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('TransferOrganizationOwnershipRequestInput')); }
    /** @return string
     * @throws SdkError When new_owner_user_id is omitted; use hasNewOwnerUserId() or valueOrDefault().
     */
    public function getNewOwnerUserId(): string { return $this->get('new_owner_user_id'); }
    public function hasNewOwnerUserId(): bool { return $this->has('new_owner_user_id'); }
}
