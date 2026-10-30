<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_funding_disposition_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardFundingDispositionsGetInput extends Model {
    /** @param array{'gift_card_funding_disposition_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardFundingDispositionsGetInput')); }
    /** Flint resource ID. Example: "gfd_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_funding_disposition_id is omitted; use hasGiftCardFundingDispositionId() or valueOrDefault().
     */
    public function getGiftCardFundingDispositionId(): string { return $this->get('gift_card_funding_disposition_id'); }
    public function hasGiftCardFundingDispositionId(): bool { return $this->has('gift_card_funding_disposition_id'); }
}
