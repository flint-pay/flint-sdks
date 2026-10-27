<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $resource_id
 * @property-read string $resource_type
 * @property-read ?string $status
 * Presence-aware response; omitted optional fields return null. */
final class ErrorResourceReference extends Model {
    /** @param array{'resource_id': string, 'resource_type': string, 'status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorResourceReference')); }
    /** Shape $ (Value): string. Public Flint ID of the referenced resource.
     * @return string
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Shape $ (Value): string. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type.
     * @return string
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Shape $ (Value): string. Current public status of the referenced resource when available.
     * @return ?string
     */
    public function getStatus(): ?string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
