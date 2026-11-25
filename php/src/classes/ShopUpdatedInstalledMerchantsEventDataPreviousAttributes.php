<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CheckoutBuyerFieldsPreviousAttributes|null $buyer_fields
 * @property-read int|null $checkout_session_expires_in_seconds
 * @property-read string|null $created_at
 * @property-read string|null $currency
 * @property-read CheckoutCustomTextConfigPreviousAttributes|null $custom_text
 * @property-read list<string>|null $delivery_method_ids
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read string|null $handle
 * @property-read ImageAttachmentPreviousAttributes|null $image
 * @property-read string|null $inactive_message
 * @property-read InventoryRoutingSourcePreviousAttributes|null $inventory_routing_source
 * @property-read CheckoutLegalConfigPreviousAttributes|null $legal
 * @property-read int|null $listing_count
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read CheckoutPaymentConfigPreviousAttributes|null $payments
 * @property-read CheckoutPromotionConfigPreviousAttributes|null $promotion_config
 * @property-read CheckoutRedirectsPreviousAttributes|null $redirects
 * @property-read string|null $shop_id
 * @property-read string|null $status
 * @property-read CheckoutTaxConfigPreviousAttributes|null $tax
 * @property-read CheckoutTipConfigPreviousAttributes|null $tip
 * @property-read string|null $updated_at
 * @property-read string|null $url
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ShopUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'buyer_fields'?: mixed, 'checkout_session_expires_in_seconds'?: mixed, 'created_at'?: mixed, 'currency'?: mixed, 'custom_text'?: mixed, 'delivery_method_ids'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'handle'?: mixed, 'image'?: mixed, 'inactive_message'?: mixed, 'inventory_routing_source'?: mixed, 'legal'?: mixed, 'listing_count'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'payments'?: mixed, 'promotion_config'?: mixed, 'redirects'?: mixed, 'shop_id'?: mixed, 'status'?: mixed, 'tax'?: mixed, 'tip'?: mixed, 'updated_at'?: mixed, 'url'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Buyer information requested at checkout. Omitted when the shop has no override. anyOf[1] (Value): {@see CheckoutBuyerFieldsPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutBuyerFieldsPreviousAttributes|null
     */
    public function getBuyerFields(): CheckoutBuyerFieldsPreviousAttributes|null { return $this->get('buyer_fields'); }
    public function hasBuyerFields(): bool { return $this->has('buyer_fields'); }
    /** Checkout lifetime in seconds. Null when checkout settings apply. anyOf[1] (Value): integer. Checkout lifetime in seconds. Null when checkout settings apply. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCheckoutSessionExpiresInSeconds(): int|null { return $this->get('checkout_session_expires_in_seconds'); }
    public function hasCheckoutSessionExpiresInSeconds(): bool { return $this->has('checkout_session_expires_in_seconds'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. anyOf[1] (Value): string. Listing currency. Null when the shop is empty. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Merchant text shown in checkout. Omitted when the shop has no override. anyOf[1] (Value): {@see CheckoutCustomTextConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutCustomTextConfigPreviousAttributes|null
     */
    public function getCustomText(): CheckoutCustomTextConfigPreviousAttributes|null { return $this->get('custom_text'); }
    public function hasCustomText(): bool { return $this->has('custom_text'); }
    /** An empty array follows checkout settings. anyOf[1] (Value): Array of string. An empty array follows checkout settings. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getDeliveryMethodIds(): array|null { return $this->get('delivery_method_ids'); }
    public function hasDeliveryMethodIds(): bool { return $this->has('delivery_method_ids'); }
    /** Shop description. Null when unset. anyOf[1] (Value): string. Shop description. Null when unset. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. Null when unset. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. Null when unset. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Readable address. Null when a handle has not been assigned. anyOf[1] (Value): string. Readable address. Null when a handle has not been assigned. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getHandle(): string|null { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Cover image. Null when unset. anyOf[1] (Value): {@see ImageAttachmentPreviousAttributes}. anyOf[2] (Value): null.
     * @return ImageAttachmentPreviousAttributes|null
     */
    public function getImage(): ImageAttachmentPreviousAttributes|null { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Inactive message. Null when unset. anyOf[1] (Value): string. Inactive message. Null when unset. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInactiveMessage(): string|null { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Explicit inventory routing. Null when checkout settings apply. anyOf[1] (Value): {@see InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return InventoryRoutingSourcePreviousAttributes|null
     */
    public function getInventoryRoutingSource(): InventoryRoutingSourcePreviousAttributes|null { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Legal policies shown to buyers. Omitted when the shop has no override. anyOf[1] (Value): {@see CheckoutLegalConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutLegalConfigPreviousAttributes|null
     */
    public function getLegal(): CheckoutLegalConfigPreviousAttributes|null { return $this->get('legal'); }
    public function hasLegal(): bool { return $this->has('legal'); }
    /** The number of listings on the shop, including unavailable entries. anyOf[1] (Value): integer. The number of listings on the shop, including unavailable entries. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getListingCount(): int|null { return $this->get('listing_count'); }
    public function hasListingCount(): bool { return $this->has('listing_count'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The title buyers see on the shop. anyOf[1] (Value): string. The title buyers see on the shop. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Payment options for the shop. Omitted when the shop has no override. anyOf[1] (Value): {@see CheckoutPaymentConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutPaymentConfigPreviousAttributes|null
     */
    public function getPayments(): CheckoutPaymentConfigPreviousAttributes|null { return $this->get('payments'); }
    public function hasPayments(): bool { return $this->has('payments'); }
    /** Promotion settings for shop checkouts. Omitted when the shop has no override. anyOf[1] (Value): {@see CheckoutPromotionConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutPromotionConfigPreviousAttributes|null
     */
    public function getPromotionConfig(): CheckoutPromotionConfigPreviousAttributes|null { return $this->get('promotion_config'); }
    public function hasPromotionConfig(): bool { return $this->has('promotion_config'); }
    /** Redirects configured for checkouts started from the shop. anyOf[1] (Value): {@see CheckoutRedirectsPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutRedirectsPreviousAttributes|null
     */
    public function getRedirects(): CheckoutRedirectsPreviousAttributes|null { return $this->get('redirects'); }
    public function hasRedirects(): bool { return $this->has('redirects'); }
    /** Shop ID. anyOf[1] (Value): string. Shop ID. pattern: ^shop_[0-9A-HJKMNP-TV-Z]{26}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShopId(): string|null { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** Availability or retirement status. Value enum: "active", "inactive", "archived". anyOf[1] (Value): string. Availability or retirement status. Value enum: "active", "inactive", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Tax settings for shop checkouts. Omitted when the shop has no override. anyOf[1] (Value): {@see CheckoutTaxConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutTaxConfigPreviousAttributes|null
     */
    public function getTax(): CheckoutTaxConfigPreviousAttributes|null { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Tipping options for the shop. Omitted when the shop has no override. anyOf[1] (Value): {@see CheckoutTipConfigPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutTipConfigPreviousAttributes|null
     */
    public function getTip(): CheckoutTipConfigPreviousAttributes|null { return $this->get('tip'); }
    public function hasTip(): bool { return $this->has('tip'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. anyOf[1] (Value): string. The hosted shop address. Live shops use the merchant's healthy custom checkout hostname when available. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUrl(): string|null { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
