<?php
declare(strict_types=1);
namespace Flint\Errors;
final class PaginationLimitError extends \Flint\SdkError {
    public mixed $nextPageToken = null;
    public int $pages = 0;
}
