import { d1382 as c0 } from '../descriptors/data/68.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9385 as c1, d9386 as c2, d9387 as c3 } from '../descriptors/data/426.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1382 as d1382 } from '../descriptors/data/68.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1382;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputNone"]:c0(),["SharedCodec1969"]:c1(),["SharedCodec1970"]:c2(),["SharedCodec1971"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputNone(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
