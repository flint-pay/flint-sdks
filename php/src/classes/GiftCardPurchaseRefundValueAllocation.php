<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $amount
 * @property-read string $gift_card_id
 * @property-read string $gift_card_load_id
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardPurchaseRefundValueAllocation extends Model {
    /** @param array{'amount': string, 'gift_card_id': string, 'gift_card_load_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRefundValueAllocation')); }
    /** @return string
     * @throws SdkError When amount is omitted; use hasAmount() or valueOrDefault().
     */
    public function getAmount(): string { return $this->get('amount'); }
    public function hasAmount(): bool { return $this->has('amount'); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return string
     * @throws SdkError When gift_card_load_id is omitted; use hasGiftCardLoadId() or valueOrDefault().
     */
    public function getGiftCardLoadId(): string { return $this->get('gift_card_load_id'); }
    public function hasGiftCardLoadId(): bool { return $this->has('gift_card_load_id'); }
}
