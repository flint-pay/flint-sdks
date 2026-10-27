<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string|\DateTimeInterface $expire_previous_secret_at
 * Presence-aware input; omitted fields throw when accessed. */
final class RotateWebhookSecretRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'expire_previous_secret_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RotateWebhookSecretRequestInput')); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. When the replaced secret stops signing. Omit for a 24-hour overlap; send a time at or before now to stop it immediately. Must be no later than 7 days from now. Null is not accepted. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When expire_previous_secret_at is omitted; use hasExpirePreviousSecretAt() or valueOrDefault().
     */
    public function getExpirePreviousSecretAt(): string|\DateTimeInterface { return $this->get('expire_previous_secret_at'); }
    public function hasExpirePreviousSecretAt(): bool { return $this->has('expire_previous_secret_at'); }
}
