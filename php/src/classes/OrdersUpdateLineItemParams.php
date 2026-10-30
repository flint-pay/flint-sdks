<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $description
 * @property-read int $expected_version
 * @property-read array{'amount': string, 'currency': string}|object $gift_card_face_value_money
 * @property-read array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null $gift_card_recipient
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object> $modifiers
 * @property-read string $name
 * @property-read int $quantity
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null $subscription
 * @property-read OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass $tax
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $unit_price_money
 * Presence-aware input; omitted fields throw when accessed. */
final class OrdersUpdateLineItemParams extends Model {
    /** @param array{'description'?: string|null, 'expected_version'?: int, 'gift_card_face_value_money'?: array{'amount': string, 'currency': string}|object, 'gift_card_recipient'?: array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'modifiers'?: list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object>, 'name'?: string, 'quantity'?: int, 'subscription'?: array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null, 'tax'?: OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass, 'unit_price_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrdersUpdateLineItemParams')); }
    /** Send null to clear description. minLength: 1.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Order version from the last order read, returned in data.version. Required when any of these fields is present: modifiers, gift_card_recipient, gift_card_face_value_money, subscription. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Selects the face value of an unpaid, unfunded gift card line within its frozen offer's custom_amount_bounds and reprices the order. Fixed-denomination offers accept only their current value. Omission preserves the value; null is not allowed. Requires expected_version from the order. Checkout credentials may send this field alone or together with gift_card_recipient. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. amount (Required): integer string. Amount in the currency's smallest unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1. maximum: 200000. currency (Required): string. Three-letter ISO 4217 currency code. Value enum: "USD".
     * @return array{'amount': string, 'currency': string}|object
     * @throws SdkError When gift_card_face_value_money is omitted; use hasGiftCardFaceValueMoney() or valueOrDefault().
     */
    public function getGiftCardFaceValueMoney(): array|object { return $this->get('gift_card_face_value_money'); }
    public function hasGiftCardFaceValueMoney(): bool { return $this->has('gift_card_face_value_money'); }
    /** Replaces the recipient of an unfunded gift card purchase. Omission preserves it; null clears it. Send expected_version from the order. Send null to clear gift_card_recipient. Requires expected_version. anyOf[1] (Value): {@see GiftCardPurchaseRecipientPatchRequestInput}. Changes to the recipient of a gift card purchase when updating a line item. Send null for `name` or `message` to clear it. anyOf[2] (Value): null.
     * @return array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object|null
     * @throws SdkError When gift_card_recipient is omitted; use hasGiftCardRecipient() or valueOrDefault().
     */
    public function getGiftCardRecipient(): mixed { return $this->get('gift_card_recipient'); }
    public function hasGiftCardRecipient(): bool { return $this->has('gift_card_recipient'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear all metadata. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /**  [] (Value): {@see OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a catalog modifier by ID or a text modifier, with a quantity.
     * @return list<array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id': string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text'?: array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object|array{'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'modifier_id'?: string, 'order_line_item_modifier_id'?: string, 'quantity'?: int, 'text': array{'modifier_group_id': string, 'value': string}|object, 'type': string}|object>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Replacement quantity, from 1 through 9999. The extended line subtotal, including modifiers, must satisfy the order money ceiling. Format: int64. minimum: 1. maximum: 9999.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Selects an active subscription offer and reprices an unpaid line. Null selects a one-time purchase. Omission preserves the selection. Requires expected_version from the order and clears the delivery selection when terms change. Send null to clear subscription. Requires expected_version. anyOf[1] (Value): {@see SubscribedLineRequestInput}. Makes an order line a subscription purchase, with the subscription offer and billing interval. anyOf[2] (Value): null.
     * @return array{'billing_interval': string, 'billing_interval_count': int, 'subscription_offer_id': string}|object|null
     * @throws SdkError When subscription is omitted; use hasSubscription() or valueOrDefault().
     */
    public function getSubscription(): mixed { return $this->get('subscription'); }
    public function hasSubscription(): bool { return $this->has('subscription'); }
    /** Tax settings for an order line item calculated by Flint or supplied by you, including the line item tax category and whether it is taxable.
     * @return OrderCalculatedLineItemTaxInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Price of one unit. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When unit_price_money is omitted; use hasUnitPriceMoney() or valueOrDefault().
     */
    public function getUnitPriceMoney(): mixed { return $this->get('unit_price_money'); }
    public function hasUnitPriceMoney(): bool { return $this->has('unit_price_money'); }
}
