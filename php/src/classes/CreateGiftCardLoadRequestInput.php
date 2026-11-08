<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'amount': string, 'currency': string}|object|null $consideration_money
 * @property-read int $expected_gift_card_version
 * @property-read string $gift_card_id
 * @property-read array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object $source
 * @property-read string|\DateTimeInterface $source_created_at
 * @property-read array{'amount': string, 'currency': string}|object $value_money
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateGiftCardLoadRequestInput extends Model {
    /** @param array{'consideration_money'?: array{'amount': string, 'currency': string}|object|null, 'expected_gift_card_version'?: int, 'gift_card_id': string, 'source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'source_created_at'?: string|\DateTimeInterface, 'value_money': array{'amount': string, 'currency': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateGiftCardLoadRequestInput')); }
    /** What the buyer paid for the value, separate from `value_money`. `null` when no payment amount is recorded. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[1].amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. anyOf[1].currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When consideration_money is omitted; use hasConsiderationMoney() or valueOrDefault().
     */
    public function getConsiderationMoney(): mixed { return $this->get('consideration_money'); }
    public function hasConsiderationMoney(): bool { return $this->has('consideration_money'); }
    /** The gift card version last read. The command changes this card only when its current version matches. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_gift_card_version is omitted; use hasExpectedGiftCardVersion() or valueOrDefault().
     */
    public function getExpectedGiftCardVersion(): int { return $this->get('expected_gift_card_version'); }
    public function hasExpectedGiftCardVersion(): bool { return $this->has('expected_gift_card_version'); }
    /** The gift card to load. minLength: 1. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Where the value came from, with your reference for it. Where the value of a gift card load came from, such as an external payment, a Flint payment, an import, or an adjustment, with your reference for it. funding_source_type (Required): string. Where the value came from. Value enum: "external_payment", "flint_payment", "import". customer_id (Optional): string. ID of the customer the funding is attributed to. Required for `external_payment` and `flint_manual_payment`; optional for `import`. minLength: 1. maxLength: 255. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". external_reference_id (Required): string. Your reference for the payment or import record that funded this value, such as a POS sale ID. Required; 1 to 255 characters. minLength: 1. maxLength: 255. Example: "warehouse-1842". order_id (Optional): string. ID of the order that funded the value. Required for `flint_manual_payment` and `store_credit`; not accepted for `external_payment` or `import`. minLength: 1. maxLength: 255. Example: "ord_01KEZF7C0054GQKJ142A8X367A". payment_intent_id (Optional): string. The original payment for flint_payment or store_credit value. For standalone paid funding, use a captured payment intent without an order_id. Order-linked payments fund purchased cards or store credit through their order. minLength: 1. maxLength: 255. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". oneOf[1] (Value): {@see GiftCardFundingSourceExternalPaymentRequestInput}. The `external_payment` variant of `GiftCardFundingSource`. oneOf[2] (Value): {@see GiftCardFundingSourceFlintPaymentRequestInput}. The `flint_payment` variant of `GiftCardFundingSource`. oneOf[3] (Value): {@see GiftCardFundingSourceFlintManualPaymentRequestInput}. The `flint_manual_payment` variant of `GiftCardFundingSource`. oneOf[4] (Value): {@see GiftCardFundingSourceImportRequestInput}. The `import` variant of `GiftCardFundingSource`. oneOf[5] (Value): {@see GiftCardFundingSourceAdjustmentRequestInput}. The `adjustment` variant of `GiftCardFundingSource`. oneOf[6] (Value): {@see GiftCardFundingSourceGiftCardRefundRequestInput}. The `gift_card_refund` variant of `GiftCardFundingSource`. oneOf[7] (Value): {@see GiftCardFundingSourceGiftCardPurchaseRefundRecoveryRequestInput}. The `gift_card_purchase_refund_recovery` variant of `GiftCardFundingSource`. oneOf[8] (Value): {@see GiftCardFundingSourceStoreCreditRequestInput}. The `store_credit` variant of `GiftCardFundingSource`.
     * @return array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When source_created_at is omitted; use hasSourceCreatedAt() or valueOrDefault().
     */
    public function getSourceCreatedAt(): string|\DateTimeInterface { return $this->get('source_created_at'); }
    public function hasSourceCreatedAt(): bool { return $this->has('source_created_at'); }
    /** The face value the load adds to the card. Monetary amount represented as integer minor units plus an ISO 4217 currency code. amount (Required): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0. currency (Required): string. ISO 4217 currency code for this amount. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When value_money is omitted; use hasValueMoney() or valueOrDefault().
     */
    public function getValueMoney(): array|object { return $this->get('value_money'); }
    public function hasValueMoney(): bool { return $this->has('value_money'); }
}
