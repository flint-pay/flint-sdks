<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $starts_at
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingStartInputScheduledInput extends Model {
    /** @param array{'starts_at': string|\DateTimeInterface, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingStartInputScheduledInput')); }
    /** Future instant when the first billing period starts. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Value enum: "scheduled".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}
