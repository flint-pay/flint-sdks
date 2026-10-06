<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read GiftCardInput|array<array-key, mixed>|\stdClass $gift_card
 * @property-read GiftCardLoadInput|array<array-key, mixed>|\stdClass $gift_card_load
 * @property-read GiftCardNotificationInput|array<array-key, mixed>|\stdClass $gift_card_notification
 * @property-read GiftCardRedemptionInput|array<array-key, mixed>|\stdClass $gift_card_redemption
 * @property-read list<string> $gift_card_transaction_ids
 * @property-read string|\DateTimeInterface $secret_recovery_expires_at
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardCommandResultInput extends Model {
    /** @param array{'code'?: string, 'gift_card'?: GiftCardInput|array<array-key, mixed>|\stdClass, 'gift_card_load'?: GiftCardLoadInput|array<array-key, mixed>|\stdClass, 'gift_card_notification'?: GiftCardNotificationInput|array<array-key, mixed>|\stdClass, 'gift_card_redemption'?: GiftCardRedemptionInput|array<array-key, mixed>|\stdClass, 'gift_card_transaction_ids': list<string>, 'secret_recovery_expires_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardCommandResultInput')); }
    /** @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** @return GiftCardInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card is omitted; use hasGiftCard() or valueOrDefault().
     */
    public function getGiftCard(): mixed { return $this->get('gift_card'); }
    public function hasGiftCard(): bool { return $this->has('gift_card'); }
    /** @return GiftCardLoadInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_load is omitted; use hasGiftCardLoad() or valueOrDefault().
     */
    public function getGiftCardLoad(): mixed { return $this->get('gift_card_load'); }
    public function hasGiftCardLoad(): bool { return $this->has('gift_card_load'); }
    /** @return GiftCardNotificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_notification is omitted; use hasGiftCardNotification() or valueOrDefault().
     */
    public function getGiftCardNotification(): mixed { return $this->get('gift_card_notification'); }
    public function hasGiftCardNotification(): bool { return $this->has('gift_card_notification'); }
    /** @return GiftCardRedemptionInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_redemption is omitted; use hasGiftCardRedemption() or valueOrDefault().
     */
    public function getGiftCardRedemption(): mixed { return $this->get('gift_card_redemption'); }
    public function hasGiftCardRedemption(): bool { return $this->has('gift_card_redemption'); }
    /** @return list<string>
     * @throws SdkError When gift_card_transaction_ids is omitted; use hasGiftCardTransactionIds() or valueOrDefault().
     */
    public function getGiftCardTransactionIds(): array { return $this->get('gift_card_transaction_ids'); }
    public function hasGiftCardTransactionIds(): bool { return $this->has('gift_card_transaction_ids'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When secret_recovery_expires_at is omitted; use hasSecretRecoveryExpiresAt() or valueOrDefault().
     */
    public function getSecretRecoveryExpiresAt(): string|\DateTimeInterface { return $this->get('secret_recovery_expires_at'); }
    public function hasSecretRecoveryExpiresAt(): bool { return $this->has('secret_recovery_expires_at'); }
}
