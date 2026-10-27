<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $risk_list_id
 * @property-read string $risk_list_item_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListsGetItemInput extends Model {
    /** @param array{'risk_list_id': string, 'risk_list_item_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListsGetItemInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When risk_list_id is omitted; use hasRiskListId() or valueOrDefault().
     */
    public function getRiskListId(): string { return $this->get('risk_list_id'); }
    public function hasRiskListId(): bool { return $this->has('risk_list_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When risk_list_item_id is omitted; use hasRiskListItemId() or valueOrDefault().
     */
    public function getRiskListItemId(): string { return $this->get('risk_list_item_id'); }
    public function hasRiskListItemId(): bool { return $this->has('risk_list_item_id'); }
}
