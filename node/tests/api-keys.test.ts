import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Flint } from "../src";

describe("ApiKeyService", () => {
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

  it("should create an api key and return the one-time secret", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          apiKey: {
            apiKeyId: "key_01ABCDEFGHIJKLMNOPQRSTUVWX",
            ownerUserId: "usr_01ABCDEFGHIJKLMNOPQRSTUVWX",
            name: "Production Backend",
            keyPrefix: "flint_test_abcd",
            scopes: ["commerce.orders.read", "commerce.orders.write"],
            keyType: 2,
            status: 1,
            createdAt: "2026-03-01T00:00:00Z",
            updatedAt: "2026-03-01T00:00:00Z",
          },
          secretKey: "flint_test_secret_123",
        }),
        { status: 200 }
      )
    );

    const result = await flint.apiKeys.create({
      name: "Production Backend",
      scopes: ["commerce.orders.read", "commerce.orders.write"],
      keyType: "external",
    });

    expect(result.apiKey.apiKeyId).toBe("key_01ABCDEFGHIJKLMNOPQRSTUVWX");
    expect(result.secretKey).toBe("flint_test_secret_123");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.name).toBe("Production Backend");
    expect(body.scopes).toEqual(["commerce.orders.read", "commerce.orders.write"]);
    expect(body.keyType).toBeUndefined();
  });
});
