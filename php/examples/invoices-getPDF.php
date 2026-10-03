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
$result = $client->invoices->getPDF('example');
// Choose a destination path; PHP strings preserve every PDF byte.
$resultPath = getenv('API_DOWNLOAD_PATH') ?: 'download.pdf';
if (file_put_contents($resultPath, $result->data) === false) throw new \RuntimeException('Could not save PDF');
echo 'Saved ' . strlen($result->data) . ' bytes to ' . $resultPath . PHP_EOL;
echo ($result->meta['requestId'] ?? '') . PHP_EOL;
$client->close();
