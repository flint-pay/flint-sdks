<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?CheckoutBuyerFields $buyer_fields
 * @property-read int|null $checkout_session_expires_in_seconds
 * @property-read string $created_at
 * @property-read string|null $currency
 * @property-read ?CheckoutCustomTextConfig $custom_text
 * @property-read list<string> $delivery_method_ids
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read string|null $handle
 * @property-read ImageAttachment|null $image
 * @property-read string|null $inactive_message
 * @property-read InventoryRoutingSource|null $inventory_routing_source
 * @property-read ?CheckoutLegalConfig $legal
 * @property-read int $listing_count
 * @property-read string $merchant_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read ?CheckoutPaymentConfig $payments
 * @property-read ?CheckoutPromotionConfig $promotion_config
 * @property-read CheckoutRedirects $redirects
 * @property-read string $shop_id
 * @property-read string $status
 * @property-read ?CheckoutTaxConfig $tax
 * @property-read ?CheckoutTipConfig $tip
 * @property-read string $updated_at
 * @property-read string $url
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class ShopCreatedMerchantEventDataObject extends Model {
    /** @param array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds': int|null, 'created_at': string, 'currency': string|null, 'custom_text'?: mixed, 'delivery_method_ids': list<string>, 'description': string|null, 'external_reference_id': string|null, 'handle': string|null, 'image': mixed, 'inactive_message': string|null, 'inventory_routing_source': mixed, 'legal'?: mixed, 'listing_count': int, 'merchant_id': string, 'metadata': mixed, 'name': string, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects': mixed, 'shop_id': string, 'status': string, 'tax'?: mixed, 'tip'?: mixed, 'updated_at': string, 'url': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopCreatedMerchantEventDataObject')); }
    /** Buyer information requested at checkout. Omitted when the shop has no override. What checkout asks the buyer for. Each field you leave out uses your checkout settings.
     * @return ?CheckoutBuyerFields
     */
    public function getBuyerFields(): ?CheckoutBuyerFields { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Checkout lifetime in seconds. Null when checkout settings apply. Format: int64.
     * @return int|null
     */
    public function getCheckoutSessionExpiresInSeconds(): int|null { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Merchant text shown in checkout. Omitted when the shop has no override. Custom text shown in checkout: an order summary message and a shipping address label.
     * @return ?CheckoutCustomTextConfig
     */
    public function getCustomText(): ?CheckoutCustomTextConfig { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** An empty array follows checkout settings. [] (Value): string.
     * @return list<string>
     */
    public function getDeliveryMethodIds(): array { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shop description. Null when unset.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Null when unset. minLength: 1. maxLength: 255.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Readable address. Null when a handle has not been assigned.
     * @return string|null
     */
    public function getHandle(): string|null { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Cover image. Null when unset. anyOf[1] (Value): {@see ImageAttachment}. An image attached to a resource, with its display properties and attachment metadata. anyOf[2] (Value): null.
     * @return ImageAttachment|null
     */
    public function getImage(): ImageAttachment|null { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Inactive message. Null when unset.
     * @return string|null
     */
    public function getInactiveMessage(): string|null { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value): {@see InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value): null.
     * @return InventoryRoutingSource|null
     */
    public function getInventoryRoutingSource(): InventoryRoutingSource|null { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Legal policies shown to buyers. Omitted when the shop has no override. Legal settings for a checkout: whether buyers must accept terms, and links to the terms, refund policy, shipping policy, and contract.
     * @return ?CheckoutLegalConfig
     */
    public function getLegal(): ?CheckoutLegalConfig { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** The number of listings on the shop, including unavailable entries. Format: int32.
     * @return int
     */
    public function getListingCount(): int { return $this->get('listing_count'); }
    public function hasListingCount(): bool { return $this->has('listing_count'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The title buyers see on the shop.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Payment options for the shop. Omitted when the shop has no override. Payment settings for a checkout: the enabled payment options and a note shown with payment.
     * @return ?CheckoutPaymentConfig
     */
    public function getPayments(): ?CheckoutPaymentConfig { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Promotion settings for shop checkouts. Omitted when the shop has no override. Promotion settings for a checkout: whether automatic promotions apply and whether the buyer can apply promotion codes.
     * @return ?CheckoutPromotionConfig
     */
    public function getPromotionConfig(): ?CheckoutPromotionConfig { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Redirects configured for checkouts started from the shop. Where hosted checkout sends the buyer. Not allowed when surface is headless; use payment_return_url.
     * @return CheckoutRedirects
     */
    public function getRedirects(): CheckoutRedirects { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** Availability or retirement status. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Tax settings for shop checkouts. Omitted when the shop has no override. Whether tax is collected for a checkout session or payment link.
     * @return ?CheckoutTaxConfig
     */
    public function getTax(): ?CheckoutTaxConfig { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tipping options for the shop. Omitted when the shop has no override. Tip settings for a checkout: whether tips are enabled, the percent or fixed amount options, the default tip, and custom tips.
     * @return ?CheckoutTipConfig
     */
    public function getTip(): ?CheckoutTipConfig { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
