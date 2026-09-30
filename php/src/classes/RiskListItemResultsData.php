<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicRiskListItemResult> $items
 * Presence-aware response; omitted fields throw when accessed. */
final class RiskListItemResultsData extends Model {
    /** @param array{'items': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListItemResultsData')); }
    /** @return list<PublicRiskListItemResult>
     * @throws SdkError When items is omitted; use hasItems() or valueOrDefault().
     */
    public function getItems(): array { return $this->get('items'); }
    public function hasItems(): bool { return $this->has('items'); }
}
