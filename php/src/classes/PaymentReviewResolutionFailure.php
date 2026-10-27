<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $failed_at
 * @property-read string $refund_id
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewResolutionFailure extends Model {
    /** @param array{'failed_at': string, 'refund_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewResolutionFailure')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getFailedAt(): string { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getRefundId(): string { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
}
