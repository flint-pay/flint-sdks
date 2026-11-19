import { d1291 as c0 } from '../descriptors/data/64.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9832 as c1, d9833 as c2, d9834 as c3, d9835 as c4, d9836 as c5 } from '../descriptors/data/455.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9837 as c6, d9838 as c7, d9839 as c8, d9840 as c9, d9841 as c10 } from '../descriptors/data/456.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1291 as d1291 } from '../descriptors/data/64.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1291;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["OAuthTokenRequest"]:c0(),["SharedCodec1844"]:c1(),["SharedCodec1845"]:c2(),["SharedCodec1846"]:c3(),["SharedCodec1847"]:c4(),["SharedCodec1848"]:c5(),["SharedCodec1849"]:c6(),["SharedCodec1850"]:c7(),["SharedCodec1851"]:c8(),["SharedCodec1852"]:c9(),["SharedCodec1853"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeOAuthTokenRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
