<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicRiskListItemResultInput|array<array-key, mixed>|\stdClass> $items
 * Presence-aware input; omitted fields throw when accessed. */
final class RiskListItemResultsDataInput extends Model {
    /** @param array{'items': list<PublicRiskListItemResultInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RiskListItemResultsDataInput')); }
    /** @return list<PublicRiskListItemResultInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When items is omitted; use hasItems() or valueOrDefault().
     */
    public function getItems(): array { return $this->get('items'); }
    public function hasItems(): bool { return $this->has('items'); }
}
