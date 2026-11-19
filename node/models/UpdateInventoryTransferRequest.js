import { d9255 as c0, d9256 as c1, d9257 as c2 } from '../descriptors/data/419.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7758 as c3 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7758 as d7758 } from '../descriptors/data/326.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7758;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec3100"]:c0(),["SharedCodec3101"]:c1(),["SharedCodec3102"]:c2(),["UpdateInventoryTransferRequest"]:c3()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateInventoryTransferRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
