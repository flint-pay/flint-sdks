<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $currency
 * @property-read ?string $description
 * @property-read ?Image $image
 * @property-read ?string $inactive_message
 * @property-read string $name
 * @property-read string $shop_id
 * @property-read string $status
 * @property-read string $url
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class PublicShop extends Model {
    /** @param array{'currency': string|null, 'description'?: string, 'image'?: mixed, 'inactive_message'?: string, 'name': string, 'shop_id': string, 'status': string, 'url': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublicShop')); }
    /** Shop currency. Null when the shop has no listings. Uses ISO 4217 currency codes. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string|null
     */
    public function getCurrency(): string|null { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shop description.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shop cover image. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getImage(): ?Image { return $this->get('image'); }
    public function hasImage(): bool { return $this->has('image'); }
    /** Message shown when the shop is closed.
     * @return ?string
     */
    public function getInactiveMessage(): ?string { return $this->get('inactive_message'); }
    public function hasInactiveMessage(): bool { return $this->has('inactive_message'); }
    /** Shop name.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shop ID.
     * @return string
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
    /** Shop status. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Hosted shop URL.
     * @return string
     */
    public function getUrl(): string { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
    /** Shop version. Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}
