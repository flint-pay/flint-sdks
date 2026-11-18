<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface|null $last_validated_at
 * @property-read string $license_key_activation_id
 * @property-read string $license_key_id
 * @property-read string|null $name
 * @property-read string $product_id
 * @property-read string|\DateTimeInterface|null $released_at
 * @property-read string $status
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerLicenseKeyActivationInput extends Model {
    /** @param array{'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'created_at': string|\DateTimeInterface, 'last_validated_at': string|\DateTimeInterface|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|\DateTimeInterface|null, 'status': string, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerLicenseKeyActivationInput')); }
    /** Whether the buyer can release this activation. [] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** When the activation was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When last_validated_at is omitted; use hasLastValidatedAt() or valueOrDefault().
     */
    public function getLastValidatedAt(): string|\DateTimeInterface|null { return $this->get('last_validated_at'); }
    public function hasLastValidatedAt(): bool { return $this->has('last_validated_at'); }
    /** The activation ID. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ".
     * @return string
     * @throws SdkError When license_key_activation_id is omitted; use hasLicenseKeyActivationId() or valueOrDefault().
     */
    public function getLicenseKeyActivationId(): string { return $this->get('license_key_activation_id'); }
    public function hasLicenseKeyActivationId(): bool { return $this->has('license_key_activation_id'); }
    /** The activated license key ID. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * @return string
     * @throws SdkError When license_key_id is omitted; use hasLicenseKeyId() or valueOrDefault().
     */
    public function getLicenseKeyId(): string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The name supplied by the app. Null when erased.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The product this installation can use. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** When the activation was released. Null when it is active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When released_at is omitted; use hasReleasedAt() or valueOrDefault().
     */
    public function getReleasedAt(): string|\DateTimeInterface|null { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** The activation state. Value enum: "active", "released".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The variant this installation can use. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
