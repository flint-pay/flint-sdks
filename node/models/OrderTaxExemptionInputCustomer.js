import { d1381 as c0 } from '../descriptors/data/68.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9384 as c1, d9385 as c2, d9386 as c3 } from '../descriptors/data/426.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1381 as d1381 } from '../descriptors/data/68.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1381;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OrderTaxExemptionInputCustomer"]:c0(),["SharedCodec1968"]:c1(),["SharedCodec1969"]:c2(),["SharedCodec1970"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOrderTaxExemptionInputCustomer(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
