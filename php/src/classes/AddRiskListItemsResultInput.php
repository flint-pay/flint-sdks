<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RiskListItemAdditionInput|array<array-key, mixed>|\stdClass> $additions
 * Presence-aware input; omitted fields throw when accessed. */
final class AddRiskListItemsResultInput extends Model {
    /** @param array{'additions': list<RiskListItemAdditionInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddRiskListItemsResultInput')); }
    /** Shape $ (Value): Array of {@see RiskListItemAdditionInput}. Shape $[] (Value): {@see RiskListItemAdditionInput}. The risk list item matched or created for one requested value, and its creation outcome.
     * @return list<RiskListItemAdditionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When additions is omitted; use hasAdditions() or valueOrDefault().
     */
    public function getAdditions(): array { return $this->get('additions'); }
    public function hasAdditions(): bool { return $this->has('additions'); }
}
