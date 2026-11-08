<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $price_list_id
 * @property-read string $price_list_price_id
 * @property-read array{'expected_version'?: int, 'quantity_price_breaks'?: list<mixed>, 'unit_price_money'?: mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class PriceListsUpdatePriceInput extends Model {
    /** @param array{'price_list_id': string, 'price_list_price_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'expected_version'?: int, 'quantity_price_breaks'?: list<mixed>, 'unit_price_money'?: mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PriceListsUpdatePriceInput')); }
    /** Flint price list id. Example: "prl_01KEZF7C00EH39P59GN3XMGS2Q".
     * @return string
     * @throws SdkError When price_list_id is omitted; use hasPriceListId() or valueOrDefault().
     */
    public function getPriceListId(): string { return $this->get('price_list_id'); }
    public function hasPriceListId(): bool { return $this->has('price_list_id'); }
    /** Flint price list price id. Example: "prlp_01KEZF7C007DQ721A29CDR73DN".
     * @return string
     * @throws SdkError When price_list_price_id is omitted; use hasPriceListPriceId() or valueOrDefault().
     */
    public function getPriceListPriceId(): string { return $this->get('price_list_price_id'); }
    public function hasPriceListPriceId(): bool { return $this->has('price_list_price_id'); }
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
    /** Change one price or its quantity schedule. Omitted fields remain unchanged.
     * @return array{'expected_version'?: int, 'quantity_price_breaks'?: list<mixed>, 'unit_price_money'?: mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
