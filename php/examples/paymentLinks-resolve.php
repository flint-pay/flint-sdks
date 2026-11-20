<?php
declare(strict_types=1);
$autoload = __DIR__;
while (!is_file($autoload . '/vendor/autoload.php') && !is_file($autoload . '/autoload.php')) {
    $parent = dirname($autoload);
    if ($parent === $autoload) throw new \RuntimeException('Run composer install in the application before running this example.');
    $autoload = $parent;
}
require_once is_file($autoload . '/vendor/autoload.php') ? $autoload . '/vendor/autoload.php' : $autoload . '/autoload.php';
use Flint\{Client, ClientOptions, RequestOptions};
$baseUrl = getenv('FLINT_BASE_URL') ?: null;
$client = new Client(new ClientOptions(
  baseUrl: $baseUrl,
  allowInsecureHttp: $baseUrl !== null && in_array(parse_url($baseUrl, PHP_URL_HOST), ['localhost', '127.0.0.1'], true) && parse_url($baseUrl, PHP_URL_SCHEME) === 'http',
));
// Persist this key with the action before sending; reuse it for every resubmission.
$idempotencyKey = bin2hex(random_bytes(16));

$result = $client->paymentLinks->resolve('pl_01KEZF7C007WDMA5P9BPZ8J2AM', [
  'custom_field_values' => (object) [
    'meal_preference' => 'Vegetarian',
  ],
  'modifiers' => (object) [
    'general-admission' => (object) [
      'modifiers' => [
        (object) [
          'modifier_id' => 'mod_01KEZF7C00HP1041X7TDG6WRV5',
          'quantity' => 1,
          'type' => 'catalog',
        ],
        (object) [
          'text' => (object) [
            'modifier_group_id' => 'mg_01KEZF7C00VBHD29DTPF4QBB6V',
            'value' => 'Extra hot',
          ],
          'type' => 'text',
        ],
      ],
    ],
  ],
  'quantity_overrides' => (object) [
    'general-admission' => 2,
  ],
  'resolution_context' => 'plrc_v1.example_signed_resolution_context',
], new RequestOptions(idempotencyKey: $idempotencyKey));
echo json_encode($result, JSON_THROW_ON_ERROR) . PHP_EOL;
$client->close();
