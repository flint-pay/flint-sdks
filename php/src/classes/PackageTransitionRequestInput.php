<?php
declare(strict_types=1);
namespace Flint;
/** Presence-aware input; omitted fields throw when accessed. */
final class PackageTransitionRequestInput extends Model {
    /** @param array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'carrier'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'service_code'?: string, 'tracking_number'?: string, 'tracking_url'?: string}|object $values */
    public function __construct(mixed $values, array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageTransitionRequestInput')); }
}
