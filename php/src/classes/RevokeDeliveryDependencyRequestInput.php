<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string $merchant_note
 * @property-read string $reason
 * @property-read RevokeDeliveryDependencyTargetInput|array<array-key, mixed>|\stdClass $target
 * Presence-aware input; omitted fields throw when accessed. */
final class RevokeDeliveryDependencyRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'merchant_note'?: string, 'reason': string, 'target': RevokeDeliveryDependencyTargetInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RevokeDeliveryDependencyRequestInput')); }
    /** Shape $ (Value): integer string. Required when target.target_type is delivery_method or delivery_rate_callback. The version of the stable resource whose current revision will be revoked. Omit it for exact revision, geography, and signing-key targets. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When merchant_note is omitted; use hasMerchantNote() or valueOrDefault().
     */
    public function getMerchantNote(): string { return $this->get('merchant_note'); }
    public function hasMerchantNote(): bool { return $this->has('merchant_note'); }
    /** Shape $ (Value): string.  Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): {@see RevokeDeliveryDependencyTargetInput}. A typed revocation target. Each target_type accepts only its resource-specific fields.
     * @return RevokeDeliveryDependencyTargetInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When target is omitted; use hasTarget() or valueOrDefault().
     */
    public function getTarget(): mixed { return $this->get('target'); }
    public function hasTarget(): bool { return $this->has('target'); }
}
