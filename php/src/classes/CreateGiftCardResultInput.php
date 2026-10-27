<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $code
 * @property-read string|\DateTimeInterface $code_recovery_expires_at
 * @property-read GiftCardInput|array<array-key, mixed>|\stdClass $gift_card
 * @property-read GiftCardLoadInput|array<array-key, mixed>|\stdClass $gift_card_load
 * @property-read GiftCardNotificationInput|array<array-key, mixed>|\stdClass $gift_card_notification
 * @property-read list<GiftCardTransactionInput|array<array-key, mixed>|\stdClass> $gift_card_transactions
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateGiftCardResultInput extends Model {
    /** @param array{'code'?: string, 'code_recovery_expires_at'?: string|\DateTimeInterface, 'gift_card': GiftCardInput|array<array-key, mixed>|\stdClass, 'gift_card_load'?: GiftCardLoadInput|array<array-key, mixed>|\stdClass, 'gift_card_notification'?: GiftCardNotificationInput|array<array-key, mixed>|\stdClass, 'gift_card_transactions': list<GiftCardTransactionInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateGiftCardResultInput')); }
    /** Shape $ (Value): string. The full current code. Omitted after the 24-hour recovery window or when this code has been replaced.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string. When recovery of this code expires. Omitted when the code cannot be recovered. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When code_recovery_expires_at is omitted; use hasCodeRecoveryExpiresAt() or valueOrDefault().
     */
    public function getCodeRecoveryExpiresAt(): string|\DateTimeInterface { return $this->get('code_recovery_expires_at'); }
    public function hasCodeRecoveryExpiresAt(): bool { return $this->has('code_recovery_expires_at'); }
    /** Shape $ (Value): {@see GiftCardInput}. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.
     * @return GiftCardInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card is omitted; use hasGiftCard() or valueOrDefault().
     */
    public function getGiftCard(): mixed { return $this->get('gift_card'); }
    public function hasGiftCard(): bool { return $this->has('gift_card'); }
    /** Shape $ (Value): {@see GiftCardLoadInput}. Independent funding resource. Value and consideration are separate. External funding and import provenance are merchant-attested; no payment is collected by recording them. Replacement refund lots retain original funding provenance and do not represent new paid funding.
     * @return GiftCardLoadInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_load is omitted; use hasGiftCardLoad() or valueOrDefault().
     */
    public function getGiftCardLoad(): mixed { return $this->get('gift_card_load'); }
    public function hasGiftCardLoad(): bool { return $this->has('gift_card_load'); }
    /** Shape $ (Value): {@see GiftCardNotificationInput}. A message sent to a gift card recipient.
     * @return GiftCardNotificationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gift_card_notification is omitted; use hasGiftCardNotification() or valueOrDefault().
     */
    public function getGiftCardNotification(): mixed { return $this->get('gift_card_notification'); }
    public function hasGiftCardNotification(): bool { return $this->has('gift_card_notification'); }
    /** Shape $ (Value): Array of {@see GiftCardTransactionInput}. Shape $[] (Value): {@see GiftCardTransactionInput}. Immutable posted financial movement with signed amount, per-card sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     * @return list<GiftCardTransactionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When gift_card_transactions is omitted; use hasGiftCardTransactions() or valueOrDefault().
     */
    public function getGiftCardTransactions(): array { return $this->get('gift_card_transactions'); }
    public function hasGiftCardTransactions(): bool { return $this->has('gift_card_transactions'); }
}
