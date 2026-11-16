<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CardDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $card
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $payment_method_id
 * @property-read string|null $status
 * @property-read string|null $type
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedPaymentMethodSummaryPreviousAttributesInput extends Model {
    /** @param array{'card'?: CardDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'created_at'?: string|\DateTimeInterface|null, 'customer_id'?: string|null, 'payment_method_id'?: string|null, 'status'?: string|null, 'type'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPaymentMethodSummaryPreviousAttributesInput')); }
    /** Brand, expiry and last four digits. Present when type is card. anyOf[1] (Value): {@see CardDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return CardDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When card is omitted; use hasCard() or valueOrDefault().
     */
    public function getCard(): mixed { return $this->get('card'); }
    public function hasCard(): bool { return $this->has('card'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer this payment method belongs to. anyOf[1] (Value): string. Customer this payment method belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Unique identifier for this payment method, prefixed `pm_`. anyOf[1] (Value): string. Unique identifier for this payment method, prefixed `pm_`. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): mixed { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Value enum: "pending", "active", "expired", "archived", "failed". anyOf[1] (Value): string. Whether the payment method can be charged. Treat any value other than active as not chargeable, including values added later. Value enum: "pending", "active", "expired", "archived", "failed". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Kind of payment method. Value enum: "card". anyOf[1] (Value): string. Kind of payment method. Value enum: "card". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}
