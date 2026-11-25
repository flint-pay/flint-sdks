<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PublicCatalogModifierRequestInput|array<array-key, mixed>|\stdClass> $modifiers
 * @property-read int $quantity
 * @property-read string $shop_listing_id
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ResolveShopLineItemRequestInput extends Model {
    /** @param array{'modifiers'?: list<PublicCatalogModifierRequestInput|array<array-key, mixed>|\stdClass>, 'quantity'?: int, 'shop_listing_id': string, 'variant_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ResolveShopLineItemRequestInput')); }
    /** Omit to apply defaults. Send an array to select exactly those modifiers. [] (Value): {@see PublicCatalogModifierRequestInput}. A buyer's modifier choice for one line of a checkout started without an API key.
     * @return list<PublicCatalogModifierRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When modifiers is omitted; use hasModifiers() or valueOrDefault().
     */
    public function getModifiers(): array { return $this->get('modifiers'); }
    public function hasModifiers(): bool { return $this->has('modifiers'); }
    /** Quantity for this line. Defaults to 1, and fractional quantities are not supported. minimum: 1. maximum: 9999. Default: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Listing on this shop. minLength: 1. Example: "shl_01KEZF7C005YZXRPWEH31ZXGKA".
     * @return string
     * @throws SdkError When shop_listing_id is omitted; use hasShopListingId() or valueOrDefault().
     */
    public function getShopListingId(): string { return $this->get('shop_listing_id'); }
    public function hasShopListingId(): bool { return $this->has('shop_listing_id'); }
    /** Required when the listing has several sellable variants. Omit for bundles. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
