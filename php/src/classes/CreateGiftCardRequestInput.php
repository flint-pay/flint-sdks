<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $currency
 * @property-read string $customer_id
 * @property-read string $external_reference_id
 * @property-read array{'consideration_money'?: array{'amount': string, 'currency': string}|object|null, 'source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'source_created_at'?: string|\DateTimeInterface, 'value_money': array{'amount': string, 'currency': string}|object}|object|null $funding
 * @property-read GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass $notification
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateGiftCardRequestInput extends Model {
    /** @param array{'currency': string, 'customer_id'?: string, 'external_reference_id'?: string, 'funding'?: array{'consideration_money'?: array{'amount': string, 'currency': string}|object|null, 'source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'source_created_at'?: string|\DateTimeInterface, 'value_money': array{'amount': string, 'currency': string}|object}|object|null, 'notification'?: GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateGiftCardRequestInput')); }
    /** Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". Value enum: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see InitialGiftCardFundingInput} or null. Shape $.anyOf[1] (Value): {@see InitialGiftCardFundingInput}. The initial funding for a new gift card: the `source` of the value, the `value_money`, and optional consideration and source time. Shape $.anyOf[2] (Value): null.
     * @return array{'consideration_money'?: array{'amount': string, 'currency': string}|object|null, 'source': array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id': string}|object|array{'customer_id': string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id'?: string, 'payment_intent_id'?: string}|object|array{'customer_id'?: string, 'external_reference_id': string, 'funding_source_type': string, 'order_id': string, 'payment_intent_id': string}|object, 'source_created_at'?: string|\DateTimeInterface, 'value_money': array{'amount': string, 'currency': string}|object}|object|null
     * @throws SdkError When funding is omitted; use hasFunding() or valueOrDefault().
     */
    public function getFunding(): mixed { return $this->get('funding'); }
    public function hasFunding(): bool { return $this->has('funding'); }
    /** Shape $ (Value): {@see GiftCardNotificationRecipientInput}. Optional recipient notification recorded with issuance. Requires commerce.gift_cards.secrets.write in addition to issuance authority. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When notification is omitted; use hasNotification() or valueOrDefault().
     */
    public function getNotification(): mixed { return $this->get('notification'); }
    public function hasNotification(): bool { return $this->has('notification'); }
}
