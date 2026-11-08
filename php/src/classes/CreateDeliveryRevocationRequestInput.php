<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_note
 * @property-read string $reason
 * @property-read CreateDeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass $target
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryRevocationRequestInput extends Model {
    /** @param array{'merchant_note'?: string, 'reason': string, 'target': CreateDeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryRevocationRequestInput')); }
    /** Optional incident context retained with this revocation. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When merchant_note is omitted; use hasMerchantNote() or valueOrDefault().
     */
    public function getMerchantNote(): string { return $this->get('merchant_note'); }
    public function hasMerchantNote(): bool { return $this->has('merchant_note'); }
    /** Why this dependency must no longer be used. Value enum: "unsafe_configuration", "location_unavailable", "credential_compromise", "legal_requirement", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The parent and exact child identity to fence. Each target_type accepts only its own IDs. The parent and exact child identity to fence. Targets never resolve an alias to a current revision.
     * @return CreateDeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When target is omitted; use hasTarget() or valueOrDefault().
     */
    public function getTarget(): mixed { return $this->get('target'); }
    public function hasTarget(): bool { return $this->has('target'); }
}
