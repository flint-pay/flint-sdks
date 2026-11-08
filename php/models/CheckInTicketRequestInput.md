[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CheckInTicketRequestInput

An optional admission code to verify and an optional version fence.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `admission_code` | Optional | string | The 16-character Crockford base32 admission code scanned at the door. Spaces, hyphens and ASCII lowercase are normalized. Omit it to check the ticket in manually. minLength: `16`. |
| `expected_version` | Optional | integer | The ticket version last read. The change applies only while the ticket is at this version; a stale value returns 409 VERSION_CONFLICT, even when the ticket's status would also refuse the change. Door scanners usually omit it. Format: `uint64`. minimum: `1`. |

