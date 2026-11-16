<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $line_item
 * @property-read bool|null $order
 * @property-read bool|null $service_charge
 * Presence-aware response; omitted optional fields return null. */
final class PromotionCombinesWithPreviousAttributes extends Model {
    /** @param array{'line_item'?: mixed, 'order'?: mixed, 'service_charge'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCombinesWithPreviousAttributes')); }
    /** Allow line item promotions, subject to the evaluation order on Promotion. anyOf[1] (Value): boolean. Allow line item promotions, subject to the evaluation order on Promotion. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getLineItem(): bool|null { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
    /** Allow order promotions, subject to the evaluation order on Promotion. anyOf[1] (Value): boolean. Allow order promotions, subject to the evaluation order on Promotion. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getOrder(): bool|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Allow service charge promotions, subject to the evaluation order on Promotion. anyOf[1] (Value): boolean. Allow service charge promotions, subject to the evaluation order on Promotion. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getServiceCharge(): bool|null { return $this->get('service_charge'); }
    public function hasServiceCharge(): bool { return $this->has('service_charge'); }
}
