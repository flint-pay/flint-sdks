<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool|null $line_item
 * @property-read bool|null $order
 * @property-read bool|null $service_charge
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCombinesWithPreviousAttributesInput extends Model {
    /** @param array{'line_item'?: bool|null, 'order'?: bool|null, 'service_charge'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCombinesWithPreviousAttributesInput')); }
    /** Allow line item promotions, subject to the evaluation order on Promotion. anyOf[1] (Value): boolean. Allow line item promotions, subject to the evaluation order on Promotion. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When line_item is omitted; use hasLineItem() or valueOrDefault().
     */
    public function getLineItem(): mixed { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
    /** Allow order promotions, subject to the evaluation order on Promotion. anyOf[1] (Value): boolean. Allow order promotions, subject to the evaluation order on Promotion. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Allow service charge promotions, subject to the evaluation order on Promotion. anyOf[1] (Value): boolean. Allow service charge promotions, subject to the evaluation order on Promotion. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When service_charge is omitted; use hasServiceCharge() or valueOrDefault().
     */
    public function getServiceCharge(): mixed { return $this->get('service_charge'); }
    public function hasServiceCharge(): bool { return $this->has('service_charge'); }
}
