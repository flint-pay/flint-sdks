import { d1830 as c0 } from '../descriptors/data/91.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10604 as c1 } from '../descriptors/data/501.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1830 as d1830 } from '../descriptors/data/91.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1830;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ReturnPolicyScopeIncludeRequest"]:c0(),["SharedCodec2747"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnPolicyScopeIncludeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
