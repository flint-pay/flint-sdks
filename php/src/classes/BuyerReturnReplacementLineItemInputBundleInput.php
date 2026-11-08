<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_id
 * @property-read int $quantity
 * @property-read string $type
 * @property-read string $variant_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerReturnReplacementLineItemInputBundleInput extends Model {
    /** @param array{'bundle_id': string, 'quantity': int, 'type': string, 'variant_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerReturnReplacementLineItemInputBundleInput')); }
    /** ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The catalog source of the replacement merchandise. Value enum: "bundle".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}
