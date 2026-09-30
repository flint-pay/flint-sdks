<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $description
 * @property-read bool $optional
 * @property-read string $permission_id
 * @property-read string $title
 * Presence-aware response; omitted fields throw when accessed. */
final class PartnerAuthorizePreviewPermission extends Model {
    /** @param array{'description': string, 'optional'?: bool, 'permission_id': string, 'title': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAuthorizePreviewPermission')); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return bool
     * @throws SdkError When optional is omitted; use hasOptional() or valueOrDefault().
     */
    public function getOptional(): bool { return $this->get('optional'); }
    public function hasOptional(): bool { return $this->has('optional'); }
    /** @return string
     * @throws SdkError When permission_id is omitted; use hasPermissionId() or valueOrDefault().
     */
    public function getPermissionId(): string { return $this->get('permission_id'); }
    public function hasPermissionId(): bool { return $this->has('permission_id'); }
    /** @return string
     * @throws SdkError When title is omitted; use hasTitle() or valueOrDefault().
     */
    public function getTitle(): string { return $this->get('title'); }
    public function hasTitle(): bool { return $this->has('title'); }
}
