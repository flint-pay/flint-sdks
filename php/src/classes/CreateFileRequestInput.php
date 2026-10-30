<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $content_type
 * @property-read string $purpose
 * @property-read int $size_bytes
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateFileRequestInput extends Model {
    /** @param array{'content_type': string, 'purpose': string, 'size_bytes': int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateFileRequestInput')); }
    /** Value enum: "image/jpeg", "image/png", "image/webp".
     * @return string
     * @throws SdkError When content_type is omitted; use hasContentType() or valueOrDefault().
     */
    public function getContentType(): string { return $this->get('content_type'); }
    public function hasContentType(): bool { return $this->has('content_type'); }
    /** What the image will be used for. Creating or completing merchant_logo and merchant_icon files changes shared branding and requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required. Partner installs support the five commerce purposes; merchant_logo and merchant_icon require merchants.profile.write, which partner installs cannot grant, so live install credentials receive INSUFFICIENT_SCOPE with scope_requirement. Value enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo", "merchant_icon".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Format: int64. minimum: 1. maximum: 5242880.
     * @return int
     * @throws SdkError When size_bytes is omitted; use hasSizeBytes() or valueOrDefault().
     */
    public function getSizeBytes(): int { return $this->get('size_bytes'); }
    public function hasSizeBytes(): bool { return $this->has('size_bytes'); }
}
