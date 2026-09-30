<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $feedback_report_id
 * Presence-aware input; omitted fields throw when accessed. */
final class FeedbackReportsGetInput extends Model {
    /** @param array{'feedback_report_id': string, 'X-Request-Id'?: string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FeedbackReportsGetInput')); }
    /** @return string
     * @throws SdkError When feedback_report_id is omitted; use hasFeedbackReportId() or valueOrDefault().
     */
    public function getFeedbackReportId(): string { return $this->get('feedback_report_id'); }
    public function hasFeedbackReportId(): bool { return $this->has('feedback_report_id'); }
    /** @return string
     * @throws SdkError When X-Request-Id is omitted; use hasXRequestId() or valueOrDefault().
     */
    public function getXRequestId(): string { return $this->get('X-Request-Id'); }
    public function hasXRequestId(): bool { return $this->has('X-Request-Id'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}
