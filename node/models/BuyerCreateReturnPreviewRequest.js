import { d50 as c0 } from '../descriptors/data/2.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7278 as c1 } from '../descriptors/data/343.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7324 as c2 } from '../descriptors/data/349.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7499 as c3, d7501 as c4, d7503 as c5, d7507 as c7, d7509 as c8, d7510 as c9, d7511 as c10, d7516 as c12, d7517 as c14 } from '../descriptors/data/360.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7524 as c6, d7525 as c15 } from '../descriptors/data/361.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d7438 as c11, d7439 as c13, d7444 as c16, d7445 as c17, d7446 as c18, d7447 as c19 } from '../descriptors/data/357.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d50 as d50 } from '../descriptors/data/2.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d50;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequestModel"]:c4(),["ReturnEligibilitySelectionRequest"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1456"]:c7(),["SharedCodec1458"]:c8(),["SharedCodec1459"]:c9(),["SharedCodec1460"]:c10(),["SharedCodec50"]:c11(),["SharedCodec51"]:c12(),["SharedCodec52"]:c13(),["SharedCodec53"]:c14(),["SharedCodec54"]:c15(),["SharedCodec96"]:c16(),["SharedCodec97"]:c17(),["SharedCodec98"]:c18(),["SharedCodec99"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
