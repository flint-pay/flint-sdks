<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $description
 * @property-read string $permission_id
 * @property-read list<string> $required_scopes
 * @property-read string $title
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupPermissionInput extends Model {
    /** @param array{'description': string, 'permission_id': string, 'required_scopes': list<string>, 'title': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupPermissionInput')); }
    /** The permission's description.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** The manifest permission ID. Example: "manage_orders".
     * @return string
     * @throws SdkError When permission_id is omitted; use hasPermissionId() or valueOrDefault().
     */
    public function getPermissionId(): string { return $this->get('permission_id'); }
    public function hasPermissionId(): bool { return $this->has('permission_id'); }
    /** The Flint scopes the permission grants. [] (Value): string.
     * @return list<string>
     * @throws SdkError When required_scopes is omitted; use hasRequiredScopes() or valueOrDefault().
     */
    public function getRequiredScopes(): array { return $this->get('required_scopes'); }
    public function hasRequiredScopes(): bool { return $this->has('required_scopes'); }
    /** The permission's title, as the code email showed it.
     * @return string
     * @throws SdkError When title is omitted; use hasTitle() or valueOrDefault().
     */
    public function getTitle(): string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
