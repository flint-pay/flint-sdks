<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $next_billing_at
 * @property-read string $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingScheduleUpdateInputExternalInput extends Model {
    /** @param array{'next_billing_at'?: string|\DateTimeInterface|null, 'owner': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingScheduleUpdateInputExternalInput')); }
    /** Future date at which Flint attempts the next charge. Omit to preserve the date or send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): string|\DateTimeInterface|null { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** Value enum: "external".
     * @return string
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
}
