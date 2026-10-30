<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $package_id
 * @property-read array{'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesVoidInput extends Model {
    /** @param array{'package_id': string, 'body'?: array{'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesVoidInput')); }
    /** Flint package ID. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** The request body for: Void package. Example: {"buyer_notification_behavior":"suppress","expected_version":1,"occurred_at":"2026-05-13T16:09:00Z","reason_message":"Package was repacked before pickup."}.
     * @return array{'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
