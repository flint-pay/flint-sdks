import { d52 as c0 } from '../descriptors/data/2.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7278 as c1 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7324 as c2 } from '../descriptors/data/349.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7499 as c3, d7501 as c4, d7503 as c5, d7507 as c7, d7509 as c8, d7510 as c9, d7511 as c10, d7517 as c11 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7524 as c6, d7525 as c12 } from '../descriptors/data/361.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7444 as c13, d7445 as c14, d7446 as c15, d7447 as c16 } from '../descriptors/data/357.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d52 as d52 } from '../descriptors/data/2.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d52;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1456"]:c7(),["SharedCodec1458"]:c8(),["SharedCodec1459"]:c9(),["SharedCodec1460"]:c10(),["SharedCodec53"]:c11(),["SharedCodec54"]:c12(),["SharedCodec96"]:c13(),["SharedCodec97"]:c14(),["SharedCodec98"]:c15(),["SharedCodec99"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
