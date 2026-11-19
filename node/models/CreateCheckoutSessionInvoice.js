import { d8255 as c0, d8252 as c2, d8253 as c3, d8254 as c4 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d248 as c1 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8099 as c5, d8100 as c6, d8101 as c7, d8102 as c8, d8103 as c9 } from '../descriptors/data/354.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d248 as d248 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d248;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionInvoice"]:c1(),["SharedCodec348"]:c2(),["SharedCodec349"]:c3(),["SharedCodec350"]:c4(),["SharedCodec351"]:c5(),["SharedCodec352"]:c6(),["SharedCodec353"]:c7(),["SharedCodec354"]:c8(),["SharedCodec355"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionInvoice(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
