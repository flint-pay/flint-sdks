import { d221 as c0 } from '../descriptors/data/12.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4924 as c2, d4916 as c5, d4917 as c6, d4918 as c7, d4919 as c8, d4920 as c9 } from '../descriptors/data/223.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4925 as c3, d4926 as c10, d4927 as c11, d4928 as c12, d4930 as c13, d4931 as c14 } from '../descriptors/data/224.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4416 as c4, d4417 as c17 } from '../descriptors/data/193.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d5007 as c15 } from '../descriptors/data/229.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3250 as c16 } from '../descriptors/data/130.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d221 as d221 } from '../descriptors/data/12.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d221;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionRequestCorrection"]:c0(),["MoneyValue"]:c1(),["ReturnReplacementLineItemRequest"]:c2(),["ReturnResolutionAdjustmentRequest"]:c3(),["ReturnResolutionLineItemRequest"]:c4(),["SharedCodec1104"]:c5(),["SharedCodec1105"]:c6(),["SharedCodec1106"]:c7(),["SharedCodec1107"]:c8(),["SharedCodec1108"]:c9(),["SharedCodec1109"]:c10(),["SharedCodec1110"]:c11(),["SharedCodec1111"]:c12(),["SharedCodec208"]:c13(),["SharedCodec209"]:c14(),["SharedCodec210"]:c15(),["SharedCodec38"]:c16(),["SharedCodec9"]:c17()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionRequestCorrection(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
