<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<ReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read list<BuyerReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass> $replacement_line_items
 * @property-read string $resolution_type
 * @property-read string $return_id
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerCreateReturnResolutionPreviewRequestInput extends Model {
    /** @param array{'line_items': list<ReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'replacement_line_items'?: list<BuyerReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass>, 'resolution_type': string, 'return_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerCreateReturnResolutionPreviewRequestInput')); }
    /** minItems: 1. [] (Value): {@see ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a return resolution.
     * @return list<ReturnResolutionLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /**  [] (Value): {@see BuyerReturnReplacementLineItemRequestInput}. A catalog variant or bundle and quantity the buyer requests as a replacement in a Return resolution preview.
     * @return list<BuyerReturnReplacementLineItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When replacement_line_items is omitted; use hasReplacementLineItems() or valueOrDefault().
     */
    public function getReplacementLineItems(): array { return $this->get('replacement_line_items'); }
    public function hasReplacementLineItems(): bool { return $this->has('replacement_line_items'); }
    /** The proposed resolution type. For store_credit, send a nonempty line_items list and omit replacement_line_items. Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * @return string
     * @throws SdkError When resolution_type is omitted; use hasResolutionType() or valueOrDefault().
     */
    public function getResolutionType(): string { return $this->get('resolution_type'); }
    public function hasResolutionType(): bool { return $this->has('resolution_type'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
}
