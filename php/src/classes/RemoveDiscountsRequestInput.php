<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $order_discount_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class RemoveDiscountsRequestInput extends Model {
    /** @param array{'order_discount_ids': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RemoveDiscountsRequestInput')); }
    /** @return list<string>
     * @throws SdkError When order_discount_ids is omitted; use hasOrderDiscountIds() or valueOrDefault().
     */
    public function getOrderDiscountIds(): array { return $this->get('order_discount_ids'); }
    public function hasOrderDiscountIds(): bool { return $this->has('order_discount_ids'); }
}
