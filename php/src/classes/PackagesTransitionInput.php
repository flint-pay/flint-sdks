<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $package_id
 * @property-read array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesTransitionInput extends Model {
    /** @param array{'package_id': string, 'Idempotency-Key'?: string, 'X-Request-Id'?: string, 'Flint-Version'?: string, 'body': array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesTransitionInput')); }
    /** @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
    /** @return array{'action': string, 'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
