<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $failed_at
 * @property-read string|null $refund_id
 * Presence-aware response; omitted optional fields return null. */
final class PaymentReviewResolutionFailurePreviousAttributes extends Model {
    /** @param array{'failed_at'?: mixed, 'refund_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentReviewResolutionFailurePreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFailedAt(): string|null { return $this->get('failed_at'); }
    public function hasFailedAt(): bool { return $this->has('failed_at'); }
    /** ID of the refund that failed and reopened the review. anyOf[1] (Value): string. ID of the refund that failed and reopened the review. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRefundId(): string|null { return $this->get('refund_id'); }
    public function hasRefundId(): bool { return $this->has('refund_id'); }
}
