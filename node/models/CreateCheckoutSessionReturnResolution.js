import { d8255 as c0, d8252 as c2, d8253 as c3, d8254 as c4 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d253 as c1 } from '../descriptors/data/12.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8099 as c5, d8100 as c6, d8101 as c7 } from '../descriptors/data/354.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8115 as c8, d8116 as c9 } from '../descriptors/data/356.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d253 as d253 } from '../descriptors/data/12.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d253;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec348"]:c2(),["SharedCodec349"]:c3(),["SharedCodec350"]:c4(),["SharedCodec351"]:c5(),["SharedCodec352"]:c6(),["SharedCodec353"]:c7(),["SharedCodec366"]:c8(),["SharedCodec367"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
