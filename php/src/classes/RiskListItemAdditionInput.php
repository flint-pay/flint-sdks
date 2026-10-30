<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $outcome
 * @property-read RiskListItemInput|array<array-key, mixed>|\stdClass $risk_list_item
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListItemAdditionInput extends Model {
    /** @param array{'outcome': string, 'risk_list_item': RiskListItemInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListItemAdditionInput')); }
    /** Value enum: "created", "existing".
     * @return string
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): string { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** One value in a payment risk list.
     * @return RiskListItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When risk_list_item is omitted; use hasRiskListItem() or valueOrDefault().
     */
    public function getRiskListItem(): mixed { return $this->get('risk_list_item'); }
    public function hasRiskListItem(): bool { return $this->has('risk_list_item'); }
}
