<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<int> $retry_day_offsets
 * Presence-aware response; omitted fields throw when accessed. */
final class InvoiceAutopayRetryPolicy extends Model {
    /** @param array{'retry_day_offsets': list<int>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceAutopayRetryPolicy')); }
    /** @return list<int>
     * @throws SdkError When retry_day_offsets is omitted; use hasRetryDayOffsets() or valueOrDefault().
     */
    public function getRetryDayOffsets(): array { return $this->get('retry_day_offsets'); }
    public function hasRetryDayOffsets(): bool { return $this->has('retry_day_offsets'); }
}
