<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_profile_id
 * @property-read int $position
 * @property-read int $quantity
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateBundleComponentRequestInput extends Model {
    /** @param array{'delivery_profile_id'?: string|null, 'position'?: int, 'quantity'?: int, 'variant_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateBundleComponentRequestInput')); }
    /** Delivery profile for this component. Omit it to copy the variant's current profile when the component is saved; later changes to the variant's profile don't follow. On update, omitting it on a retained component replaces any override with the variant's current profile, so resend it to keep it. Send null to leave the component without a profile, which makes a physical component `action_required` and a digital or service component `not_applicable` with no delivery requirement. Digital and service components never use defaults; explicit and inherited profiles must be required/manual with allowed_types exactly [digital] or [service], matching the component product type. Existing order delivery snapshots do not change. minLength: 1. Example: "dprof_01KEZF7C0020J13FQYNY9854R0".
     * @return string|null
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string|null { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Display order among the bundle's components, starting at zero. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When position is omitted; use hasPosition() or valueOrDefault().
     */
    public function getPosition(): int { return $this->get('position'); }
    public function hasPosition(): bool { return $this->has('position'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. Default: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Identifier of the product variant included in the bundle. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
