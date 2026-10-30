<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $gift_card_redemption_id
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardRedemptionsGetInput extends Model {
    /** @param array{'gift_card_redemption_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardRedemptionsGetInput')); }
    /** Flint resource ID. Example: "gcr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When gift_card_redemption_id is omitted; use hasGiftCardRedemptionId() or valueOrDefault().
     */
    public function getGiftCardRedemptionId(): string { return $this->get('gift_card_redemption_id'); }
    public function hasGiftCardRedemptionId(): bool { return $this->has('gift_card_redemption_id'); }
}
