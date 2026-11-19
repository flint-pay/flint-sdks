import { d394 as c0 } from '../descriptors/data/24.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8046 as c1 } from '../descriptors/data/351.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9715 as c2 } from '../descriptors/data/448.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d394 as d394 } from '../descriptors/data/24.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d394;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnRequest"]:c0(),["MetadataRequest"]:c1(),["ReturnLineItemRequest"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
