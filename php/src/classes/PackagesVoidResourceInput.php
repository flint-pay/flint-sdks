<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $package_id
 * @property-read array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, ...}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesVoidResourceInput extends Model {
    /** @param array{'package_id': string, 'Idempotency-Key'?: string, 'body'?: array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, ...}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesVoidResourceInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Shape $ (Value): string. maxLength: 255.
     * @return string
     * @throws SdkError When Idempotency-Key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('Idempotency-Key'); }
    public function hasIdempotencyKey(): bool { return $this->has('Idempotency-Key'); }
    /** Shape $ (Value): object. The request body for: Void package.
     * @return array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, ...}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
