<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_id
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsGetInput extends Model {
    /** @param array{'return_id': string, 'expand'?: list<string>|string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsGetInput')); }
    /** Flint return id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Include related objects in the response. Supported expansions: customer, line_items.fulfillment, line_items.return_reason, order, return_dispositions, return_inspections, return_receipts, return_resolutions, shipments. Expanded relationships are returned only when explicitly requested and authorized. Limits: at most 10 unique expand paths per request. To-many expansions are capped per path: at 100 related objects for return_dispositions, return_inspections, return_receipts, return_resolutions, and shipments; at 20 for line_items.fulfillment and line_items.return_reason. [] enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". Value enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[1] (Value): Array of string.  [] enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[1][] (Value): string.  Value enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments". anyOf[2] (Value): string.  Value enum: "customer", "line_items.fulfillment", "line_items.return_reason", "order", "return_dispositions", "return_inspections", "return_receipts", "return_resolutions", "shipments".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
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
