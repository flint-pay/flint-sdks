import { d7918 as c0 } from '../descriptors/data/342.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8267 as c1, d8260 as c3 } from '../descriptors/data/364.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1497 as c2 } from '../descriptors/data/75.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d10218 as c4, d10223 as c5, d10224 as c6 } from '../descriptors/data/477.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d1497 as d1497 } from '../descriptors/data/75.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1497;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTaxRequest"]:c1(),["PaymentLinkLineItemInputCustomFixed"]:c2(),["PlatformFeeMoney"]:c3(),["SharedCodec2143"]:c4(),["SharedCodec2148"]:c5(),["SharedCodec2149"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemInputCustomFixed(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
