import { d27 as c0 } from '../descriptors/data/1.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4486 as c1 } from '../descriptors/data/198.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4534 as c2 } from '../descriptors/data/204.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4644 as c3, d4645 as c4, d4646 as c5, d4648 as c7, d4649 as c8, d4650 as c9, d4651 as c10 } from '../descriptors/data/209.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4658 as c6, d4653 as c11, d4659 as c12 } from '../descriptors/data/210.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4617 as c13, d4618 as c14, d4619 as c15, d4620 as c16 } from '../descriptors/data/208.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d27 as d27 } from '../descriptors/data/1.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d27;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequestResolution"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1141"]:c7(),["SharedCodec1142"]:c8(),["SharedCodec1143"]:c9(),["SharedCodec1144"]:c10(),["SharedCodec16"]:c11(),["SharedCodec17"]:c12(),["SharedCodec40"]:c13(),["SharedCodec41"]:c14(),["SharedCodec42"]:c15(),["SharedCodec43"]:c16()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequestResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
