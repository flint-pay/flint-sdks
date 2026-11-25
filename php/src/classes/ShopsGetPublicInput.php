<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $shop_id
 * Presence-aware input; omitted fields throw when accessed. */
final class ShopsGetPublicInput extends Model {
    /** @param array{'shop_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShopsGetPublicInput')); }
    /** Flint shop ID. Must be a valid ID with prefix shop_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "shop_01KEZF7C005VQBPV4FZHDZPAHE".
     * @return string
     * @throws SdkError When shop_id is omitted; use hasShopId() or valueOrDefault().
     */
    public function getShopId(): string { return $this->get('shop_id'); }
    public function hasShopId(): bool { return $this->has('shop_id'); }
}
