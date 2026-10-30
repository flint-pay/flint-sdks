<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $fulfillment_id
 * @property-read array{'action': string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason': string, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'release_quantity': bool}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'scheduled_end_at': string|\DateTimeInterface, 'scheduled_start_at': string|\DateTimeInterface, 'timezone'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsTransitionInput extends Model {
    /** @param array{'fulfillment_id': string, 'body': array{'action': string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason': string, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'release_quantity': bool}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'scheduled_end_at': string|\DateTimeInterface, 'scheduled_start_at': string|\DateTimeInterface, 'timezone'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsTransitionInput')); }
    /** Flint fulfillment ID. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** The request body for: Transition fulfillment. Example: {"action":"mark_packed","buyer_notification_behavior":"send","expected_version":4,"occurred_at":"2026-05-13T11:00:00Z"}.
     * @return array{'action': string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason': string, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'release_quantity': bool}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'scheduled_end_at': string|\DateTimeInterface, 'scheduled_start_at': string|\DateTimeInterface, 'timezone'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
