<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool}|object|null $buyer_fields
 * @property-read int|null $checkout_session_expires_in_seconds
 * @property-read array{'order_summary_message'?: string, 'shipping_address_label'?: string}|object|null $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read string|null $description
 * @property-read int $expected_version
 * @property-read string|null $external_reference_id
 * @property-read array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null $image
 * @property-read string|null $inactive_message
 * @property-read array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object|null $inventory_routing_source
 * @property-read array{'contract_url'?: string, 'refund_policy_url'?: string, 'require_terms_of_service'?: bool, 'shipping_policy_url'?: string, 'terms_of_service_url'?: string}|object|null $legal
 * @property-read list<ShopListingPatchRequestInput|array<array-key, mixed>|\stdClass> $listings
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read array{'enabled_payment_options'?: list<string>, 'payment_note'?: string}|object|null $payments
 * @property-read array{'automatic_enabled'?: bool, 'codes_enabled'?: bool|null}|object|null $promotion_config
 * @property-read array{'cancel_url'?: string, 'expired_url'?: string, 'success_url'?: string}|object|null $redirects
 * @property-read string $status
 * @property-read array{'calculation'?: CheckoutTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'enabled'?: bool}|object|null $tax
 * @property-read array{'custom_tip_enabled'?: bool, 'default_smart_tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'default_tip_percent'?: int|float, 'enabled'?: bool, 'smart_tip_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'smart_tips_enabled'?: bool, 'tip_percent_options'?: list<int|float>}|object|null $tip
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateShopRequestInput extends Model {
    /** @param array{'buyer_fields'?: array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool}|object|null, 'checkout_session_expires_in_seconds'?: int|null, 'custom_text'?: array{'order_summary_message'?: string, 'shipping_address_label'?: string}|object|null, 'delivery_method_ids'?: list<string>, 'description'?: string|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'image'?: array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null, 'inactive_message'?: string|null, 'inventory_routing_source'?: array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object|null, 'legal'?: array{'contract_url'?: string, 'refund_policy_url'?: string, 'require_terms_of_service'?: bool, 'shipping_policy_url'?: string, 'terms_of_service_url'?: string}|object|null, 'listings'?: list<ShopListingPatchRequestInput|array<array-key, mixed>|\stdClass>, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'payments'?: array{'enabled_payment_options'?: list<string>, 'payment_note'?: string}|object|null, 'promotion_config'?: array{'automatic_enabled'?: bool, 'codes_enabled'?: bool|null}|object|null, 'redirects'?: array{'cancel_url'?: string, 'expired_url'?: string, 'success_url'?: string}|object|null, 'status'?: string, 'tax'?: array{'calculation'?: CheckoutTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'enabled'?: bool}|object|null, 'tip'?: array{'custom_tip_enabled'?: bool, 'default_smart_tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'default_tip_percent'?: int|float, 'enabled'?: bool, 'smart_tip_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'smart_tips_enabled'?: bool, 'tip_percent_options'?: list<int|float>}|object|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateShopRequestInput')); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout buyer fields. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutBuyerFieldsRequestInput}. What checkout asks the buyer for. Each field you leave out uses your checkout settings. anyOf[2] (Value): null.
     * @return array{'address_autocomplete_enabled'?: bool, 'require_billing_address'?: bool, 'require_email'?: bool, 'require_phone'?: bool}|object|null
     * @throws SdkError When buyer_fields is omitted; use hasBuyerFields() or valueOrDefault().
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Checkout lifetime in seconds. Send null to clear it. Format: int64. minimum: 60. maximum: 86400.
     * @return int|null
     * @throws SdkError When checkout_session_expires_in_seconds is omitted; use hasCheckoutSessionExpiresInSeconds() or valueOrDefault().
     */
    public function getCheckoutSessionExpiresInSeconds(): int|null { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout text. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutCustomTextWriteConfigInput}. Custom checkout text you supply when creating a checkout session: an order summary message and a shipping address label. anyOf[2] (Value): null.
     * @return array{'order_summary_message'?: string, 'shipping_address_label'?: string}|object|null
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** The complete selection. Send an empty array to follow checkout settings. maxItems: 25. uniqueItems: true. [] (Value): string. Delivery method ID. minLength: 1. pattern: ^dmet_[0-9A-HJKMNP-TV-Z]{26}$. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shop description. Send null to clear it. minLength: 1. maxLength: 2048.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Required when any of these fields is present: listings, delivery_method_ids. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Replaced as a whole: send every field you want to keep. Cover image. Send null to remove every value you set in this section. anyOf[1] (Value): {@see ImageRequestInput}. An image you supply by `source_url`, with optional `alt` text and external reference. anyOf[2] (Value): null.
     * @return array{'alt'?: string, 'file_id'?: string, 'source_reference'?: string, 'source_url': string}|object|array{'alt'?: string, 'file_id': string, 'source_reference'?: string, 'source_url'?: string}|object|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Inactive message. Send null to clear it. minLength: 1. maxLength: 500.
     * @return string|null
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string|null { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Replaced as a whole: send every field you want to keep. Inventory routing. Send null to remove every value you set in this section. anyOf[1] (Value): {@see InventoryRoutingSourceRequestInput}. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`. anyOf[2] (Value): null.
     * @return array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object|null
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout legal configuration. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutLegalConfigRequestInput}. Legal settings you supply when creating a checkout session: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract. anyOf[2] (Value): null.
     * @return array{'contract_url'?: string, 'refund_policy_url'?: string, 'require_terms_of_service'?: bool, 'shipping_policy_url'?: string, 'terms_of_service_url'?: string}|object|null
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** The complete ordered collection of owned listings. maxItems: 250. [] (Value): {@see ShopListingPatchRequestInput}. A catalog item to keep or add in a replacement list.
     * @return list<ShopListingPatchRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When listings is omitted; use hasListings() or valueOrDefault().
     */
    public function getListings(): array { return $this->get('listings'); }
    public function hasListings(): bool { return $this->has('listings'); }
    /** Merged by key. Send null for a key to remove it, or null for the map to clear caller-owned metadata. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shop name. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout payment configuration. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutPaymentConfigRequestInput}. Payment settings you supply when creating a checkout session: the enabled payment options and a note shown with payment. anyOf[2] (Value): null.
     * @return array{'enabled_payment_options'?: list<string>, 'payment_note'?: string}|object|null
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout promotion configuration. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutPromotionConfigRequestInput}. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes. anyOf[2] (Value): null.
     * @return array{'automatic_enabled'?: bool, 'codes_enabled'?: bool|null}|object|null
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout redirects. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutRedirectsRequestInput}. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url. anyOf[2] (Value): null.
     * @return array{'cancel_url'?: string, 'expired_url'?: string, 'success_url'?: string}|object|null
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Setting inactive closes open, unpaid checkouts. Payments in progress can finish. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout tax configuration. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutTaxConfigRequestInput}. Whether tax is collected for a checkout session or payment link. anyOf[2] (Value): null.
     * @return array{'calculation'?: CheckoutTaxCalculationRequestInput|array<array-key, mixed>|\stdClass, 'enabled'?: bool}|object|null
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Patch object: fields you send are applied, fields you omit are unchanged. Checkout tipping configuration. Send null to remove every value you set in this section. anyOf[1] (Value): {@see CheckoutTipConfigRequestInput}. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips. anyOf[2] (Value): null.
     * @return array{'custom_tip_enabled'?: bool, 'default_smart_tip_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'default_tip_percent'?: int|float, 'enabled'?: bool, 'smart_tip_money_options'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'smart_tips_enabled'?: bool, 'tip_percent_options'?: list<int|float>}|object|null
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
}
