<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $reason
 * @property-read string $status
 * Presence-aware response; omitted fields throw when accessed. */
final class OrderPaymentAttemptPaymentMethodSave extends Model {
    /** @param array{'reason': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderPaymentAttemptPaymentMethodSave')); }
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
