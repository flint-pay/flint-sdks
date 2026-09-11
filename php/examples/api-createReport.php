<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions, ApiCreateReportInput};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  authMode: 'merchant', credentials: ['merchant' => ['BearerAuth' => getenv('API_MERCHANT_BEARERAUTH') ?: '']],
));
$input = new ApiCreateReportInput([
  'body' => (object) [
    'currency' => 'USD',
    'interval_end_at' => '2026-01-01T00:00:00Z',
    'interval_start_at' => '2026-01-01T00:00:00Z',
    'report_type' => 'orders_itemized_v1',
  ],
]);
$result = $client->api->createReport($input, new RequestOptions(maxAttempts: 1));
echo $result->data->data->report_id . PHP_EOL;
echo $result->data->data->status . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
