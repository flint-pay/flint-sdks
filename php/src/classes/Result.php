<?php
declare(strict_types=1);
namespace Flint;
/** @template T */
final class Result
{
    private readonly ResponseInfo $responseInfo;
    /** @param T $data */
    public function __construct(
        public readonly mixed $data,
        private readonly array $metadata,
        public readonly string $raw,
        private readonly array $redactFields = [],
        private readonly array $responseCodec = [],
        private readonly array $definitions = [],
    ) {
        $this->responseInfo = ResponseInfo::from($metadata, $data);
    }
    public function lastResponse(): ResponseInfo
    {
        return $this->responseInfo;
    }
    /** @internal Includes runtime-only continuation information. */
    public function internalMeta(): array
    {
        return $this->metadata;
    }
    /** @internal Redaction context for generic payload models. */
    public function inspectionContext(): array
    {
        return [$this->redactFields, $this->responseCodec, $this->definitions];
    }
    public function __debugInfo(): array
    {
        return ['lastResponse' => $this->responseInfo, 'data' => '[Use data explicitly]'];
    }
}
