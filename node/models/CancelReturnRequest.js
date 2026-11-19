import { d152 as c0, d153 as c1 } from '../descriptors/data/7.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d152 as d152 } from '../descriptors/data/7.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d152;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CancelReturnRequest"]:c0(),["CancelReturnResolutionRequest"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCancelReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
