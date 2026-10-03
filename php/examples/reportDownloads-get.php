<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  token: getenv('API_TOKEN') ?: '',
));
$result = $client->reportDownloads->get('example');
// Location may be relative or use another origin. The SDK does not follow it.
// Validate the destination before a separate download; do not forward API credentials.
echo $result->meta['status'] . ' ' . ($result->data->location ?? 'No Location header') . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
