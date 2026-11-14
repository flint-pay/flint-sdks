<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $modifier_group_id
 * @property-read array{'allow_quantities'?: bool, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_quantity'?: int|null, 'max_selected'?: int|null, 'max_total_quantity'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: int|null, 'min_selected'?: int|null, 'modifiers'?: list<mixed>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class ModifierGroupsUpdateInput extends Model {
    /** @param array{'modifier_group_id': string, 'Flint-Merchant-Id'?: string, 'Flint-Mode'?: string, 'Flint-Sandbox-Id'?: string, 'body': array{'allow_quantities'?: bool, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_quantity'?: int|null, 'max_selected'?: int|null, 'max_total_quantity'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: int|null, 'min_selected'?: int|null, 'modifiers'?: list<mixed>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ModifierGroupsUpdateInput')); }
    /** Flint modifier group ID. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9".
     * @return string
     * @throws SdkError When modifier_group_id is omitted; use hasModifierGroupId() or valueOrDefault().
     */
    public function getModifierGroupId(): string { return $this->get('modifier_group_id'); }
    public function hasModifierGroupId(): bool { return $this->has('modifier_group_id'); }
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
    /** The request body for: Update modifier group. minProperties: 1.
     * @return array{'allow_quantities'?: bool, 'expected_version'?: int, 'external_reference_id'?: string|null, 'max_quantity'?: int|null, 'max_selected'?: int|null, 'max_total_quantity'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'min_quantity'?: int|null, 'min_selected'?: int|null, 'modifiers'?: list<mixed>, 'name'?: string, 'show_on_fulfillment'?: bool, 'show_on_receipt'?: bool, 'status'?: string, 'text'?: array{'max_length'?: int|null, 'min_length'?: int|null, 'multiline'?: bool, 'required'?: bool}|object|null}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}
