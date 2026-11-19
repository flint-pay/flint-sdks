import { d260 as c0 } from '../descriptors/data/12.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8441 as c1 } from '../descriptors/data/374.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d260 as d260 } from '../descriptors/data/12.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d260;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCustomerAccessLinkRequest"]:c0(),["SharedCodec369"]:c1()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCustomerAccessLinkRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
