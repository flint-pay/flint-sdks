<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $line_item
 * @property-read bool $order
 * @property-read bool $service_charge
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionCombinesWithRequestInput extends Model {
    /** @param array{'line_item'?: bool, 'order'?: bool, 'service_charge'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionCombinesWithRequestInput')); }
    /** Shape $ (Value): boolean. Allow line item promotions, subject to the evaluation order on Promotion.
     * @return bool
     * @throws SdkError When line_item is omitted; use hasLineItem() or valueOrDefault().
     */
    public function getLineItem(): bool { return $this->get('line_item'); }
    public function hasLineItem(): bool { return $this->has('line_item'); }
    /** Shape $ (Value): boolean. Allow order promotions, subject to the evaluation order on Promotion.
     * @return bool
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): bool { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): boolean. Allow service charge promotions, subject to the evaluation order on Promotion.
     * @return bool
     * @throws SdkError When service_charge is omitted; use hasServiceCharge() or valueOrDefault().
     */
    public function getServiceCharge(): bool { return $this->get('service_charge'); }
    public function hasServiceCharge(): bool { return $this->has('service_charge'); }
}
