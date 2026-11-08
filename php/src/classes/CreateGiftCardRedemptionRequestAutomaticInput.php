<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object $amount_money
 * @property-read string $capture_mode
 * @property-read int $expected_gift_card_version
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $gift_card_id
 * @property-read string $sale_reference
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateGiftCardRedemptionRequestAutomaticInput extends Model {
    /** @param array{'amount_money': array{'amount': string, 'currency': string}|object, 'capture_mode': string, 'expected_gift_card_version'?: int, 'expires_at'?: string|\DateTimeInterface, 'gift_card_id': string, 'sale_reference': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateGiftCardRedemptionRequestAutomaticInput')); }
    /** The amount to redeem from the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): array|object { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Whether the redemption spends the value now or reserves it to capture later. Value enum: "automatic".
     * @return string
     * @throws SdkError When capture_mode is omitted; use hasCaptureMode() or valueOrDefault().
     */
    public function getCaptureMode(): string { return $this->get('capture_mode'); }
    public function hasCaptureMode(): bool { return $this->has('capture_mode'); }
    /** The gift card version last read. The command changes this card only when its current version matches. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_gift_card_version is omitted; use hasExpectedGiftCardVersion() or valueOrDefault().
     */
    public function getExpectedGiftCardVersion(): int { return $this->get('expected_gift_card_version'); }
    public function hasExpectedGiftCardVersion(): bool { return $this->has('expected_gift_card_version'); }
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** ID of the gift card the value is spent from. minLength: 1. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Your reference for the sale the redemption pays for. Required; 1 to 255 characters. The value is preserved exactly as sent. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When sale_reference is omitted; use hasSaleReference() or valueOrDefault().
     */
    public function getSaleReference(): string { return $this->get('sale_reference'); }
    public function hasSaleReference(): bool { return $this->has('sale_reference'); }
}
