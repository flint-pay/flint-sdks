import { describe, it, expect } from "vitest";
import { createFlintList } from "../src/pagination";
import type { FlintPage } from "../src/pagination";

describe("FlintList", () => {
  it("should resolve to first page as a Promise", async () => {
    const fetcher = async (): Promise<FlintPage<string>> => ({
      data: ["a", "b", "c"],
      nextPageToken: undefined,
      hasMore: false,
    });

    const list = createFlintList(fetcher);
    const page = await list;

    expect(page.data).toEqual(["a", "b", "c"]);
    expect(page.hasMore).toBe(false);
    expect(page.nextPageToken).toBeUndefined();
  });

  it("should auto-paginate with for await", async () => {
    let callCount = 0;
    const fetcher = async (pageToken?: string): Promise<FlintPage<number>> => {
      callCount++;
      if (!pageToken) {
        return { data: [1, 2, 3], nextPageToken: "page2", hasMore: true };
      }
      if (pageToken === "page2") {
        return { data: [4, 5], nextPageToken: "page3", hasMore: true };
      }
      return { data: [6], nextPageToken: undefined, hasMore: false };
    };

    const list = createFlintList(fetcher);
    const items: number[] = [];

    for await (const item of list) {
      items.push(item);
    }

    expect(items).toEqual([1, 2, 3, 4, 5, 6]);
    expect(callCount).toBe(3);
  });

  it("should handle empty results", async () => {
    const fetcher = async (): Promise<FlintPage<string>> => ({
      data: [],
      nextPageToken: undefined,
      hasMore: false,
    });

    const list = createFlintList(fetcher);
    const page = await list;

    expect(page.data).toEqual([]);
    expect(page.hasMore).toBe(false);
  });

  it("should handle single page with for await", async () => {
    const fetcher = async (): Promise<FlintPage<string>> => ({
      data: ["only"],
      nextPageToken: undefined,
      hasMore: false,
    });

    const list = createFlintList(fetcher);
    const items: string[] = [];

    for await (const item of list) {
      items.push(item);
    }

    expect(items).toEqual(["only"]);
  });
});
