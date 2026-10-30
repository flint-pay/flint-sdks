<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $outcome
 * @property-read RiskListItem $risk_list_item
 * Presence-aware response; omitted optional fields return null. */
final class RiskListItemAddition extends Model {
    /** @param array{'outcome': string, 'risk_list_item': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListItemAddition')); }
    /** Value enum: "created", "existing".
     * @return string
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** One value in a payment risk list.
     * @return RiskListItem
     */
    public function getRiskListItem(): RiskListItem { return $this->get('risk_list_item'); }
    public function hasRiskListItem(): bool { return $this->has('risk_list_item'); }
}
