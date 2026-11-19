import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8267 as c1, d8260 as c3 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10192 as c2 } from '../descriptors/data/475.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10218 as c4, d10223 as c5, d10224 as c6 } from '../descriptors/data/477.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10227 as c7, d10228 as c8, d10229 as c9, d10230 as c10, d10231 as c11 } from '../descriptors/data/478.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10236 as c12, d10237 as c13, d10238 as c14, d10239 as c15 } from '../descriptors/data/479.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10192 as d10192 } from '../descriptors/data/475.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d10192;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2143"]:c4(),["SharedCodec2148"]:c5(),["SharedCodec2149"]:c6(),["SharedCodec2167"]:c7(),["SharedCodec2168"]:c8(),["SharedCodec2169"]:c9(),["SharedCodec2170"]:c10(),["SharedCodec2171"]:c11(),["SharedCodec2178"]:c12(),["SharedCodec2179"]:c13(),["SharedCodec2180"]:c14(),["SharedCodec2181"]:c15()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
