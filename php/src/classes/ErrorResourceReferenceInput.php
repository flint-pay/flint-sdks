<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $resource_id
 * @property-read string $resource_type
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ErrorResourceReferenceInput extends Model {
    /** @param array{'resource_id': string, 'resource_type': string, 'status'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorResourceReferenceInput')); }
    /** Public Flint ID of the referenced resource.
     * @return string
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): string { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type.
     * @return string
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): string { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Current public status of the referenced resource when available.
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
