<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $content_type
 * @property-read string $purpose
 * @property-read int $size_bytes
 * Presence-aware input; omitted fields throw when accessed. */
final class FilesCreateParams extends Model {
    /** @param array{'content_type': string, 'purpose': string, 'size_bytes': int, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FilesCreateParams')); }
    /** Media type of the image you will upload. Value enum: "image/jpeg", "image/png", "image/webp".
     * @return string
     * @throws SdkError When content_type is omitted; use hasContentType() or valueOrDefault().
     */
    public function getContentType(): string { return $this->get('content_type'); }
    public function hasContentType(): bool { return $this->has('content_type'); }
    /** What the image will be used for. Creating or completing merchant_logo and merchant_icon files changes shared branding and requires a live-mode credential or a Dashboard session in any selected environment. Test credentials receive 403 FORBIDDEN with reason live_mode_required. Partner install tokens need the purpose's scope too; merchant_logo and merchant_icon need merchants.profile.write and a live install token. Value enum: "product", "product_variant", "bundle", "payment_link", "subscription_plan", "merchant_logo", "merchant_icon".
     * @return string
     * @throws SdkError When purpose is omitted; use hasPurpose() or valueOrDefault().
     */
    public function getPurpose(): string { return $this->get('purpose'); }
    public function hasPurpose(): bool { return $this->has('purpose'); }
    /** Size of the image you will upload, in bytes, from 1 to 5,242,880 (5 MiB). Format: int64. minimum: 1. maximum: 5242880.
     * @return int
     * @throws SdkError When size_bytes is omitted; use hasSizeBytes() or valueOrDefault().
     */
    public function getSizeBytes(): int { return $this->get('size_bytes'); }
    public function hasSizeBytes(): bool { return $this->has('size_bytes'); }
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
