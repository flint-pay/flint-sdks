<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<int> $retry_day_offsets
 * Presence-aware response; omitted optional fields return null. */
final class InvoiceAutopayRetryPolicy extends Model {
    /** @param array{'retry_day_offsets': list<int>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceAutopayRetryPolicy')); }
    /** Shape $ (Value): Array of integer. maxItems: 5. uniqueItems: true. Shape $[] (Value): integer. Format: int32. minimum: 1. maximum: 30.
     * @return list<int>
     */
    public function getRetryDayOffsets(): array { return $this->get('retry_day_offsets'); }
    public function hasRetryDayOffsets(): bool { return $this->has('retry_day_offsets'); }
}
