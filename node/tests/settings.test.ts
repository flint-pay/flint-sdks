import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Flint } from "../src/index";

const MOCK_SETTINGS = {
  settingsId: "set_01ABCDEFGHIJKLMNOPQRSTUV",
  merchantId: "mer_01ABCDEFGHIJKLMNOPQRSTUV",
  tipping: {
    enabled: true,
    percentages: [15, 20, 25],
  },
  tax: {
    enabled: false,
  },
  checkout: {
    collectPhone: false,
    collectAddress: false,
  },
  createdAt: "2026-02-01T00:00:00Z",
  updatedAt: "2026-02-01T00:00:00Z",
};

describe("SettingsService", () => {
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

  it("should get effective settings for a location", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ settings: MOCK_SETTINGS }), { status: 200 })
    );

    const settings = await flint.settings.getEffective({
      locationId: "loc_01ABCDEFGHIJKLMNOPQRSTUV",
    });
    expect(settings.settingsId).toBe("set_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(settings.createdAt).toBeInstanceOf(Date);

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/settings/effective");
    expect(url).toContain("location_id=loc_01ABCDEFGHIJKLMNOPQRSTUV");
    expect(options.body).toBeUndefined();
  });

  it("should get raw settings for a scope", async () => {
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ settings: MOCK_SETTINGS }), { status: 200 })
    );

    const settings = await flint.settings.get({ scope: "merchant" });
    expect(settings.settingsId).toBe("set_01ABCDEFGHIJKLMNOPQRSTUV");

    const [url, options] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/settings");
    expect(url).toContain("scope=merchant");
    expect(options.body).toBeUndefined();
  });

  it("should update settings", async () => {
    const updated = {
      ...MOCK_SETTINGS,
      tipping: { enabled: false, percentages: [] },
    };
    fetchSpy.mockResolvedValueOnce(
      new Response(JSON.stringify({ settings: updated }), { status: 200 })
    );

    const settings = await flint.settings.update({
      scope: "merchant",
      tipping: { isEnabled: false },
    });

    expect(settings.settingsId).toBe("set_01ABCDEFGHIJKLMNOPQRSTUV");

    const body = JSON.parse(fetchSpy.mock.calls[0]![1].body);
    expect(body.tipping).toEqual({ is_enabled: false });

    const [url] = fetchSpy.mock.calls[0]!;
    expect(url).toContain("/v1/settings");
    expect(url).toContain("scope=merchant");
  });
});
