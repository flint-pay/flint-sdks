<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<RiskListItemAddition> $additions
 * Presence-aware response; omitted optional fields return null. */
final class AddRiskListItemsResult extends Model {
    /** @param array{'additions': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AddRiskListItemsResult')); }
    /**  [] (Value): {@see RiskListItemAddition}. The risk list item matched or created for one requested value, and its creation outcome.
     * @return list<RiskListItemAddition>
     */
    public function getAdditions(): array { return $this->get('additions'); }
    public function hasAdditions(): bool { return $this->has('additions'); }
}
