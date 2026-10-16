import { d891 as c0 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { d891 } from '../descriptors/data.js?sdk=50f9c16f4dffbb7ff2528d427a616050712fc55fd9a73bec783011e006d2d7be';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d891;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["GuestPurchaseLink"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeGuestPurchaseLink(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
