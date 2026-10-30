<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $line_item
 * @property-read bool $order
 * @property-read bool $service_charge
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCombinesWith extends Model {
    /** @param array{'line_item': bool, 'order': bool, 'service_charge': bool, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCombinesWith')); }
    /** Allow line item promotions, subject to the evaluation order on Promotion.
     * @return bool
     */
    public function getLineItem(): bool { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
    /** Allow order promotions, subject to the evaluation order on Promotion.
     * @return bool
     */
    public function getOrder(): bool { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Allow service charge promotions, subject to the evaluation order on Promotion.
     * @return bool
     */
    public function getServiceCharge(): bool { return $this->get('service_charge'); }
    public function hasServiceCharge(): bool { return $this->has('service_charge'); }
}
