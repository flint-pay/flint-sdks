<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingScheduleRequestInput extends Model {
    /** @param array{'owner': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingScheduleRequestInput')); }
    /** Who supplies billing dates: `flint` computes each next billing date; `external` waits for you to set `next_billing_at`. Value enum: "flint", "external".
     * @return string
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
}
