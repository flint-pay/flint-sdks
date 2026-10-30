<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $actual_behavior
 * @property-read ?string $canonical_command
 * @property-read ?string $code_location
 * @property-read ?string $component
 * @property-read string $created_at
 * @property-read ?string $description
 * @property-read ?string $expected_behavior
 * @property-read string $feedback_report_id
 * @property-read string $kind
 * @property-read ?string $related_request_id
 * @property-read ?list<string> $related_resource_ids
 * @property-read ?string $reporter_kind
 * @property-read ?FeedbackReportResponseDataPraiseReportingClient $reporting_client
 * @property-read ?list<string> $reproduction_steps
 * @property-read ?string $sentiment
 * @property-read string $summary
 * @property-read string $surface
 * @property-read ?string $surface_route
 * Presence-aware response; omitted optional fields return null. */
final class FeedbackReportResponseDataPraise extends Model {
    /** @param array{'actual_behavior'?: string, 'canonical_command'?: string, 'code_location'?: string, 'component'?: string, 'created_at': string, 'description'?: string, 'expected_behavior'?: string, 'feedback_report_id': string, 'kind': string, 'related_request_id'?: string, 'related_resource_ids'?: list<string>, 'reporter_kind'?: string, 'reporting_client'?: mixed, 'reproduction_steps'?: list<string>, 'sentiment'?: string, 'summary': string, 'surface': string, 'surface_route'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FeedbackReportResponseDataPraise')); }
    /** Optional observed outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     * @return ?string
     */
    public function getActualBehavior(): ?string { return $this->get('actual_behavior'); }
    public function hasActualBehavior(): bool { return $this->has('actual_behavior'); }
    /** Dotted or hyphenated canonical command name, such as payment-intents.create. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 200. pattern: ^[a-z][a-z0-9]*(?:[.-][a-z0-9]+)*$.
     * @return ?string
     */
    public function getCanonicalCommand(): ?string { return $this->get('canonical_command'); }
    public function hasCanonicalCommand(): bool { return $this->has('canonical_command'); }
    /** Location in the reporting code associated with this feedback. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     * @return ?string
     */
    public function getCodeLocation(): ?string { return $this->get('code_location'); }
    public function hasCodeLocation(): bool { return $this->has('code_location'); }
    /** Optional feature or subsystem within the product. Limited to 128 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 128.
     * @return ?string
     */
    public function getComponent(): ?string { return $this->get('component'); }
    public function hasComponent(): bool { return $this->has('component'); }
    /** Server-assigned time when Flint stored the report. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Optional details about the feedback. Limited to 8000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 8000.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Optional desired outcome. Limited to 4000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 4000.
     * @return ?string
     */
    public function getExpectedBehavior(): ?string { return $this->get('expected_behavior'); }
    public function hasExpectedBehavior(): bool { return $this->has('expected_behavior'); }
    /** Server-assigned ID of the stored feedback report. pattern: ^fbr_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return string
     */
    public function getFeedbackReportId(): string { return $this->get('feedback_report_id'); }
    public function hasFeedbackReportId(): bool { return $this->has('feedback_report_id'); }
    /** Classification of the feedback. Value enum: "papercut", "bug", "feature_request", "praise", "other".
     * @return string
     */
    public function getKind(): string { return $this->get('kind'); }
    public function hasKind(): bool { return $this->has('kind'); }
    /** Flint request ID associated with this feedback. Limited to 255 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 255.
     * @return ?string
     */
    public function getRelatedRequestId(): ?string { return $this->get('related_request_id'); }
    public function hasRelatedRequestId(): bool { return $this->has('related_request_id'); }
    /** Existing public resources associated with this feedback, with at most 20 unique IDs. maxItems: 20. uniqueItems: true. [] (Value): string. minLength: 1.
     * @return ?list<string>
     */
    public function getRelatedResourceIds(): ?array { return $this->get('related_resource_ids'); }
    public function hasRelatedResourceIds(): bool { return $this->has('related_resource_ids'); }
    /** Whether the reporter is a human or an AI. Value enum: "human", "ai_agent".
     * @return ?string
     */
    public function getReporterKind(): ?string { return $this->get('reporter_kind'); }
    public function hasReporterKind(): bool { return $this->has('reporter_kind'); }
    /** Tool submitting the feedback, independently of the product being discussed. Its name is required when present. The client that submits a feedback report, with its name, platform, version, and schema version.
     * @return ?FeedbackReportResponseDataPraiseReportingClient
     */
    public function getReportingClient(): ?FeedbackReportResponseDataPraiseReportingClient { return $this->get('reporting_client'); }
    public function hasReportingClient(): bool { return $this->has('reporting_client'); }
    /** Unique steps in reproduction order, with at most 20 entries. maxItems: 20. uniqueItems: true. [] (Value): string. Limited to 1000 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 1000.
     * @return ?list<string>
     */
    public function getReproductionSteps(): ?array { return $this->get('reproduction_steps'); }
    public function hasReproductionSteps(): bool { return $this->has('reproduction_steps'); }
    /** Positive, negative, or neutral assessment. Required for rating feedback; optional for narrative feedback. Value enum: "positive", "negative", "neutral".
     * @return ?string
     */
    public function getSentiment(): ?string { return $this->get('sentiment'); }
    public function hasSentiment(): bool { return $this->has('sentiment'); }
    /** Brief account of the feedback. Required for every kind except rating; optional for a rating. Limited to 200 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 200.
     * @return string
     */
    public function getSummary(): string { return $this->get('summary'); }
    public function hasSummary(): bool { return $this->has('summary'); }
    /** Product being discussed, independently of how the report is submitted. Value enum: "api", "cli", "mcp", "sdk", "docs", "dashboard", "checkout", "payment_links", "webhooks", "onboarding", "mobile", "other".
     * @return string
     */
    public function getSurface(): string { return $this->get('surface'); }
    public function hasSurface(): bool { return $this->has('surface'); }
    /** Relevant route in the product being discussed. Limited to 500 characters (Unicode code points), counted before whitespace and line-ending normalization. minLength: 1. maxLength: 500.
     * @return ?string
     */
    public function getSurfaceRoute(): ?string { return $this->get('surface_route'); }
    public function hasSurfaceRoute(): bool { return $this->has('surface_route'); }
}
