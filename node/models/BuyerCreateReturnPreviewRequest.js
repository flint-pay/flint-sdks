import { d56 as c0 } from '../descriptors/data/2.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9460 as c1 } from '../descriptors/data/431.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9496 as c2 } from '../descriptors/data/435.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9690 as c3, d9692 as c4, d9694 as c5, d9699 as c11, d9701 as c12, d9702 as c13, d9703 as c14 } from '../descriptors/data/448.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9710 as c6, d9708 as c16, d9709 as c18, d9711 as c19 } from '../descriptors/data/449.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9522 as c7, d9523 as c8, d9524 as c9, d9525 as c10 } from '../descriptors/data/438.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d9624 as c15, d9625 as c17 } from '../descriptors/data/443.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d56 as d56 } from '../descriptors/data/2.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d56;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec163"]:c7(),["SharedCodec164"]:c8(),["SharedCodec165"]:c9(),["SharedCodec166"]:c10(),["SharedCodec2669"]:c11(),["SharedCodec2671"]:c12(),["SharedCodec2672"]:c13(),["SharedCodec2673"]:c14(),["SharedCodec94"]:c15(),["SharedCodec95"]:c16(),["SharedCodec96"]:c17(),["SharedCodec97"]:c18(),["SharedCodec98"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
