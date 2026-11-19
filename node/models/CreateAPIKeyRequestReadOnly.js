import { d239 as c0 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7997 as c1 } from '../descriptors/data/347.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d7973 as c2 } from '../descriptors/data/346.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d239 as d239 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d239;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateAPIKeyRequestReadOnly"]:c0(),["SharedCodec339"]:c1(),["SharedCodec5"]:c2()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateAPIKeyRequestReadOnly(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
