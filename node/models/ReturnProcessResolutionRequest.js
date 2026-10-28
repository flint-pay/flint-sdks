import { d3013 as c0 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4971 as c1 } from '../descriptors/data/227.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4924 as c2, d4916 as c3, d4917 as c4, d4918 as c5, d4919 as c6, d4920 as c7 } from '../descriptors/data/223.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4926 as c8, d4927 as c9, d4928 as c10 } from '../descriptors/data/224.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5007 as c11 } from '../descriptors/data/229.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3250 as c12 } from '../descriptors/data/130.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4971 as d4971 } from '../descriptors/data/227.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4971;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["ReturnProcessResolutionRequest"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["SharedCodec1104"]:c3(),["SharedCodec1105"]:c4(),["SharedCodec1106"]:c5(),["SharedCodec1107"]:c6(),["SharedCodec1108"]:c7(),["SharedCodec1109"]:c8(),["SharedCodec1110"]:c9(),["SharedCodec1111"]:c10(),["SharedCodec210"]:c11(),["SharedCodec38"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeReturnProcessResolutionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
