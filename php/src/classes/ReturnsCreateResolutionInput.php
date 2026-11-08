<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $return_id
 * @property-read array{'adjustments'?: list<mixed>, 'expected_return_version'?: int, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object|array{'adjustments': list<mixed>, 'corrects_return_resolution_id': string, 'expected_return_version'?: int, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: mixed, 'resolution_type': string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnsCreateResolutionInput extends Model {
    /** @param array{'return_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'adjustments'?: list<mixed>, 'expected_return_version'?: int, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object|array{'adjustments': list<mixed>, 'corrects_return_resolution_id': string, 'expected_return_version'?: int, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: mixed, 'resolution_type': string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnsCreateResolutionInput')); }
    /** Flint return id. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
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
    /** The request body for: Create return resolution.
     * @return array{'adjustments'?: list<mixed>, 'expected_return_version'?: int, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'line_items': list<mixed>, 'metadata'?: mixed, 'pricing_basis'?: string, 'replacement_line_items'?: list<mixed>, 'resolution_type': string}|object|array{'adjustments': list<mixed>, 'corrects_return_resolution_id': string, 'expected_return_version'?: int, 'external_reference_id'?: string, 'gift_card_refund_destination'?: string, 'metadata'?: mixed, 'resolution_type': string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
