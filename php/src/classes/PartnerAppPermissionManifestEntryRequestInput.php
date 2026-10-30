<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $description
 * @property-read bool $optional
 * @property-read string $permission_id
 * @property-read list<string> $required_scopes
 * @property-read string $title
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPermissionManifestEntryRequestInput extends Model {
    /** @param array{'description': string, 'optional'?: bool, 'permission_id': string, 'required_scopes': list<string>, 'title': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPermissionManifestEntryRequestInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Whether the merchant can decline this permission when they approve the install. Defaults to false: the permission is required and is always granted.
     * @return bool
     * @throws SdkError When optional is omitted; use hasOptional() or valueOrDefault().
     */
    public function getOptional(): bool { return $this->get('optional'); }
    public function hasOptional(): bool { return $this->has('optional'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When permission_id is omitted; use hasPermissionId() or valueOrDefault().
     */
    public function getPermissionId(): string { return $this->get('permission_id'); }
    public function hasPermissionId(): bool { return $this->has('permission_id'); }
    /**  [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When required_scopes is omitted; use hasRequiredScopes() or valueOrDefault().
     */
    public function getRequiredScopes(): array { return $this->get('required_scopes'); }
    public function hasRequiredScopes(): bool { return $this->has('required_scopes'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When title is omitted; use hasTitle() or valueOrDefault().
     */
    public function getTitle(): string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
