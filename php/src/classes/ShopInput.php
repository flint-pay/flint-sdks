<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass $buyer_fields
 * @property-read int|null $checkout_session_expires_in_seconds
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|null $currency
 * @property-read CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read string|null $handle
 * @property-read array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object|null $image
 * @property-read string|null $inactive_message
 * @property-read array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null $inventory_routing_source
 * @property-read CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass $legal
 * @property-read int $listing_count
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass $payments
 * @property-read CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass $promotion_config
 * @property-read CheckoutRedirectsInput|array<array-key, mixed>|\stdClass $redirects
 * @property-read string $shop_id
 * @property-read string $status
 * @property-read CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass $tax
 * @property-read CheckoutTipConfigInput|array<array-key, mixed>|\stdClass $tip
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $url
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ShopInput extends Model {
    /** @param array{'buyer_fields'?: CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass, 'checkout_session_expires_in_seconds': int|null, 'created_at': string|\DateTimeInterface, 'currency': string|null, 'custom_text'?: CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass, 'delivery_method_ids': list<string>, 'description': string|null, 'external_reference_id': string|null, 'handle': string|null, 'image': array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object|null, 'inactive_message': string|null, 'inventory_routing_source': array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null, 'legal'?: CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass, 'listing_count': int, 'merchant_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'payments'?: CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass, 'promotion_config'?: CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass, 'redirects': CheckoutRedirectsInput|array<array-key, mixed>|\stdClass, 'shop_id': string, 'status': string, 'tax'?: CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass, 'tip'?: CheckoutTipConfigInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'url': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopInput')); }
    /** Buyer information requested at checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return CheckoutBuyerFieldsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When buyer_fields is omitted; use hasBuyerFields() or valueOrDefault().
     */
    public function getBuyerFields(): mixed { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64.
     * @return int|null
     * @throws SdkError When checkout_session_expires_in_seconds is omitted; use hasCheckoutSessionExpiresInSeconds() or valueOrDefault().
     */
    public function getCheckoutSessionExpiresInSeconds(): int|null { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string|null
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Merchant text shown in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order summary message and a shipping address label.
     * @return CheckoutCustomTextConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When custom_text is omitted; use hasCustomText() or valueOrDefault().
     */
    public function getCustomText(): mixed { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** An empty array follows checkout settings. [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * @return list<string>
     * @throws SdkError When delivery_method_ids is omitted; use hasDeliveryMethodIds() or valueOrDefault().
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shop description. Null when unset.
     * @return string|null
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Null when unset. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Readable address. Null when a handle has not been assigned.
     * @return string|null
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string|null { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Cover image. Null when unset. anyOf[1] (Value): {@see ImageAttachmentInput}. An image attached to a resource, with its display properties and attachment metadata. anyOf[2] (Value): null.
     * @return array{'alt'?: string, 'file_id'?: string, 'height': int, 'source_reference'?: string, 'url': string, 'width': int, ...}|object|null
     * @throws SdkError When image is omitted; use hasImage() or valueOrDefault().
     */
    public function getImage(): mixed { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Inactive message. Null when unset.
     * @return string|null
     * @throws SdkError When inactive_message is omitted; use hasInactiveMessage() or valueOrDefault().
     */
    public function getInactiveMessage(): string|null { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value): {@see InventoryRoutingSourceInput}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value): null.
     * @return array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Legal policies shown to buyers. Omitted when the shop has no override. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return CheckoutLegalConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When legal is omitted; use hasLegal() or valueOrDefault().
     */
    public function getLegal(): mixed { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** The number of listings on the shop, including unavailable entries. Format: int32.
     * @return int
     * @throws SdkError When listing_count is omitted; use hasListingCount() or valueOrDefault().
     */
    public function getListingCount(): int { return $this->get('listing_count'); }
    public function hasListingCount(): bool { return $this->has('listing_count'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The title buyers see on the shop.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Payment options for the shop. Omitted when the shop has no override. Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return CheckoutPaymentConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments is omitted; use hasPayments() or valueOrDefault().
     */
    public function getPayments(): mixed { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Promotion settings for shop checkouts. Omitted when the shop has no override. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return CheckoutPromotionConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When promotion_config is omitted; use hasPromotionConfig() or valueOrDefault().
     */
    public function getPromotionConfig(): mixed { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Redirects configured for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * @return CheckoutRedirectsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When redirects is omitted; use hasRedirects() or valueOrDefault().
     */
    public function getRedirects(): mixed { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * @return string
     * @throws SdkError When shop_id is omitted; use hasShopId() or valueOrDefault().
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** Availability or retirement status. Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax is collected for a checkout session or payment link.
     * @return CheckoutTaxConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tax is omitted; use hasTax() or valueOrDefault().
     */
    public function getTax(): mixed { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tipping options for the shop. Omitted when the shop has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return CheckoutTipConfigInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When tip is omitted; use hasTip() or valueOrDefault().
     */
    public function getTip(): mixed { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available.
     * @return string
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
