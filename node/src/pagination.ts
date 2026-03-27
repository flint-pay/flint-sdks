/**
 * A page of results from a list operation.
 */
export type FlintPage<T> = {
  data: T[];
  nextPageToken?: string;
  hasMore: boolean;
};

/**
 * FlintList is both a Promise<FlintPage<T>> (for single-page access) and
 * an AsyncIterable<T> (for auto-pagination across all pages).
 *
 * Usage:
 * ```ts
 * // Single page
 * const page = await flint.orders.list({ limit: 25 });
 * page.data; // Order[]
 * page.nextPageToken; // string | undefined
 *
 * // Auto-paginate all results
 * for await (const order of flint.orders.list({ limit: 25 })) {
 *   console.log(order.id);
 * }
 * ```
 */
export type FlintList<T> = Promise<FlintPage<T>> & AsyncIterable<T>;

export type ListFetcher<T> = (pageToken?: string) => Promise<FlintPage<T>>;

/**
 * Creates a FlintList that wraps a page fetcher.
 * The returned object works as both a Promise (resolving to the first page)
 * and an AsyncIterable (auto-paginating through all results).
 */
export const createFlintList = <T>(fetcher: ListFetcher<T>): FlintList<T> => {
  // Create the promise for the first page
  const firstPagePromise = fetcher();

  // Create the async iterable that auto-paginates
  const asyncIterable: AsyncIterable<T> = {
    [Symbol.asyncIterator]() {
      let currentPage: FlintPage<T> | undefined;
      let index = 0;
      let started = false;

      return {
        async next(): Promise<IteratorResult<T>> {
          // Fetch first page
          if (!started) {
            started = true;
            currentPage = await firstPagePromise;
            index = 0;
          }

          // Return items from current page
          if (currentPage && index < currentPage.data.length) {
            const value = currentPage.data[index]!;
            index++;
            return { value, done: false };
          }

          // Fetch next page if available
          if (currentPage?.hasMore && currentPage.nextPageToken) {
            currentPage = await fetcher(currentPage.nextPageToken);
            index = 0;

            if (currentPage.data.length > 0) {
              const value = currentPage.data[index]!;
              index++;
              return { value, done: false };
            }
          }

          // Done
          return { value: undefined, done: true };
        },
      };
    },
  };

  // Combine: the Promise resolves to first page, but also supports async iteration
  const combined = firstPagePromise as FlintList<T>;
  (combined as unknown as Record<symbol, unknown>)[Symbol.asyncIterator] =
    asyncIterable[Symbol.asyncIterator].bind(asyncIterable);

  return combined;
};
