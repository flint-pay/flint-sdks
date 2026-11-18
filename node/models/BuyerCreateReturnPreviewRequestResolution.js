import { d57 as c0 } from '../descriptors/data/2.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9415 as c1 } from '../descriptors/data/424.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9465 as c2 } from '../descriptors/data/430.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9644 as c3, d9646 as c4, d9648 as c5, d9663 as c6, d9652 as c11, d9654 as c12, d9655 as c13, d9656 as c14, d9662 as c15, d9664 as c16 } from '../descriptors/data/441.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d9492 as c7, d9493 as c8, d9494 as c9, d9495 as c10 } from '../descriptors/data/433.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { d57 as d57 } from '../descriptors/data/2.js?sdk=22459f40165c8f83629c1309c0555e659f12bdc99933459ef8de8ac0e4796ba2';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d57;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec163"]:c7(),["SharedCodec164"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SharedCodec2668"]:c11(),["SharedCodec2670"]:c12(),["SharedCodec2671"]:c13(),["SharedCodec2672"]:c14(),["SharedCodec97"]:c15(),["SharedCodec98"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
