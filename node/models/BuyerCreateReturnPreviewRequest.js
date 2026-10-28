import { d25 as c0 } from '../descriptors/data/0.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4486 as c1 } from '../descriptors/data/198.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4534 as c2 } from '../descriptors/data/204.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4644 as c3, d4645 as c4, d4646 as c5, d4648 as c7, d4649 as c8, d4650 as c9, d4651 as c10, d4652 as c12 } from '../descriptors/data/209.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4658 as c6, d4653 as c14, d4659 as c15 } from '../descriptors/data/210.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4558 as c11, d4573 as c13 } from '../descriptors/data/206.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d4617 as c16, d4618 as c17, d4619 as c18, d4620 as c19 } from '../descriptors/data/208.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { d25 as d25 } from '../descriptors/data/0.js?sdk=194b876b01c2554c1bd60c273767aef1ba2f61ae9b1052b5a6e20187b96e1abc';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d25;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["BuyerCreateReturnPreviewRequest"]:c0(),["BuyerCreateReturnResolutionPreviewRequest"]:c1(),["BuyerReturnReplacementLineItemRequest"]:c2(),["CreateReturnEligibilityPreviewRequest"]:c3(),["ReturnEligibilityLineItemRequest"]:c4(),["ReturnEligibilitySelection"]:c5(),["ReturnResolutionLineItemRequest"]:c6(),["SharedCodec1141"]:c7(),["SharedCodec1142"]:c8(),["SharedCodec1143"]:c9(),["SharedCodec1144"]:c10(),["SharedCodec13"]:c11(),["SharedCodec14"]:c12(),["SharedCodec15"]:c13(),["SharedCodec16"]:c14(),["SharedCodec17"]:c15(),["SharedCodec40"]:c16(),["SharedCodec41"]:c17(),["SharedCodec42"]:c18(),["SharedCodec43"]:c19()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeBuyerCreateReturnPreviewRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
