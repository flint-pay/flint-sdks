<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionBillingStartRequestInput extends Model {
    /** @param array{'type': string}|object|array{'starts_at': string|\DateTimeInterface, 'type': string}|object|array{'period_started_at': string|\DateTimeInterface, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionBillingStartRequestInput')); }
}
