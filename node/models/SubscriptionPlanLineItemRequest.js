import { d3013 as c0 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3647 as c1, d3648 as c7, d3649 as c8, d3650 as c9, d3651 as c10 } from '../descriptors/data/150.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3251 as c2, d3254 as c11, d3250 as c12 } from '../descriptors/data/130.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5136 as c3, d5137 as c4, d5138 as c5, d5139 as c6 } from '../descriptors/data/235.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5146 as c13 } from '../descriptors/data/236.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3043 as c14 } from '../descriptors/data/118.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5146 as d5146 } from '../descriptors/data/236.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d5146;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemModifierRequest"]:c1(),["OrderLineItemTax"]:c2(),["SharedCodec1150"]:c3(),["SharedCodec1151"]:c4(),["SharedCodec1152"]:c5(),["SharedCodec1153"]:c6(),["SharedCodec168"]:c7(),["SharedCodec169"]:c8(),["SharedCodec170"]:c9(),["SharedCodec171"]:c10(),["SharedCodec37"]:c11(),["SharedCodec38"]:c12(),["SubscriptionPlanLineItemRequest"]:c13(),["TextModifierRequest"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeSubscriptionPlanLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
