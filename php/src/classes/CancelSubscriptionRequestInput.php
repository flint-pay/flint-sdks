<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $cancel_immediately
 * @property-read string $cancellation_comment
 * @property-read string $cancellation_reason_code
 * Presence-aware input; omitted fields throw when accessed. */
final class CancelSubscriptionRequestInput extends Model {
    /** @param array{'cancel_immediately'?: bool, 'cancellation_comment'?: string, 'cancellation_reason_code'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CancelSubscriptionRequestInput')); }
    /** @return bool
     * @throws SdkError When cancel_immediately is omitted; use hasCancelImmediately() or valueOrDefault().
     */
    public function getCancelImmediately(): bool { return $this->get('cancel_immediately'); }
    public function hasCancelImmediately(): bool { return $this->has('cancel_immediately'); }
    /** @return string
     * @throws SdkError When cancellation_comment is omitted; use hasCancellationComment() or valueOrDefault().
     */
    public function getCancellationComment(): string { return $this->get('cancellation_comment'); }
    public function hasCancellationComment(): bool { return $this->has('cancellation_comment'); }
    /** @return string
     * @throws SdkError When cancellation_reason_code is omitted; use hasCancellationReasonCode() or valueOrDefault().
     */
    public function getCancellationReasonCode(): string { return $this->get('cancellation_reason_code'); }
    public function hasCancellationReasonCode(): bool { return $this->has('cancellation_reason_code'); }
}
