import { d7460 as c0, d7462 as c6, d7464 as c7, d7468 as c12, d7470 as c13, d7471 as c14, d7472 as c15, d7478 as c30 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d346 as c1 } from '../descriptors/data/21.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8342 as c2 } from '../descriptors/data/405.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6537 as c3, d6538 as c4 } from '../descriptors/data/298.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d5764 as c5 } from '../descriptors/data/255.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8363 as c8, d8364 as c9, d8365 as c21, d8366 as c22, d8367 as c23, d8368 as c24, d8369 as c26, d8370 as c28, d8371 as c29 } from '../descriptors/data/407.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7485 as c10, d7486 as c31 } from '../descriptors/data/355.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d6648 as c11 } from '../descriptors/data/305.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d8355 as c16, d8356 as c17, d8357 as c18, d8358 as c19, d8359 as c20, d8352 as c25, d8353 as c27 } from '../descriptors/data/406.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d346 as d346 } from '../descriptors/data/21.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d346;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateReturnEligibilityPreviewRequest"]:c0(),["CreateReturnPreviewRequestResolution"]:c1(),["CreateReturnResolutionPreviewRequest"]:c2(),["LineItemFulfillmentOriginRequestModel"]:c3(),["LineItemFulfillmentRequestModel"]:c4(),["MoneyValue"]:c5(),["ReturnEligibilityLineItemRequestModel"]:c6(),["ReturnEligibilitySelectionRequest"]:c7(),["ReturnReplacementLineItemRequest"]:c8(),["ReturnResolutionAdjustmentRequest"]:c9(),["ReturnResolutionLineItemRequest"]:c10(),["SharedCodec121"]:c11(),["SharedCodec1461"]:c12(),["SharedCodec1463"]:c13(),["SharedCodec1464"]:c14(),["SharedCodec1465"]:c15(),["SharedCodec1523"]:c16(),["SharedCodec1524"]:c17(),["SharedCodec1525"]:c18(),["SharedCodec1526"]:c19(),["SharedCodec1527"]:c20(),["SharedCodec1528"]:c21(),["SharedCodec1529"]:c22(),["SharedCodec1530"]:c23(),["SharedCodec398"]:c24(),["SharedCodec399"]:c25(),["SharedCodec400"]:c26(),["SharedCodec401"]:c27(),["SharedCodec402"]:c28(),["SharedCodec403"]:c29(),["SharedCodec53"]:c30(),["SharedCodec54"]:c31()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
