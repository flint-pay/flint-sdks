<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<int> $retry_day_offsets
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceAutopayRetryPolicyInput extends Model {
    /** @param array{'retry_day_offsets': list<int>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceAutopayRetryPolicyInput')); }
    /** Days after the due date to retry, from 1 to 30, in strictly increasing order, at most 5. maxItems: 5. uniqueItems: true. [] (Value): integer. Format: int32. minimum: 1. maximum: 30.
     * @return list<int>
     * @throws SdkError When retry_day_offsets is omitted; use hasRetryDayOffsets() or valueOrDefault().
     */
    public function getRetryDayOffsets(): array { return $this->get('retry_day_offsets'); }
    public function hasRetryDayOffsets(): bool { return $this->has('retry_day_offsets'); }
}
