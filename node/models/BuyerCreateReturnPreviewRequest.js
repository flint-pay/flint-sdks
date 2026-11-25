import { d57 as c0 } from '../descriptors/data/2.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9555 as c1 } from '../descriptors/data/435.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9591 as c2 } from '../descriptors/data/439.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9787 as c3, d9789 as c4, d9791 as c5, d9807 as c6, d9796 as c11, d9798 as c12, d9799 as c13, d9800 as c14, d9805 as c16, d9806 as c18 } from '../descriptors/data/452.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9617 as c7, d9618 as c8, d9619 as c9, d9620 as c10 } from '../descriptors/data/442.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9720 as c15, d9721 as c17 } from '../descriptors/data/448.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d9808 as c19 } from '../descriptors/data/453.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { d57 as d57 } from '../descriptors/data/2.js?sdk=9fc2ad28758ecb3836861aa4a55c027f918b2a3c68d2a2ab563c8b7345819552';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d57;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec166"]:c7(),["SharedCodec167"]:c8(),["SharedCodec168"]:c9(),["SharedCodec169"]:c10(),["SharedCodec2704"]:c11(),["SharedCodec2706"]:c12(),["SharedCodec2707"]:c13(),["SharedCodec2708"]:c14(),["SharedCodec95"]:c15(),["SharedCodec96"]:c16(),["SharedCodec97"]:c17(),["SharedCodec98"]:c18(),["SharedCodec99"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
