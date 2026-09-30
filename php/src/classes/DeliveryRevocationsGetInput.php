<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_revocation_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRevocationsGetInput extends Model {
    /** @param array{'delivery_revocation_id': string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationsGetInput')); }
    /** @return string
     * @throws SdkError When delivery_revocation_id is omitted; use hasDeliveryRevocationId() or valueOrDefault().
     */
    public function getDeliveryRevocationId(): string { return $this->get('delivery_revocation_id'); }
    public function hasDeliveryRevocationId(): bool { return $this->has('delivery_revocation_id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
