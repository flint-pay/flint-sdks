<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $remembered_buyer_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeRevokeRememberedBuyerInput extends Model {
    /** @param array{'remembered_buyer_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeRevokeRememberedBuyerInput')); }
    /** Remembered buyer to forget. Example: "rbuy_01KEZF7C006G3NNTKE2C2ZTVM0".
     * @return string
     * @throws SdkError When remembered_buyer_id is omitted; use hasRememberedBuyerId() or valueOrDefault().
     */
    public function getRememberedBuyerId(): string { return $this->get('remembered_buyer_id'); }
    public function hasRememberedBuyerId(): bool { return $this->has('remembered_buyer_id'); }
}
