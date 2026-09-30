<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class UpdateSubscriptionBillingScheduleRequestInput extends Model {
    /** @param array{'billing_anchor_day'?: int, 'initiated_by': string, 'next_billing_at': string|\DateTimeInterface, 'owner': string}|object|array{'initiated_by': string, 'next_billing_at'?: string|\DateTimeInterface|null, 'owner': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateSubscriptionBillingScheduleRequestInput')); }
}
