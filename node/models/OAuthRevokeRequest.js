import { d1290 as c0 } from '../descriptors/data/64.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9832 as c1, d9833 as c2, d9834 as c3, d9835 as c4 } from '../descriptors/data/455.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1290 as d1290 } from '../descriptors/data/64.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1290;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthRevokeRequest"]:c0(),["SharedCodec1844"]:c1(),["SharedCodec1845"]:c2(),["SharedCodec1846"]:c3(),["SharedCodec1847"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthRevokeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
