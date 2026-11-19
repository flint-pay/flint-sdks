import { d1240 as c0 } from '../descriptors/data/61.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1240 as d1240 } from '../descriptors/data/61.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1240;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantAccountSessionRefreshRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeMerchantAccountSessionRefreshRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
