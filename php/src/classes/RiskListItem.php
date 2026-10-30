<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ResourceReference|null $created_by
 * @property-read string $risk_list_id
 * @property-read string $risk_list_item_id
 * @property-read string $value
 * Presence-aware response; omitted optional fields return null. */
final class RiskListItem extends Model {
    /** @param array{'created_at': string, 'created_by': mixed, 'risk_list_id': string, 'risk_list_item_id': string, 'value': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListItem')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The credential that created this list item. Null when Flint created it. The reference may name an API key in the other mode. anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getCreatedBy(): ResourceReference|null { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** risk_list_id
     * @return string
     */
    public function getRiskListId(): string { return $this->get('risk_list_id'); }
    public function hasRiskListId(): bool { return $this->has('risk_list_id'); }
    /** risk_list_item_id
     * @return string
     */
    public function getRiskListItemId(): string { return $this->get('risk_list_item_id'); }
    public function hasRiskListItemId(): bool { return $this->has('risk_list_item_id'); }
    /** The value as stored after item_type normalization, which is what payments are matched against.
     * @return string
     */
    public function getValue(): string { return $this->get('value'); }
    public function hasValue(): bool { return $this->has('value'); }
}
