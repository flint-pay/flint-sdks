<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_note
 * @property-read string $reason
 * @property-read DeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass $target
 * Presence-aware input; omitted fields throw when accessed. */
final class RevokeDeliveryDependencyRequestInput extends Model {
    /** @param array{'merchant_note'?: string, 'reason': string, 'target': DeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RevokeDeliveryDependencyRequestInput')); }
    /** @return string
     * @throws SdkError When merchant_note is omitted; use hasMerchantNote() or valueOrDefault().
     */
    public function getMerchantNote(): string { return $this->get('merchant_note'); }
    public function hasMerchantNote(): bool { return $this->has('merchant_note'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return DeliveryRevocationTargetInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When target is omitted; use hasTarget() or valueOrDefault().
     */
    public function getTarget(): mixed { return $this->get('target'); }
    public function hasTarget(): bool { return $this->has('target'); }
}
