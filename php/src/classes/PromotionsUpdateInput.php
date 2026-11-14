<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $promotion_id
 * @property-read array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string|null, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|null, 'exclusivity'?: array{'group'?: string, 'priority'?: int}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_uses'?: int|null, 'max_uses_per_customer'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'schedule'?: array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsUpdateInput extends Model {
    /** @param array{'promotion_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string|null, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|null, 'exclusivity'?: array{'group'?: string, 'priority'?: int}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_uses'?: int|null, 'max_uses_per_customer'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'schedule'?: array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsUpdateInput')); }
    /** Flint promotion ID. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * @return string
     * @throws SdkError When promotion_id is omitted; use hasPromotionId() or valueOrDefault().
     */
    public function getPromotionId(): string { return $this->get('promotion_id'); }
    public function hasPromotionId(): bool { return $this->has('promotion_id'); }
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
    /** The request body for: Update promotion. minProperties: 1.
     * @return array{'application_method'?: mixed, 'combines_with'?: mixed, 'description'?: string|null, 'discount_class'?: string, 'display_name'?: string, 'eligibility_rules'?: array{'all': list<mixed>}|object|array{'any': list<mixed>}|object|null, 'exclusivity'?: array{'group'?: string, 'priority'?: int}|object|null, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_uses'?: int|null, 'max_uses_per_customer'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'schedule'?: array{'ends_at'?: string|\DateTimeInterface|null, 'starts_at'?: string|\DateTimeInterface|null, 'timezone'?: string|null}|object|null, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
