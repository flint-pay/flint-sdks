<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
$result = $client->deliveryPreviews->create([
  'currency' => 'USD',
  'delivery_method_ids' => [],
  'line_items' => [
    (object) [
      'variant_id' => 'example',
    ],
  ],
], new RequestOptions(maxAttempts: 1));
$client->close();
