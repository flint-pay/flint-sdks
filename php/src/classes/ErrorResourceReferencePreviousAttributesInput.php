<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $resource_id
 * @property-read string|null $resource_type
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ErrorResourceReferencePreviousAttributesInput extends Model {
    /** @param array{'resource_id'?: string|null, 'resource_type'?: string|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ErrorResourceReferencePreviousAttributesInput')); }
    /** Public Flint ID of the referenced resource. anyOf[1] (Value): string. Public Flint ID of the referenced resource. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When resource_id is omitted; use hasResourceId() or valueOrDefault().
     */
    public function getResourceId(): mixed { return $this->get('resource_id'); }
    public function hasResourceId(): bool { return $this->has('resource_id'); }
    /** Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. anyOf[1] (Value): string. Stable public resource name for the referenced resource: a ResourceType value, or resource when the resource has no public type. Example: "order". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When resource_type is omitted; use hasResourceType() or valueOrDefault().
     */
    public function getResourceType(): mixed { return $this->get('resource_type'); }
    public function hasResourceType(): bool { return $this->has('resource_type'); }
    /** Current public status of the referenced resource when available. anyOf[1] (Value): string. Current public status of the referenced resource when available. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
