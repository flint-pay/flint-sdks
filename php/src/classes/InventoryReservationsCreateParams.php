<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object> $demands
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsCreateParams extends Model {
    /** @param array{'demands': list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object>, 'expires_at'?: string|\DateTimeInterface, 'inventory_routing_source'?: InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'owner': InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsCreateParams')); }
    /** Items and quantities to reserve. minItems: 1. maxItems: 100. [] (Value): {@see InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and splitting behavior.
     * @return list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object>
     * @throws SdkError When demands is omitted; use hasDemands() or valueOrDefault().
     */
    public function getDemands(): array { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. When omitted, the reservation uses and stores `settings.inventory.default_routing_source`; without that default the request returns `400 INVALID_REQUEST` at `inventory_routing_source`. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. The owner of a merchant inventory reservation you create: your `key` for what holds the stock.
     * @return InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Merchant this request acts for. Required with an app-level partner app token; optional with a merchant-bound one, which it must match. Other credentials may send it only with their own merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Merchant-Id is omitted; use hasFlintMerchantId() or valueOrDefault().
     */
    public function getFlintMerchantId(): string { return $this->get('Flint-Merchant-Id'); }
    public function hasFlintMerchantId(): bool { return $this->has('Flint-Merchant-Id'); }
    /** Mode of the request context, live or test. Optional; it must match the credential's mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When Flint-Mode is omitted; use hasFlintMode() or valueOrDefault().
     */
    public function getFlintMode(): string { return $this->get('Flint-Mode'); }
    public function hasFlintMode(): bool { return $this->has('Flint-Mode'); }
    /** Sandbox of the request context in test mode. Optional; with a partner app token it must name the sandbox the merchant granted the app, and a live token can't send it. Send it in test mode so a grant moved to another sandbox can't silently change where you write. pattern: ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     * @throws SdkError When Flint-Sandbox-Id is omitted; use hasFlintSandboxId() or valueOrDefault().
     */
    public function getFlintSandboxId(): string { return $this->get('Flint-Sandbox-Id'); }
    public function hasFlintSandboxId(): bool { return $this->has('Flint-Sandbox-Id'); }
}
