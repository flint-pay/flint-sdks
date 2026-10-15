<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('API_BASE_URL');
if ($baseUrl === false) $baseUrl = 'https://api.withflintpay.com';
$apiKey = getenv('API_KEY');
if ($apiKey === false || $apiKey === '') throw new \RuntimeException('Set API_KEY: this call requires a credential');
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  apiKey: $apiKey,
));
$input = [
  'body' => (object) [
    'currency' => 'USD',
    'delivery_method_ids' => [],
    'line_items' => [
      (object) [
        'variant_id' => 'example',
      ],
    ],
    'mode' => 'delivery_options',
  ],
];
$result = $client->deliveryPreviews->create($input);
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
$client->close();
