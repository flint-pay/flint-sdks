import { d52 as c0 } from '../descriptors/data/2.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7239 as c1 } from '../descriptors/data/337.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7285 as c2 } from '../descriptors/data/344.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7460 as c3, d7462 as c4, d7464 as c5, d7468 as c7, d7470 as c8, d7471 as c9, d7472 as c10, d7478 as c11 } from '../descriptors/data/354.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7485 as c6, d7486 as c12 } from '../descriptors/data/355.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d7406 as c13, d7407 as c14, d7408 as c15, d7409 as c16 } from '../descriptors/data/351.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { d52 as d52 } from '../descriptors/data/2.js?sdk=c88d88b1719b9f2decbd8c74ee867ec101acb4e1842f99af49cca6264b80d5d0';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d52;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1461"]:c7(),["SharedCodec1463"]:c8(),["SharedCodec1464"]:c9(),["SharedCodec1465"]:c10(),["SharedCodec53"]:c11(),["SharedCodec54"]:c12(),["SharedCodec96"]:c13(),["SharedCodec97"]:c14(),["SharedCodec98"]:c15(),["SharedCodec99"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
