import { d8342 as c0 } from '../descriptors/data/405.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6537 as c1, d6538 as c2 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c3 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8363 as c4, d8364 as c5, d8365 as c13, d8366 as c14, d8367 as c15, d8368 as c16, d8369 as c18, d8370 as c20, d8371 as c21 } from '../descriptors/data/407.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7485 as c6, d7486 as c22 } from '../descriptors/data/355.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6648 as c7 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8355 as c8, d8356 as c9, d8357 as c10, d8358 as c11, d8359 as c12, d8352 as c17, d8353 as c19 } from '../descriptors/data/406.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8342 as d8342 } from '../descriptors/data/405.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8342;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnResolutionPreviewRequest"]:c0(),["LineItemFulfillmentOriginRequestModel"]:c1(),["LineItemFulfillmentRequestModel"]:c2(),["MoneyValue"]:c3(),["ReturnReplacementLineItemRequest"]:c4(),["ReturnResolutionAdjustmentRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec121"]:c7(),["SharedCodec1523"]:c8(),["SharedCodec1524"]:c9(),["SharedCodec1525"]:c10(),["SharedCodec1526"]:c11(),["SharedCodec1527"]:c12(),["SharedCodec1528"]:c13(),["SharedCodec1529"]:c14(),["SharedCodec1530"]:c15(),["SharedCodec398"]:c16(),["SharedCodec399"]:c17(),["SharedCodec400"]:c18(),["SharedCodec401"]:c19(),["SharedCodec402"]:c20(),["SharedCodec403"]:c21(),["SharedCodec54"]:c22()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnResolutionPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
