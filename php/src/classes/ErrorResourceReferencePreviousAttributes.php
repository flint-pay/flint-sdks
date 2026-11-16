<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $resource_id
 * @property-read string|null $resource_type
 * @property-read string|null $status
 * Presence-aware response; omitted optional fields return null. */
final class ErrorResourceReferencePreviousAttributes extends Model {
    /** @param array{'resource_id'?: mixed, 'resource_type'?: mixed, 'status'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorResourceReferencePreviousAttributes')); }
    /** Public Flint ID of the referenced resource. anyOf[1] (Value): string. Public Flint ID of the referenced resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResourceId(): string|null { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. anyOf[1] (Value): string. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResourceType(): string|null { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Current public status of the referenced resource when available. anyOf[1] (Value): string. Current public status of the referenced resource when available. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
