<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $amount_money
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $failure_category
 * @property-read string $merchant_reference
 * @property-read list<DeliveryRateEvaluationWindowInput|array<array-key, mixed>|\stdClass> $offered_windows
 * @property-read bool $retryable
 * @property-read string|\DateTimeInterface $selection_guarantee_expires_at
 * @property-read string $service_level
 * @property-read string $type
 * @property-read string $unavailable_reason
 * @property-read string|\DateTimeInterface $window_end_at
 * @property-read string|\DateTimeInterface $window_start_at
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRateEvaluationOutcomeInput extends Model {
    /** @param array{'amount_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at': string|\DateTimeInterface, 'failure_category'?: string, 'merchant_reference'?: string, 'offered_windows'?: list<DeliveryRateEvaluationWindowInput|array<array-key, mixed>|\stdClass>, 'retryable'?: bool, 'selection_guarantee_expires_at': string|\DateTimeInterface, 'service_level'?: string, 'type': string, 'unavailable_reason'?: string, 'window_end_at'?: string|\DateTimeInterface, 'window_start_at'?: string|\DateTimeInterface}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'failure_category'?: string, 'merchant_reference'?: string, 'offered_windows'?: list<DeliveryRateEvaluationWindowInput|array<array-key, mixed>|\stdClass>, 'retryable'?: bool, 'selection_guarantee_expires_at'?: string|\DateTimeInterface, 'service_level'?: string, 'type': string, 'unavailable_reason': string, 'window_end_at'?: string|\DateTimeInterface, 'window_start_at'?: string|\DateTimeInterface}|object|array{'amount_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'expires_at'?: string|\DateTimeInterface, 'failure_category': string, 'merchant_reference'?: string, 'offered_windows'?: list<DeliveryRateEvaluationWindowInput|array<array-key, mixed>|\stdClass>, 'retryable'?: bool, 'selection_guarantee_expires_at'?: string|\DateTimeInterface, 'service_level'?: string, 'type': string, 'unavailable_reason'?: string, 'window_end_at'?: string|\DateTimeInterface, 'window_start_at'?: string|\DateTimeInterface}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRateEvaluationOutcomeInput')); }
    /** The price in the request's currency, within the method's minimum_fee_currency_options and maximum_fee_currency_options. With offered_windows, it must equal the cheapest window's price. Send it with type available. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When amount_money is omitted; use hasAmountMoney() or valueOrDefault().
     */
    public function getAmountMoney(): mixed { return $this->get('amount_money'); }
    public function hasAmountMoney(): bool { return $this->has('amount_money'); }
    /** When the price stops being offered. It must be later than evaluated_at plus the method's minimum_option_lifetime_seconds, and no later than delivery_quote_expires_at. Send it with type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Why you couldn't price the method. Send it with type cannot_calculate. Flint reserves the callback_ categories for failures it detects. - `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it matches the documented response schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct the address fields rejected by verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address, or retry when address verification is available. Value enum: "dependency_failure", "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed", "address_could_not_be_verified".
     * @return string
     * @throws SdkError When failure_category is omitted; use hasFailureCategory() or valueOrDefault().
     */
    public function getFailureCategory(): string { return $this->get('failure_category'); }
    public function hasFailureCategory(): bool { return $this->has('failure_category'); }
    /** Your private reference for the rate, such as a carrier rate ID, with no leading or trailing spaces. Flint stores it with the buyer's selection and never shows it to buyers. maxLength: 500. pattern: ^(?:\S(?:[\s\S]*\S)?)?$.
     * @return string
     * @throws SdkError When merchant_reference is omitted; use hasMerchantReference() or valueOrDefault().
     */
    public function getMerchantReference(): string { return $this->get('merchant_reference'); }
    public function hasMerchantReference(): bool { return $this->has('merchant_reference'); }
    /** Delivery windows the buyer can choose from, without overlaps. Send it with type available. maxItems: 50. [] (Value): {@see DeliveryRateEvaluationWindowInput}. A delivery window the buyer can choose in an available rate evaluation outcome.
     * @return list<DeliveryRateEvaluationWindowInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When offered_windows is omitted; use hasOfferedWindows() or valueOrDefault().
     */
    public function getOfferedWindows(): array { return $this->get('offered_windows'); }
    public function hasOfferedWindows(): bool { return $this->has('offered_windows'); }
    /** Whether a new quote might succeed. Send it with type cannot_calculate; omitted means false.
     * @return bool
     * @throws SdkError When retryable is omitted; use hasRetryable() or valueOrDefault().
     */
    public function getRetryable(): bool { return $this->get('retryable'); }
    public function hasRetryable(): bool { return $this->has('retryable'); }
    /** How long the price holds once the buyer selects it. It must not be earlier than expires_at, and Flint holds a selection for at most 24 hours. Send it with type available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When selection_guarantee_expires_at is omitted; use hasSelectionGuaranteeExpiresAt() or valueOrDefault().
     */
    public function getSelectionGuaranteeExpiresAt(): string|\DateTimeInterface { return $this->get('selection_guarantee_expires_at'); }
    public function hasSelectionGuaranteeExpiresAt(): bool { return $this->has('selection_guarantee_expires_at'); }
    /** Replaces the method's configured service level for this option: `economy`, `standard`, `expedited`, `express`, `overnight`, or `same_day` for a shipment, and `on_demand`, `same_day`, or `scheduled` for local delivery. Send it with type available.
     * @return string
     * @throws SdkError When service_level is omitted; use hasServiceLevel() or valueOrDefault().
     */
    public function getServiceLevel(): string { return $this->get('service_level'); }
    public function hasServiceLevel(): bool { return $this->has('service_level'); }
    /** The outcome type, which selects the fields the outcome carries. Value enum: "available", "unavailable", "cannot_calculate".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Why you don't offer the method for this request. Send it with type unavailable. - `destination_not_served`: Use a destination covered by this method or choose another method. - `pickup_unavailable`: Choose an available pickup method or location. - `no_window_available`: Choose another offered window or a method with availability for the requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The origin or pickup location cannot supply the requested inventory. Reduce the quantity, replenish inventory, or choose another origin or method. Value enum: "destination_not_served", "pickup_unavailable", "no_window_available", "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     * @return string
     * @throws SdkError When unavailable_reason is omitted; use hasUnavailableReason() or valueOrDefault().
     */
    public function getUnavailableReason(): string { return $this->get('unavailable_reason'); }
    public function hasUnavailableReason(): bool { return $this->has('unavailable_reason'); }
    /** Exclusive end of the delivery window, after window_start_at and within 366 days, or within the method's scheduling horizon for a schedule_window estimate. With offered_windows, it must equal the last window's end_at when present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_end_at is omitted; use hasWindowEndAt() or valueOrDefault().
     */
    public function getWindowEndAt(): string|\DateTimeInterface { return $this->get('window_end_at'); }
    public function hasWindowEndAt(): bool { return $this->has('window_end_at'); }
    /** Start of the delivery window, not earlier than evaluated_at. Required with window_end_at unless offered_windows is sent, in which case it must equal the first window's start_at when present. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When window_start_at is omitted; use hasWindowStartAt() or valueOrDefault().
     */
    public function getWindowStartAt(): string|\DateTimeInterface { return $this->get('window_start_at'); }
    public function hasWindowStartAt(): bool { return $this->has('window_start_at'); }
}
