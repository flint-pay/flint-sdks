<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PromotionRuleValuePreviousAttributesInput extends Model {
    /** @param string|int|float|bool|MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionRuleValuePreviousAttributesInput')); }
}
