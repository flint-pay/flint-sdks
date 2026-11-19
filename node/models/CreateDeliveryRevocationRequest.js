import { d276 as c0 } from '../descriptors/data/13.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8801 as c1 } from '../descriptors/data/393.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8808 as c2, d8809 as c3, d8810 as c4, d8811 as c5 } from '../descriptors/data/394.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d276 as d276 } from '../descriptors/data/13.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d276;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateDeliveryRevocationRequest"]:c0(),["CreateDeliveryRevocationTarget"]:c1(),["SharedCodec410"]:c2(),["SharedCodec411"]:c3(),["SharedCodec412"]:c4(),["SharedCodec413"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateDeliveryRevocationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
