import { d9293 as c0 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9312 as c1, d9313 as c2, d9314 as c3, d9315 as c4, d9316 as c5 } from '../descriptors/data/422.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9293 as d9293 } from '../descriptors/data/421.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d9293;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["InvoiceScheduleDueWrite"]:c0(),["SharedCodec1687"]:c1(),["SharedCodec1688"]:c2(),["SharedCodec1689"]:c3(),["SharedCodec1690"]:c4(),["SharedCodec1691"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeInvoiceScheduleDueWrite(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
