<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $package_id
 * @property-read string $package_item_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class PackagesGetItemInput extends Model {
    /** @param array{'package_id': string, 'package_item_id': string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackagesGetItemInput')); }
    /** Flint package ID. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Flint package item ID. Example: "pki_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When package_item_id is omitted; use hasPackageItemId() or valueOrDefault().
     */
    public function getPackageItemId(): string { return $this->get('package_item_id'); }
    public function hasPackageItemId(): bool { return $this->has('package_item_id'); }
    /** Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1] (Value): Array of string.  [] enum: "order". anyOf[1][] (Value): string.  Value enum: "order". anyOf[2] (Value): string.  Value enum: "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}
