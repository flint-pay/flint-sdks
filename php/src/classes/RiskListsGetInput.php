<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $risk_list_id
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListsGetInput extends Model {
    /** @param array{'risk_list_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListsGetInput')); }
    /** Flint risk list ID. Example: "rl_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When risk_list_id is omitted; use hasRiskListId() or valueOrDefault().
     */
    public function getRiskListId(): string { return $this->get('risk_list_id'); }
    public function hasRiskListId(): bool { return $this->has('risk_list_id'); }
}
