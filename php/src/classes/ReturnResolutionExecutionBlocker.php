<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string $linked_resource_id
 * @property-read string $linked_resource_type
 * @property-read string $return_line_item_id
 * Presence-aware response; omitted fields throw when accessed. */
final class ReturnResolutionExecutionBlocker extends Model {
    /** @param array{'code': string, 'linked_resource_id'?: string, 'linked_resource_type'?: string, 'return_line_item_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnResolutionExecutionBlocker')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return string
     * @throws SdkError When linked_resource_id is omitted; use hasLinkedResourceId() or valueOrDefault().
     */
    public function getLinkedResourceId(): string { return $this->get('linked_resource_id'); }
    public function hasLinkedResourceId(): bool { return $this->has('linked_resource_id'); }
    /** @return string
     * @throws SdkError When linked_resource_type is omitted; use hasLinkedResourceType() or valueOrDefault().
     */
    public function getLinkedResourceType(): string { return $this->get('linked_resource_type'); }
    public function hasLinkedResourceType(): bool { return $this->has('linked_resource_type'); }
    /** @return string
     * @throws SdkError When return_line_item_id is omitted; use hasReturnLineItemId() or valueOrDefault().
     */
    public function getReturnLineItemId(): string { return $this->get('return_line_item_id'); }
    public function hasReturnLineItemId(): bool { return $this->has('return_line_item_id'); }
}
