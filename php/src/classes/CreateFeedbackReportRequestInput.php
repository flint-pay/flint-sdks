<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $actual_behavior
 * @property-read string $canonical_command
 * @property-read string $code_location
 * @property-read string $component
 * @property-read string $description
 * @property-read string $expected_behavior
 * @property-read string $kind
 * @property-read string $related_request_id
 * @property-read list<string> $related_resource_ids
 * @property-read string $reporter_kind
 * @property-read FeedbackReportingClientInput|array<array-key, mixed>|\stdClass $reporting_client
 * @property-read list<string> $reproduction_steps
 * @property-read string $sentiment
 * @property-read string $summary
 * @property-read string $surface
 * @property-read string $surface_route
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateFeedbackReportRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateFeedbackReportRequestInput')); }
    /** @return string
     * @throws SdkError When actual_behavior is omitted; use hasActualBehavior() or valueOrDefault().
     */
    public function getActualBehavior(): string { return $this->get('actual_behavior'); }
    public function hasActualBehavior(): bool { return $this->has('actual_behavior'); }
    /** @return string
     * @throws SdkError When canonical_command is omitted; use hasCanonicalCommand() or valueOrDefault().
     */
    public function getCanonicalCommand(): string { return $this->get('canonical_command'); }
    public function hasCanonicalCommand(): bool { return $this->has('canonical_command'); }
    /** @return string
     * @throws SdkError When code_location is omitted; use hasCodeLocation() or valueOrDefault().
     */
    public function getCodeLocation(): string { return $this->get('code_location'); }
    public function hasCodeLocation(): bool { return $this->has('code_location'); }
    /** @return string
     * @throws SdkError When component is omitted; use hasComponent() or valueOrDefault().
     */
    public function getComponent(): string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When expected_behavior is omitted; use hasExpectedBehavior() or valueOrDefault().
     */
    public function getExpectedBehavior(): string { return $this->get('expected_behavior'); }
    public function hasExpectedBehavior(): bool { return $this->has('expected_behavior'); }
    /** @return string
     * @throws SdkError When kind is omitted; use hasKind() or valueOrDefault().
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** @return string
     * @throws SdkError When related_request_id is omitted; use hasRelatedRequestId() or valueOrDefault().
     */
    public function getRelatedRequestId(): string { return $this->get('related_request_id'); }
    public function hasRelatedRequestId(): bool { return $this->has('related_request_id'); }
    /** @return list<string>
     * @throws SdkError When related_resource_ids is omitted; use hasRelatedResourceIds() or valueOrDefault().
     */
    public function getRelatedResourceIds(): array { return $this->get('related_resource_ids'); }
    public function hasRelatedResourceIds(): bool { return $this->has('related_resource_ids'); }
    /** @return string
     * @throws SdkError When reporter_kind is omitted; use hasReporterKind() or valueOrDefault().
     */
    public function getReporterKind(): string { return $this->get('reporter_kind'); }
    public function hasReporterKind(): bool { return $this->has('reporter_kind'); }
    /** @return FeedbackReportingClientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When reporting_client is omitted; use hasReportingClient() or valueOrDefault().
     */
    public function getReportingClient(): mixed { return $this->get('reporting_client'); }
    public function hasReportingClient(): bool { return $this->has('reporting_client'); }
    /** @return list<string>
     * @throws SdkError When reproduction_steps is omitted; use hasReproductionSteps() or valueOrDefault().
     */
    public function getReproductionSteps(): array { return $this->get('reproduction_steps'); }
    public function hasReproductionSteps(): bool { return $this->has('reproduction_steps'); }
    /** @return string
     * @throws SdkError When sentiment is omitted; use hasSentiment() or valueOrDefault().
     */
    public function getSentiment(): string { return $this->get('sentiment'); }
    public function hasSentiment(): bool { return $this->has('sentiment'); }
    /** @return string
     * @throws SdkError When summary is omitted; use hasSummary() or valueOrDefault().
     */
    public function getSummary(): string { return $this->get('summary'); }
    public function hasSummary(): bool { return $this->has('summary'); }
    /** @return string
     * @throws SdkError When surface is omitted; use hasSurface() or valueOrDefault().
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** @return string
     * @throws SdkError When surface_route is omitted; use hasSurfaceRoute() or valueOrDefault().
     */
    public function getSurfaceRoute(): string { return $this->get('surface_route'); }
    public function hasSurfaceRoute(): bool { return $this->has('surface_route'); }
}
