<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PromotionApplicationMethodPreviousAttributesInput extends Model {
    /** @param PromotionPercentOffMethodPreviousAttributesInput|array<array-key, mixed>|\stdClass|PromotionAmountOffMethodPreviousAttributesInput|array<array-key, mixed>|\stdClass|PromotionBuyXGetYMethodPreviousAttributesInput|array<array-key, mixed>|\stdClass $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionApplicationMethodPreviousAttributesInput')); }
}
