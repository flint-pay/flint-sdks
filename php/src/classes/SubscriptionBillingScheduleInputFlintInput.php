<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingScheduleInputFlintInput extends Model {
    /** @param array{'owner': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingScheduleInputFlintInput')); }
    /** Value enum: "flint".
     * @return string
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): string { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
}
