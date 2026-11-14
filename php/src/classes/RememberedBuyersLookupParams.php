<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $remembered_buyer_token
 * Presence-aware input; omitted fields throw when accessed. */
final class RememberedBuyersLookupParams extends Model {
    /** @param array{'remembered_buyer_token': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RememberedBuyersLookupParams')); }
    /** Token returned by a successful confirmation with remember_buyer. Send it only in the body. minLength: 47. maxLength: 47. pattern: ^rbt_[A-Za-z0-9_-]{43}$.
     * @return string
     * @throws SdkError When remembered_buyer_token is omitted; use hasRememberedBuyerToken() or valueOrDefault().
     */
    public function getRememberedBuyerToken(): string { return $this->get('remembered_buyer_token'); }
    public function hasRememberedBuyerToken(): bool { return $this->has('remembered_buyer_token'); }
}
