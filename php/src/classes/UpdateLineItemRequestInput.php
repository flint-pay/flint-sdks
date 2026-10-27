<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $description
 * @property-read string $expected_version
 * @property-read array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null $gift_card_recipient
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read list<OrderLineItemModifierRequestInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read string $name
 * @property-read string $quantity
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null $subscription
 * @property-read OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateLineItemRequestInput extends Model {
    /** @param array{'description'?: string|null, 'expected_version'?: string, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<OrderLineItemModifierRequestInput|array<array-key, mixed>|\stdClass>, 'name'?: string, 'quantity'?: string, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateLineItemRequestInput')); }
    /** Shape $ (Value): string or null.  Send null to clear description. minLength: 1.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): integer string. Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, subscription. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): {@see GiftCardPurchaseRecipientPatchRequestInput} or null. Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. Shape $.anyOf[1] (Value): {@see GiftCardPurchaseRecipientPatchRequestInput}. Changes to the recipient of a gift card purchase when updating a line item. Send null for `name` or `message` to clear it. Shape $.anyOf[2] (Value): null.
     * @return array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null
     * @throws SdkError When gift_card_recipient is omitted; use hasGiftCardRecipient() or valueOrDefault().
     */
    public function getGiftCardRecipient(): mixed { return $this->get('gift_card_recipient'); }
    public function hasGiftCardRecipient(): bool { return $this->has('gift_card_recipient'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): Array of {@see OrderLineItemModifierRequestInput}. Shape $[] (Value): {@see OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
     * @return list<OrderLineItemModifierRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 9999.
     * @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see SubscribedLineRequestInput} or null. Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. Shape $.anyOf[1] (Value): {@see SubscribedLineRequestInput}. Makes an order line a subscription purchase, with the subscription offer and billing interval. Shape $.anyOf[2] (Value): null.
     * @return array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Shape $ (Value): {@see OrderCalculatedLineItemTaxInput}. Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.
     * @return OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
