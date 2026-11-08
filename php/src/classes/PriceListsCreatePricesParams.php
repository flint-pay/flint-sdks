<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_price_list_version
 * @property-read string $on_variant_conflict
 * @property-read list<PriceListPriceRequestInput|array<array-key, mixed>|\stdClass> $prices
 * Presence-aware input; omitted fields throw when accessed. */
final class PriceListsCreatePricesParams extends Model {
    /** @param array{'expected_price_list_version'?: int, 'on_variant_conflict'?: string, 'prices': list<PriceListPriceRequestInput|array<array-key, mixed>|\stdClass>, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListsCreatePricesParams')); }
    /** Price list aggregate version last read. A mismatch rejects the entire batch. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_price_list_version is omitted; use hasExpectedPriceListVersion() or valueOrDefault().
     */
    public function getExpectedPriceListVersion(): int { return $this->get('expected_price_list_version'); }
    public function hasExpectedPriceListVersion(): bool { return $this->has('expected_price_list_version'); }
    /** Behavior when the list already prices a variant. Default: "return_existing". Value enum: "return_existing", "update".
     * @return string
     * @throws SdkError When on_variant_conflict is omitted; use hasOnVariantConflict() or valueOrDefault().
     */
    public function getOnVariantConflict(): string { return $this->get('on_variant_conflict'); }
    public function hasOnVariantConflict(): bool { return $this->has('on_variant_conflict'); }
    /** Between 1 and 500 variant prices. A price list holds at most 10,000 prices. minItems: 1. maxItems: 500. [] (Value): {@see PriceListPriceRequestInput}. A variant price to add to a price list.
     * @return list<PriceListPriceRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When prices is omitted; use hasPrices() or valueOrDefault().
     */
    public function getPrices(): array { return $this->get('prices'); }
    public function hasPrices(): bool { return $this->has('prices'); }
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
