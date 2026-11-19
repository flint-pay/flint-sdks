import { d8047 as c0 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8143 as c1 } from '../descriptors/data/357.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7789 as c2 } from '../descriptors/data/329.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7789 as d7789 } from '../descriptors/data/329.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7789;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3071"]:c0(),["SharedCodec3074"]:c1(),["UpdateRefundRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateRefundRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
