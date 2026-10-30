<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read list<string> $order_discount_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class RemoveDiscountsRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'order_discount_ids': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RemoveDiscountsRequestInput')); }
    /** Optional order version from the last order read. The mutation fails if the order changed. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /**  [] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When order_discount_ids is omitted; use hasOrderDiscountIds() or valueOrDefault().
     */
    public function getOrderDiscountIds(): array { return $this->get('order_discount_ids'); }
    public function hasOrderDiscountIds(): bool { return $this->has('order_discount_ids'); }
}
