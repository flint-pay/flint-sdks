<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read int $expected_version
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $final_amount_money
 * @property-read PlatformFeeRequestInput|array<array-key, mixed>|\stdClass $platform_fee
 * @property-read list<CapturePaymentSplitRequestInput|array<array-key, mixed>|\stdClass> $splits
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $tip_money
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentIntentsCaptureParams extends Model {
    /** @param array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'final_amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'platform_fee'?: PlatformFeeRequestInput|array<array-key, mixed>|\stdClass, 'splits'?: list<CapturePaymentSplitRequestInput|array<array-key, mixed>|\stdClass>, 'tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentIntentsCaptureParams')); }
    /** Amount to capture, in the authorization's currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint releases the rest in the same request, and the payment intent can't be captured again. Must be greater than zero and at most capturable_money. Affirm payments can only be captured in full. Can't be combined with final_amount_money or tip_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** The bill without the tip. The capture collects final_amount_money plus tip_money in one charge. With only tip_money, the bill is the authorization minus the tip it carries; when the authorization is all tip, final_amount_money is required. Must be greater than zero, in the payment's currency. On an order's payment, it is at most the authorization minus the tip it carries, so the order's items, charges and tax can't grow; above it LIMIT_EXCEEDED with maximum_money on final_amount_money. The order releases the difference. Not accepted on Affirm or ACH debit payments. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When final_amount_money is omitted; use hasFinalAmountMoney() or valueOrDefault().
     */
    public function getFinalAmountMoney(): mixed { return $this->get('final_amount_money'); }
    public function hasFinalAmountMoney(): bool { return $this->has('final_amount_money'); }
    /** A platform fee your partner app charges on this payment, set when you know the final bill and tip. Only the partner app install token that created the payment can send it; from any other credential it is INVALID_REQUEST with NOT_ALLOWED on platform_fee. It replaces the fee the payment was created with, or adds one if it had none, after the same consent, capability and currency checks as at create: amount_money must be above zero and in the payment's currency, otherwise INVALID_REQUEST with INVALID_VALUE on platform_fee.amount_money. Without an approved cap in this currency it is ACTION_NOT_ALLOWED with reason platform_fee_consent_required; in live mode the partner app's platform_fees capability must be active. A fee that already ended is ACTION_NOT_ALLOWED with reason terminal_status. The cap and Flint's own fees apply to the captured total, so Flint lowers the fee rather than refusing the capture. A payment that belongs to an order can't take it at capture: INVALID_REQUEST with NOT_ALLOWED on platform_fee. Part of the request fingerprint. See [Platform fees](/docs/guides/platform-fees). A platform fee the partner app charges on the payment, beside Flint's fees. The installed merchant pays it, and Flint takes no share of it.
     * @return PlatformFeeRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_fee is omitted; use hasPlatformFee() or valueOrDefault().
     */
    public function getPlatformFee(): mixed { return $this->get('platform_fee'); }
    public function hasPlatformFee(): bool { return $this->has('platform_fee'); }
    /** Final split amounts for this capture. List every split that isn't canceled, once each, with an amount above zero in the payment's currency. Omit splits to keep the stored amounts. The total must fit after Flint's fees and one minor unit for the collecting merchant; otherwise INVALID_REQUEST with INVALID_VALUE on splits and maximum_money. An amount_money too small for the stored splits is LIMIT_EXCEEDED with minimum_money. A payment created without splits can't gain them. Part of the idempotency fingerprint. minItems: 1. maxItems: 25. [] (Value): {@see CapturePaymentSplitRequestInput}. The final amount of an existing split at capture.
     * @return list<CapturePaymentSplitRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When splits is omitted; use hasSplits() or valueOrDefault().
     */
    public function getSplits(): array { return $this->get('splits'); }
    public function hasSplits(): bool { return $this->has('splits'); }
    /** The tip, replacing the tip the authorization carries. Zero captures without a tip. With only final_amount_money, the tip is the one the authorization carries, or zero. At most the larger of 1,000.00 USD and final_amount_money; on an order's payment, the larger of 1,000.00 USD and the payment's share of the order's subtotal after discounts. Above it INVALID_REQUEST with INVALID_VALUE on tip_money and maximum_money. On an order's payment, keeping or lowering the tip the authorization carries is never refused, and the tip becomes this payment's part of the order's tip. A payment that doesn't carry part of the order's requested tip can't add a tip above zero beside it: INVALID_REQUEST with NOT_ALLOWED on tip_money. On an order, the bill can't grow, so without overcapture a tip fits only within what the bill leaves of the hold. The total is at most overcapture.maximum_capturable_money when overcapture is available, else capturable_money; above it LIMIT_EXCEEDED with maximum_money. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip_money is omitted; use hasTipMoney() or valueOrDefault().
     */
    public function getTipMoney(): mixed { return $this->get('tip_money'); }
    public function hasTipMoney(): bool { return $this->has('tip_money'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
