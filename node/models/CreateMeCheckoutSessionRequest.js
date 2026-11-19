import { d8255 as c0, d8252 as c2, d8253 as c3, d8254 as c4 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d325 as c1 } from '../descriptors/data/17.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d9612 as c5, d9613 as c6, d9614 as c7, d9615 as c8, d9616 as c9 } from '../descriptors/data/442.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d325 as d325 } from '../descriptors/data/17.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d325;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec348"]:c2(),["SharedCodec349"]:c3(),["SharedCodec350"]:c4(),["SharedCodec464"]:c5(),["SharedCodec465"]:c6(),["SharedCodec466"]:c7(),["SharedCodec467"]:c8(),["SharedCodec468"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
