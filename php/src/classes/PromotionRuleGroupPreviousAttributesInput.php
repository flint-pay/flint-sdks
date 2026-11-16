<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PromotionRuleGroupPreviousAttributesInput extends Model {
    /** @param array{'all'?: list<PromotionRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object|array{'any'?: list<PromotionRulePreviousAttributesInput|array<array-key, mixed>|\stdClass|PromotionRuleGroupPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRuleGroupPreviousAttributesInput')); }
}
