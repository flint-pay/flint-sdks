<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $detected_at
 * @property-read string|null $reason
 * @property-read string|\DateTimeInterface|null $retry_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingHoldPreviousAttributesInput extends Model {
    /** @param array{'detected_at'?: string|\DateTimeInterface|null, 'reason'?: string|null, 'retry_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingHoldPreviousAttributesInput')); }
    /** When Flint first detected this billing hold. anyOf[1] (Value): string. When Flint first detected this billing hold. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When detected_at is omitted; use hasDetectedAt() or valueOrDefault().
     */
    public function getDetectedAt(): mixed { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Why subscription billing cannot proceed. Treat unrecognized values as other. Value enum: "configuration", "retrying", "platform_review", "flint_restriction", "other". anyOf[1] (Value): string. Why subscription billing cannot proceed. Treat unrecognized values as other. Value enum: "configuration", "retrying", "platform_review", "flint_restriction", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. anyOf[1] (Value): string. When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When retry_at is omitted; use hasRetryAt() or valueOrDefault().
     */
    public function getRetryAt(): mixed { return $this->get('retry_at'); }
    public function hasRetryAt(): bool { return $this->has('retry_at'); }
}
