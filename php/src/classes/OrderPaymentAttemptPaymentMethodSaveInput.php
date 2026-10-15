<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderPaymentAttemptPaymentMethodSaveInput extends Model {
    /** @param array{'reason': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttemptPaymentMethodSaveInput')); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
