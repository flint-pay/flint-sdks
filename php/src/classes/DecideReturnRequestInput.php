<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $completion_mode
 * @property-read int $expected_version
 * @property-read list<ReturnLineDecisionInput|array<array-key, mixed>|\stdClass> $line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class DecideReturnRequestInput extends Model {
    /** @param array{'completion_mode'?: string, 'expected_version'?: int, 'line_items': list<ReturnLineDecisionInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DecideReturnRequestInput')); }
    /** Omit to use the mode shared by all pinned policies that set completion_mode, or automatic when no pinned policy sets one. Conflicting pinned policy modes return 400 naming completion_mode only when completion_mode is omitted. An explicit manual or automatic value is used as sent. Value enum: "manual", "automatic".
     * @return string
     * @throws SdkError When completion_mode is omitted; use hasCompletionMode() or valueOrDefault().
     */
    public function getCompletionMode(): string { return $this->get('completion_mode'); }
    public function hasCompletionMode(): bool { return $this->has('completion_mode'); }
    /** Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** minItems: 1. [] (Value): {@see ReturnLineDecisionInput}. Start from the pinned policy proposal recomputed for approved_quantity when the line has a policy evaluation and the proposal can be built. Otherwise start with return_required_quantity equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and store_credit in that order regardless of whether the original payment is refundable, no automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise is required and inspection is required, after_receipt when merchandise is required without inspection, or after_approval when no merchandise is required. Validate the merged decision for quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned policy always requires override_reason when approved_quantity exceeds evaluated eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal, other decision fields use these defaults and override_reason is otherwise optional. Example: {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
     * @return list<ReturnLineDecisionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
}
