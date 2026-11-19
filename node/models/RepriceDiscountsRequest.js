import { d1763 as c0 } from '../descriptors/data/87.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1763 as d1763 } from '../descriptors/data/87.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1763;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["RepriceDiscountsRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeRepriceDiscountsRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
