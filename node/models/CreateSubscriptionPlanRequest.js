import { d236 as c0 } from '../descriptors/data/13.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3082 as c1 } from '../descriptors/data/120.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4085 as c2, d4086 as c16, d4087 as c17, d4088 as c18 } from '../descriptors/data/174.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c3 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3647 as c4, d3648 as c10, d3649 as c11, d3650 as c12, d3651 as c13 } from '../descriptors/data/150.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3251 as c5, d3254 as c14, d3250 as c15 } from '../descriptors/data/130.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5136 as c6, d5137 as c7, d5138 as c8, d5139 as c9 } from '../descriptors/data/235.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3216 as c19 } from '../descriptors/data/128.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5146 as c20 } from '../descriptors/data/236.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3043 as c21 } from '../descriptors/data/118.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d236 as d236 } from '../descriptors/data/13.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d236;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateSubscriptionPlanRequest"]:c0(),["ImageRequest"]:c1(),["InventoryRoutingSourceRequest"]:c2(),["MoneyValue"]:c3(),["OrderLineItemModifierRequest"]:c4(),["OrderLineItemTax"]:c5(),["SharedCodec1150"]:c6(),["SharedCodec1151"]:c7(),["SharedCodec1152"]:c8(),["SharedCodec1153"]:c9(),["SharedCodec168"]:c10(),["SharedCodec169"]:c11(),["SharedCodec170"]:c12(),["SharedCodec171"]:c13(),["SharedCodec37"]:c14(),["SharedCodec38"]:c15(),["SharedCodec859"]:c16(),["SharedCodec860"]:c17(),["SharedCodec861"]:c18(),["SubscriptionIntervalOption"]:c19(),["SubscriptionPlanLineItemRequest"]:c20(),["TextModifierRequest"]:c21()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateSubscriptionPlanRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
