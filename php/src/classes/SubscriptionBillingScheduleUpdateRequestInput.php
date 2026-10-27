<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingScheduleUpdateRequestInput extends Model {
    /** @param array{'billing_anchor_day'?: int, 'next_billing_at': string|\DateTimeInterface, 'owner': string}|object|array{'next_billing_at'?: string|\DateTimeInterface|null, 'owner': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingScheduleUpdateRequestInput')); }
}
