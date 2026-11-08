<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionEndAfterRequestInput extends Model {
    /** @param array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone'?: string, 'type': string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionEndAfterRequestInput')); }
}
