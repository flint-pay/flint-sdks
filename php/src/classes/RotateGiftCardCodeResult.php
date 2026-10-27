<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $code
 * @property-read ?string $code_recovery_expires_at
 * @property-read GiftCard $gift_card
 * @property-read ?GiftCardNotification $gift_card_notification
 * Presence-aware response; omitted optional fields return null. */
final class RotateGiftCardCodeResult extends Model {
    /** @param array{'code'?: string, 'code_recovery_expires_at'?: string, 'gift_card': mixed, 'gift_card_notification'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('RotateGiftCardCodeResult')); }
    /** Shape $ (Value): string. The full current code. Omitted after the 24-hour recovery window or when this code has been replaced.
     * @return ?string
     */
    public function getCode(): ?string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Shape $ (Value): string. When recovery of this code expires. Omitted when the code cannot be recovered. Format: date-time.
     * @return ?string
     */
    public function getCodeRecoveryExpiresAt(): ?string { return $this->get('code_recovery_expires_at'); }
    public function hasCodeRecoveryExpiresAt(): bool { return $this->has('code_recovery_expires_at'); }
    /** Shape $ (Value): {@see GiftCard}. Merchant-issued purchased gift card. Posted balance includes reserved value; available value is balance minus reservations. Frozen value remains part of outstanding liability. Gift cards are independent resources and cannot be transferred across merchants or currencies.
     * @return GiftCard
     */
    public function getGiftCard(): GiftCard { return $this->get('gift_card'); }
    public function hasGiftCard(): bool { return $this->has('gift_card'); }
    /** Shape $ (Value): {@see GiftCardNotification}. A message sent to a gift card recipient.
     * @return ?GiftCardNotification
     */
    public function getGiftCardNotification(): ?GiftCardNotification { return $this->get('gift_card_notification'); }
    public function hasGiftCardNotification(): bool { return $this->has('gift_card_notification'); }
}
