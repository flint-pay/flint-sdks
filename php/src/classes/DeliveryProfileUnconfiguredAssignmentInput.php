<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $accepted_at
 * @property-read int $bundle_components_remaining
 * @property-read string $cancellation_reason
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string $failure_reason
 * @property-read int $product_variants_remaining
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfileUnconfiguredAssignmentInput extends Model {
    /** @param array{'accepted_at': string|\DateTimeInterface, 'bundle_components_remaining': int, 'cancellation_reason'?: string, 'completed_at'?: string|\DateTimeInterface, 'failure_reason'?: string, 'product_variants_remaining': int, 'status': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileUnconfiguredAssignmentInput')); }
    /** Time Flint accepted the assignment request. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When accepted_at is omitted; use hasAcceptedAt() or valueOrDefault().
     */
    public function getAcceptedAt(): string|\DateTimeInterface { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** About how many bundle components the assignment hasn't reached yet, starting from those without a delivery profile when Flint accepted the request. Flint updates it between runs of batches, about every 10 seconds, so it can lag behind, and it is 0 once the assignment is `completed`. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When bundle_components_remaining is omitted; use hasBundleComponentsRemaining() or valueOrDefault().
     */
    public function getBundleComponentsRemaining(): int { return $this->get('bundle_components_remaining'); }
    public function hasBundleComponentsRemaining(): bool { return $this->has('bundle_components_remaining'); }
    /** Why the assignment was canceled. Omitted when `status` isn't `canceled`. Value enum: "superseded", "delivery_profile_archived".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Time the assignment reached `completed`, `canceled`, or `failed`. Omitted when `status` is `processing`. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Why the assignment failed. Omitted when `status` isn't `failed`. Value enum: "assignment_failed".
     * @return string
     * @throws SdkError When failure_reason is omitted; use hasFailureReason() or valueOrDefault().
     */
    public function getFailureReason(): string { return $this->get('failure_reason'); }
    public function hasFailureReason(): bool { return $this->has('failure_reason'); }
    /** About how many physical product variants the assignment hasn't reached yet, starting from those without a delivery profile when Flint accepted the request. Flint updates it between runs of batches, about every 10 seconds, so it can lag behind, and it is 0 once the assignment is `completed`. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When product_variants_remaining is omitted; use hasProductVariantsRemaining() or valueOrDefault().
     */
    public function getProductVariantsRemaining(): int { return $this->get('product_variants_remaining'); }
    public function hasProductVariantsRemaining(): bool { return $this->has('product_variants_remaining'); }
    /** Progress of the assignment. Poll the profile until it is no longer `processing`. Value enum: "processing", "completed", "canceled", "failed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}
