<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'remembered_buyer_token': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class RememberedBuyersLookupInput extends Model {
    /** @param array{'body': array{'remembered_buyer_token': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RememberedBuyersLookupInput')); }
    /** An identity token held by this checkout's backend. A token identifies the buyer and never authorizes saved cards. Example: {"remembered_buyer_token":"rbt_AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}.
     * @return array{'remembered_buyer_token': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
