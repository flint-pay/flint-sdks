<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $cancellation_reason
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelPaymentIntentRequestInput extends Model {
    /** @param array{'cancellation_reason'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelPaymentIntentRequestInput')); }
    /** @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
}
