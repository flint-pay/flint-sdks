import { d59 as c0 } from '../descriptors/data/2.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9555 as c1 } from '../descriptors/data/436.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9591 as c2 } from '../descriptors/data/440.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9787 as c3, d9789 as c4, d9791 as c5, d9807 as c6, d9796 as c11, d9798 as c12, d9799 as c13, d9800 as c14, d9806 as c15 } from '../descriptors/data/453.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9617 as c7, d9618 as c8, d9619 as c9, d9620 as c10 } from '../descriptors/data/443.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d9808 as c16 } from '../descriptors/data/454.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { d59 as d59 } from '../descriptors/data/2.js?sdk=4bd39e0afc590f9c2d1ce732a52fb628d9f934ea237d2b464d4157caa3c5129d';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d59;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec166"]:c7(),["SharedCodec167"]:c8(),["SharedCodec168"]:c9(),["SharedCodec169"]:c10(),["SharedCodec2704"]:c11(),["SharedCodec2706"]:c12(),["SharedCodec2707"]:c13(),["SharedCodec2708"]:c14(),["SharedCodec98"]:c15(),["SharedCodec99"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
