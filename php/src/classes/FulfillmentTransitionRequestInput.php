<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentTransitionRequestInput extends Model {
    /** @param array{'action': string, 'buyer_notification_behavior'?: string, 'completed_at'?: string|\DateTimeInterface, 'expected_version'?: string, 'reason'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'reason'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason': string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason'?: string, 'release_quantity': bool}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason'?: string, 'scheduled_end_at': string|\DateTimeInterface, 'scheduled_start_at': string|\DateTimeInterface, 'timezone'?: string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentTransitionRequestInput')); }
}
