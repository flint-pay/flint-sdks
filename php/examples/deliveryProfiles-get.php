<?php
declare(strict_types=1);
require __DIR__ . '/../vendor/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$client = new Client(new ClientOptions(
  baseUrl: getenv('API_BASE_URL') ?: 'https://sandbox.example.invalid',
  apiKey: getenv('API_KEY') ?: '',
));
$result = $client->deliveryProfiles->get('example', [], new RequestOptions(maxAttempts: 1));
echo $result->current_delivery_profile_revision_id . PHP_EOL;
echo $result->delivery_profile_id . PHP_EOL;
$client->close();
