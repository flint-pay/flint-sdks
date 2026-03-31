import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_WEBHOOK_ENDPOINT = {
  webhookEndpointId: "whe_01ABCDEFGHIJKLMNOPQRSTUV",
  url: "https://example.com/webhook",
  subscribedEvents: ["payment_intent.succeeded", "subscription.created"],
  description: "My webhook",
  enabled: true,
  secret: "whsec_test123",
  status: 1, // ACTIVE
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

const MOCK_WEBHOOK_EVENT = {
  webhookEventId: "whev_01ABCDEFGHIJKLMNOPQRSTUV",
  webhookEndpointId: "whe_01ABCDEFGHIJKLMNOPQRSTUV",
  eventType: "payment_intent.succeeded",
  payload: "{\"type\":\"payment_intent.succeeded\"}",
  status: 2, // DELIVERED
  attemptCount: 1,
  maxAttempts: 5,
  lastResponseCode: 200,
  deliveredAt: "2026-02-01T00:01:00Z",
  createdAt: "2026-02-01T00:00:00Z",
};

describe("WebhookEndpointService", () => {
  let flint: Flint;
  let fetchSpy: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    flint = new Flint({
      apiKey: "flint_test_123",
      baseUrl: "http://localhost:8080",
      maxRetries: 0,
    });
    fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("should create a webhook endpoint", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ webhookEndpoint: MOCK_WEBHOOK_ENDPOINT }), { status: 200 })
    );

    const endpoint = await flint.webhooks.create({
      url: "https://example.com/webhook",
      subscribedEvents: ["payment_intent.succeeded"],
    });

    expect(endpoint.webhookEndpointId).toBe("whe_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(endpoint.url).toBe("https://example.com/webhook");
    expect(endpoint.createdAt).toBeInstanceOf(Date);

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.url).toBe("https://example.com/webhook");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/webhooks");
  });

  it("should get a webhook endpoint", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ webhookEndpoint: MOCK_WEBHOOK_ENDPOINT }), { status: 200 })
    );

    const endpoint = await flint.webhooks.get("whe_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(endpoint.webhookEndpointId).toBe("whe_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/webhooks/whe_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(options.body).toBeUndefined();
  });

  it("should decode string-form proto webhook enums", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          webhookEndpoint: {
            ...MOCK_WEBHOOK_ENDPOINT,
            status: "WEBHOOK_ENDPOINT_STATUS_DISABLED",
          },
        }),
        { status: 200 }
      )
    );
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          webhookEvents: [
            {
              ...MOCK_WEBHOOK_EVENT,
              status: "WEBHOOK_EVENT_STATUS_FAILED",
            },
          ],
        }),
        { status: 200 }
      )
    );

    const endpoint = await flint.webhooks.get("whe_01ABCDEFGHIJKLMNOPQRSTUV");
    const events = await flint.webhooks.listEvents({ limit: 1 });

    expect(endpoint.status).toBe("disabled");
    expect(events.data[0]!.status).toBe("failed");
  });

  it("should update a webhook endpoint", async () => {
    const updated = { ...MOCK_WEBHOOK_ENDPOINT, description: "Updated webhook" };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ webhookEndpoint: updated }), { status: 200 })
    );

    const endpoint = await flint.webhooks.update("whe_01ABCDEFGHIJKLMNOPQRSTUV", {
      description: "Updated webhook",
      updateMask: ["description"],
    });

    expect(endpoint.description).toBe("Updated webhook");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.description).toBe("Updated webhook");
    expect(body.updateMask).toBeUndefined();
  });

  it("should delete a webhook endpoint", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ webhookEndpoint: MOCK_WEBHOOK_ENDPOINT }), { status: 200 })
    );

    await flint.webhooks.del("whe_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/webhooks/whe_01ABCDEFGHIJKLMNOPQRSTUV");
  });

  it("should rotate a webhook secret", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ secret: "whsec_newSecret123" }), { status: 200 })
    );

    const result = await flint.webhooks.rotateWebhookSecret("whe_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(result.secret).toBe("whsec_newSecret123");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/webhooks/whe_01ABCDEFGHIJKLMNOPQRSTUV/rotate-secret");
  });

  it("should list webhook endpoints", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          webhookEndpoints: [
            MOCK_WEBHOOK_ENDPOINT,
            { ...MOCK_WEBHOOK_ENDPOINT, webhookEndpointId: "whe_02ABCDEFGHIJKLMNOPQRSTUV" },
          ],
          nextPageToken: "1",
        }),
        { status: 200 }
      )
    );

    const page = await flint.webhooks.list({ limit: 1 });
    expect(page.data).toHaveLength(2);
    expect(page.data[0]!.webhookEndpointId).toBe("whe_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(page.nextPageToken).toBe("1");
  });

  it("should list webhook events", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ webhookEvents: [MOCK_WEBHOOK_EVENT], nextPageToken: "1" }), { status: 200 })
    );

    const page = await flint.webhooks.listEvents({
      webhookEndpointId: "whe_01ABCDEFGHIJKLMNOPQRSTUV",
      eventType: "payment_intent.succeeded",
      limit: 1,
    });

    expect(page.data).toHaveLength(1);
    expect(page.data[0]!.webhookEventId).toBe("whev_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(page.data[0]!.deliveredAt).toBeInstanceOf(Date);
    expect(page.nextPageToken).toBe("1");

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/webhook-events");
    expect(url).toContain("webhook_endpoint_id=whe_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(url).toContain("event_type=payment_intent.succeeded");
    expect(url).toContain("page_size=1");
  });
});
