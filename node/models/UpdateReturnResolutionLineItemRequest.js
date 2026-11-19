import { d10706 as c0 } from '../descriptors/data/507.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10706 as d10706 } from '../descriptors/data/507.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10706;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["UpdateReturnResolutionLineItemRequest"]:c0()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateReturnResolutionLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
