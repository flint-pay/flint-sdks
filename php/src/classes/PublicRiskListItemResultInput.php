<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read RiskListItemInput|array<array-key, mixed>|\stdClass $risk_list_item
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class PublicRiskListItemResultInput extends Model {
    /** @param array{'risk_list_item': RiskListItemInput|array<array-key, mixed>|\stdClass, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicRiskListItemResultInput')); }
    /** @return RiskListItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When risk_list_item is omitted; use hasRiskListItem() or valueOrDefault().
     */
    public function getRiskListItem(): mixed { return $this->get('risk_list_item'); }
    public function hasRiskListItem(): bool { return $this->has('risk_list_item'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
