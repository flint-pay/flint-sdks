<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $package_id
 * @property-read array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'carrier'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'service_code'?: string, 'tracking_number'?: string, 'tracking_url'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesTransitionInput extends Model {
    /** @param array{'package_id': string, 'body': array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'carrier'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'service_code'?: string, 'tracking_number'?: string, 'tracking_url'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesTransitionInput')); }
    /** Flint package ID. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** The request body for: Transition package. Example: {"action":"mark_out_for_delivery","buyer_notification_behavior":"send","expected_delivery_at":"2026-05-15T18:00:00Z","expected_version":3}.
     * @return array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object|array{'action': string, 'buyer_notification_behavior'?: string, 'carrier'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'service_code'?: string, 'tracking_number'?: string, 'tracking_url'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
