<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $merchant_reference
 * @property-read list<DeliveryWindowRequestInput|array<array-key, mixed>|\stdClass> $offered_windows
 * @property-read string|\DateTimeInterface $selection_guarantee_expires_at
 * @property-read string $service_level
 * @property-read string $type
 * @property-read string|\DateTimeInterface $window_end_at
 * @property-read string|\DateTimeInterface $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CallerSuppliedDeliveryOutcomeRequestAvailableInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CallerSuppliedDeliveryOutcomeRequestAvailableInput')); }
    /** Price of the delivery. Send it with type `available`. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** Last moment this rate can be offered in the quote. It must be later than the evaluation time plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at. Send it with type available. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Your private reference for this rate, up to 500 characters, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When merchant_reference is omitted; use hasMerchantReference() or valueOrDefault().
     */
    public function getMerchantReference(): string { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** Delivery windows the buyer can choose from. Send either `offered_windows` or both `window_start_at` and `window_end_at` with type `available`. [] (Value): {@see DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery outcome, with its time range, price, and the last moment a buyer can choose it.
     * @return list<DeliveryWindowRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Last moment a delivery selection can lock this rate for payment. It must be at or after expires_at. Send it with type available. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When selection_guarantee_expires_at is omitted; use hasSelectionGuaranteeExpiresAt() or valueOrDefault().
     */
    public function getSelectionGuaranteeExpiresAt(): string|\DateTimeInterface { return $this->get('selection_guarantee_expires_at'); }
    public function hasSelectionGuaranteeExpiresAt(): bool { return $this->has('selection_guarantee_expires_at'); }
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1.
     * @return string
     * @throws SdkError When service_level is omitted; use hasServiceLevel() or valueOrDefault().
     */
    public function getServiceLevel(): string { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
    /** Whether the method has a rate, is unavailable, or could not be priced. Value enum: "available".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** End of the delivery window for this rate. When present, send it with window_start_at, including when offered_windows is supplied. Send it only with type available. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the delivery window for this rate. When present, send it with window_end_at, including when offered_windows is supplied. Send it only with type available. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
