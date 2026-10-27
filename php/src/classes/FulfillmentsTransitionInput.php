<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $fulfillment_id
 * @property-read array{'action': string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason': string, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'release_quantity': bool}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'scheduled_end_at': string|\DateTimeInterface, 'scheduled_start_at': string|\DateTimeInterface, 'timezone'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentsTransitionInput extends Model {
    /** @param array{'fulfillment_id': string, 'Idempotency-Key'?: string, 'body': array{'action': string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason': string, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'release_quantity': bool}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'scheduled_end_at': string|\DateTimeInterface, 'scheduled_start_at': string|\DateTimeInterface, 'timezone'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentsTransitionInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): Alternative shapes (see declared variants). The request body for: Transition fulfillment.
     * @return array{'action': string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason': string, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'release_quantity': bool}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'scheduled_end_at': string|\DateTimeInterface, 'scheduled_start_at': string|\DateTimeInterface, 'timezone'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
