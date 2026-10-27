<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $feedback_report_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FeedbackReportsGetInput extends Model {
    /** @param array{'feedback_report_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FeedbackReportsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When feedback_report_id is omitted; use hasFeedbackReportId() or valueOrDefault().
     */
    public function getFeedbackReportId(): string { return $this->get('feedback_report_id'); }
    public function hasFeedbackReportId(): bool { return $this->has('feedback_report_id'); }
}
