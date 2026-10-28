<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerFieldsRequestRequestInput|array<array-key, mixed>|\stdClass $buyer_fields
 * @property-read string $checkout_session_expires_in_seconds
 * @property-read list<PaymentLinkCustomFieldPatchRequestInput|array<array-key, mixed>|\stdClass> $custom_fields
 * @property-read PaymentLinkCustomTextPatchRequestInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read string|null $description
 * @property-read array{'amount': string, 'currency': string}|object|null $donation_max_amount_money
 * @property-read array{'amount': string, 'currency': string}|object|null $donation_min_amount_money
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $donation_suggested_amount_money_options
 * @property-read PaymentLinkEventConfigPatchRequestInput|array<array-key, mixed>|\stdClass $event_config
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null $image
 * @property-read string|null $inactive_message
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read PaymentLinkLegalPatchRequestInput|array<array-key, mixed>|\stdClass $legal
 * @property-read list<PaymentLinkLineItemPatchRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read int|null $max_completions
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read PaymentLinkPaymentPatchRequestInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPromotionConfigRequestRequestInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read PaymentLinkRedirectsPatchRequestInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string|\DateTimeInterface|null $sales_end_at
 * @property-read string $status
 * @property-read CheckoutTaxConfigRequestRequestInput|array<array-key, mixed>|\stdClass $tax
 * @property-read PaymentLinkThemePatchRequestInput|array<array-key, mixed>|\stdClass $theme
 * @property-read CheckoutTipConfigRequestRequestInput|array<array-key, mixed>|\stdClass $tip
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePaymentLinkRequestInput extends Model {
    /** @param array{'buyer_fields'?: CheckoutBuyerFieldsRequestRequestInput|array<array-key, mixed>|\stdClass, 'checkout_session_expires_in_seconds'?: string, 'custom_fields'?: list<PaymentLinkCustomFieldPatchRequestInput|array<array-key, mixed>|\stdClass>, 'custom_text'?: PaymentLinkCustomTextPatchRequestInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'donation_max_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_min_amount_money'?: array{'amount': string, 'currency': string}|object|null, 'donation_suggested_amount_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'event_config'?: PaymentLinkEventConfigPatchRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: string, 'external_reference_id'?: string|null, 'image'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'inactive_message'?: string|null, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'legal'?: PaymentLinkLegalPatchRequestInput|array<array-key, mixed>|\stdClass, 'line_items'?: list<PaymentLinkLineItemPatchRequestInput|array<array-key, mixed>|\stdClass>, 'max_completions'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: PaymentLinkPaymentPatchRequestInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigRequestRequestInput|array<array-key, mixed>|\stdClass, 'redirects'?: PaymentLinkRedirectsPatchRequestInput|array<array-key, mixed>|\stdClass, 'sales_end_at'?: string|\DateTimeInterface|null, 'status'?: string, 'tax'?: CheckoutTaxConfigRequestRequestInput|array<array-key, mixed>|\stdClass, 'theme'?: PaymentLinkThemePatchRequestInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigRequestRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePaymentLinkRequestInput')); }
    /** Shape $ (Value): {@see CheckoutBuyerFieldsRequestRequestInput}. What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return CheckoutBuyerFieldsRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_fields is omitted; use hasBuyerFields() or valueOrDefault().
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Shape $ (Value): integer string. Seconds each checkout session the link starts stays open, from 60 to 86,400. Omit it to use your checkout settings, or 24 hours. It doesn't end the link; use sales_end_at for that. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 60. maximum: 86400.
     * @return string
     * @throws SdkError When checkout_session_expires_in_seconds is omitted; use hasCheckoutSessionExpiresInSeconds() or valueOrDefault().
     */
    public function getCheckoutSessionExpiresInSeconds(): string { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** Shape $ (Value): Array of {@see PaymentLinkCustomFieldPatchRequestInput}. Replaces all custom fields atomically. Include an existing payment_link_custom_field_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Send an empty array to clear all custom fields, omit custom_fields to leave it unchanged, and do not send null. maxItems: 20. Shape $[] (Value): {@see PaymentLinkCustomFieldPatchRequestInput}. A custom field in a payment link update. Include its ID to change an existing field, or omit the ID to add a new one.
     * @return list<PaymentLinkCustomFieldPatchRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When custom_fields is omitted; use hasCustomFields() or valueOrDefault().
     */
    public function getCustomFields(): array { return $this->get('custom_fields'); }
    public function hasCustomFields(): bool { return $this->has('custom_fields'); }
    /** Shape $ (Value): {@see PaymentLinkCustomTextPatchRequestInput}. Changes to a payment link's custom checkout text. Send null to clear a field.
     * @return PaymentLinkCustomTextPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** Shape $ (Value): Array of string. Complete delivery method selection for the link. A link without delivery methods offers settings.checkout.default_delivery_method_ids when its order has items to deliver. Send an empty array to clear the selection. Omit it on PATCH to leave the selection unchanged. Null and duplicate IDs are not accepted. maxItems: 25. uniqueItems: true. Shape $[] (Value): string. minLength: 1.
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shape $ (Value): string or null. Send null to clear. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): {@see MoneyValueInput} or null. Maximum donation amount. Send null to clear the maximum. Send null to clear. Shape $.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When donation_max_amount_money is omitted; use hasDonationMaxAmountMoney() or valueOrDefault().
     */
    public function getDonationMaxAmountMoney(): mixed { return $this->get('donation_max_amount_money'); }
    public function hasDonationMaxAmountMoney(): bool { return $this->has('donation_max_amount_money'); }
    /** Shape $ (Value): {@see MoneyValueInput} or null. Minimum donation amount. Send null to clear the minimum. Send null to clear. Shape $.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When donation_min_amount_money is omitted; use hasDonationMinAmountMoney() or valueOrDefault().
     */
    public function getDonationMinAmountMoney(): mixed { return $this->get('donation_min_amount_money'); }
    public function hasDonationMinAmountMoney(): bool { return $this->has('donation_min_amount_money'); }
    /** Shape $ (Value): Array of {@see MoneyValueInput}. Suggested donation amounts. Send an empty array to clear suggested amounts. Shape $[] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When donation_suggested_amount_money_options is omitted; use hasDonationSuggestedAmountMoneyOptions() or valueOrDefault().
     */
    public function getDonationSuggestedAmountMoneyOptions(): array { return $this->get('donation_suggested_amount_money_options'); }
    public function hasDonationSuggestedAmountMoneyOptions(): bool { return $this->has('donation_suggested_amount_money_options'); }
    /** Shape $ (Value): {@see PaymentLinkEventConfigPatchRequestInput}. Event configuration patch. Omit to leave unchanged. The whole configuration cannot be cleared; null is not accepted. Changes to an event payment link's settings. Send null on a nullable field to clear it.
     * @return PaymentLinkEventConfigPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When event_config is omitted; use hasEventConfig() or valueOrDefault().
     */
    public function getEventConfig(): mixed { return $this->get('event_config'); }
    public function hasEventConfig(): bool { return $this->has('event_config'); }
    /** Shape $ (Value): integer string. Payment link version last read by the caller. Required when line_items, custom_fields, or delivery_method_ids is present. Required when any of these fields is present: line_items, custom_fields, delivery_method_ids. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): {@see ImageRequestInput} or null. Send null to clear. Shape $.anyOf[1] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference. Shape $.anyOf[2] (Value): null.
     * @return array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Shape $ (Value): string or null. Send null to clear. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string|null { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Shape $ (Value): {@see InventoryRoutingSourceRequestInput}. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Shape $ (Value): {@see PaymentLinkLegalPatchRequestInput}. Changes to a payment link's legal links and terms setting. Send null on a URL to clear it.
     * @return PaymentLinkLegalPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** Shape $ (Value): Array of {@see PaymentLinkLineItemPatchRequestInput}. Replaces all line items atomically. Include an existing payment_link_line_item_id to retain that member, omit the ID to create a member, and omit a previous member to remove it. Omit line_items to leave it unchanged. Null is not accepted. minItems: 1. Shape $[] (Value): {@see PaymentLinkLineItemPatchRequestInput}. A line item in a payment link update. Include its ID to change an existing line item, or omit the ID to add a new one.
     * @return list<PaymentLinkLineItemPatchRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): integer or null. Send null to clear. Format: int32.
     * @return int|null
     * @throws SdkError When max_completions is omitted; use hasMaxCompletions() or valueOrDefault().
     */
    public function getMaxCompletions(): int|null { return $this->get('max_completions'); }
    public function hasMaxCompletions(): bool { return $this->has('max_completions'); }
    /** Shape $ (Value): {@see MetadataPatchRequestInput} or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Send null to clear. Metadata pairs plus custom fields must not exceed 44; 6 of the order's 50 pairs are reserved for Flint. Metadata keys and values, custom_field_ keys and largest possible answers, and Flint metadata must fit within 32768 UTF-8 bytes. Text and textarea answers are budgeted at four bytes per Unicode code point, including optional fields. Each checkbox answer is budgeted at five bytes (the length of false). If the combined budget is exceeded, lower max_length on some fields, use fewer custom fields, or reduce metadata. These limits apply to standard and plan links and are checked against the merged configuration on update. This operation also limits the metadata object you send, before merging: at most 50 keys, counting null deletions, each key 1 to 256 Unicode code points, and at most 32768 UTF-8 bytes of keys plus values. Shape $.anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. Shape $.anyOf[1].* (Value): string or null. minLength: 1. maxLength: 4096. Shape $.anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): {@see PaymentLinkPaymentPatchRequestInput}. Changes to a payment link's payment settings. Send null on the payment note to clear it.
     * @return PaymentLinkPaymentPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Shape $ (Value): {@see CheckoutPromotionConfigRequestRequestInput}. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return CheckoutPromotionConfigRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Shape $ (Value): {@see PaymentLinkRedirectsPatchRequestInput}. Where checkout sessions started from this payment link send the buyer after payment, cancellation, or expiration. Changes to a payment link's hosted checkout destinations. Omit a URL to leave it unchanged, or send null to clear it.
     * @return PaymentLinkRedirectsPatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Shape $ (Value): string or null. RFC3339 timestamp after which the link stops starting checkouts and resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event link without sales_end_at stops selling at event_config.event_at. A checkout opened before the end can still start payment for up to 15 minutes after it. Send null to clear it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When sales_end_at is omitted; use hasSalesEndAt() or valueOrDefault().
     */
    public function getSalesEndAt(): string|\DateTimeInterface|null { return $this->get('sales_end_at'); }
    public function hasSalesEndAt(): bool { return $this->has('sales_end_at'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): {@see CheckoutTaxConfigRequestRequestInput}. Whether tax is collected for a checkout session or payment link.
     * @return CheckoutTaxConfigRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Shape $ (Value): {@see PaymentLinkThemePatchRequestInput}. Changes to a payment link's checkout theme. Send null on a field to clear it.
     * @return PaymentLinkThemePatchRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When theme is omitted; use hasTheme() or valueOrDefault().
     */
    public function getTheme(): mixed { return $this->get('theme'); }
    public function hasTheme(): bool { return $this->has('theme'); }
    /** Shape $ (Value): {@see CheckoutTipConfigRequestRequestInput}. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return CheckoutTipConfigRequestRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
}
