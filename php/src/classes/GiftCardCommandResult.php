<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read GiftCardFundingLossDisposition $funding_loss_disposition
 * @property-read GiftCard $gift_card
 * @property-read GiftCardLoad $gift_card_load
 * @property-read GiftCardNotification $gift_card_notification
 * @property-read GiftCardRedemption $gift_card_redemption
 * @property-read list<string> $gift_card_transaction_ids
 * @property-read list<GiftCard> $gift_cards
 * @property-read string $secret_recovery_expires_at
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardCommandResult extends Model {
    /** @param array{'code'?: string, 'funding_loss_disposition'?: mixed, 'gift_card'?: mixed, 'gift_card_load'?: mixed, 'gift_card_notification'?: mixed, 'gift_card_redemption'?: mixed, 'gift_card_transaction_ids': list<string>, 'gift_cards'?: list<mixed>, 'secret_recovery_expires_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCommandResult')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return GiftCardFundingLossDisposition
     * @throws SdkError When funding_loss_disposition is omitted; use hasFundingLossDisposition() or valueOrDefault().
     */
    public function getFundingLossDisposition(): GiftCardFundingLossDisposition { return $this->get('funding_loss_disposition'); }
    public function hasFundingLossDisposition(): bool { return $this->has('funding_loss_disposition'); }
    /** @return GiftCard
     * @throws SdkError When gift_card is omitted; use hasGiftCard() or valueOrDefault().
     */
    public function getGiftCard(): GiftCard { return $this->get('gift_card'); }
    public function hasGiftCard(): bool { return $this->has('gift_card'); }
    /** @return GiftCardLoad
     * @throws SdkError When gift_card_load is omitted; use hasGiftCardLoad() or valueOrDefault().
     */
    public function getGiftCardLoad(): GiftCardLoad { return $this->get('gift_card_load'); }
    public function hasGiftCardLoad(): bool { return $this->has('gift_card_load'); }
    /** @return GiftCardNotification
     * @throws SdkError When gift_card_notification is omitted; use hasGiftCardNotification() or valueOrDefault().
     */
    public function getGiftCardNotification(): GiftCardNotification { return $this->get('gift_card_notification'); }
    public function hasGiftCardNotification(): bool { return $this->has('gift_card_notification'); }
    /** @return GiftCardRedemption
     * @throws SdkError When gift_card_redemption is omitted; use hasGiftCardRedemption() or valueOrDefault().
     */
    public function getGiftCardRedemption(): GiftCardRedemption { return $this->get('gift_card_redemption'); }
    public function hasGiftCardRedemption(): bool { return $this->has('gift_card_redemption'); }
    /** @return list<string>
     * @throws SdkError When gift_card_transaction_ids is omitted; use hasGiftCardTransactionIds() or valueOrDefault().
     */
    public function getGiftCardTransactionIds(): array { return $this->get('gift_card_transaction_ids'); }
    public function hasGiftCardTransactionIds(): bool { return $this->has('gift_card_transaction_ids'); }
    /** @return list<GiftCard>
     * @throws SdkError When gift_cards is omitted; use hasGiftCards() or valueOrDefault().
     */
    public function getGiftCards(): array { return $this->get('gift_cards'); }
    public function hasGiftCards(): bool { return $this->has('gift_cards'); }
    /** @return string
     * @throws SdkError When secret_recovery_expires_at is omitted; use hasSecretRecoveryExpiresAt() or valueOrDefault().
     */
    public function getSecretRecoveryExpiresAt(): string { return $this->get('secret_recovery_expires_at'); }
    public function hasSecretRecoveryExpiresAt(): bool { return $this->has('secret_recovery_expires_at'); }
}
