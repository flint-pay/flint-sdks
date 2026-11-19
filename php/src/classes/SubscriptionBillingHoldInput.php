<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $detected_at
 * @property-read string $reason
 * @property-read string|\DateTimeInterface $retry_at
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingHoldInput extends Model {
    /** @param array{'detected_at': string|\DateTimeInterface, 'reason': string, 'retry_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingHoldInput')); }
    /** When Flint first detected this billing hold. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When detected_at is omitted; use hasDetectedAt() or valueOrDefault().
     */
    public function getDetectedAt(): string|\DateTimeInterface { return $this->get('detected_at'); }
    public function hasDetectedAt(): bool { return $this->has('detected_at'); }
    /** Why subscription billing cannot proceed. Treat unrecognized values as other. Value enum: "configuration", "retrying", "platform_review", "flint_restriction", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** When Flint next plans to retry a temporary billing issue, when scheduled. This is not a card decline retry. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When retry_at is omitted; use hasRetryAt() or valueOrDefault().
     */
    public function getRetryAt(): string|\DateTimeInterface { return $this->get('retry_at'); }
    public function hasRetryAt(): bool { return $this->has('retry_at'); }
}
