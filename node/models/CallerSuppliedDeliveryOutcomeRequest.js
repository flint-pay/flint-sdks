import { d8773 as c0, d8777 as c1, d8778 as c3, d8779 as c4, d8780 as c5, d8781 as c6 } from '../descriptors/data/392.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d7928 as c2 } from '../descriptors/data/343.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8782 as c7, d8783 as c8, d8784 as c9, d8785 as c10, d8786 as c11, d8787 as c12, d8788 as c13 } from '../descriptors/data/393.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { d8773 as d8773 } from '../descriptors/data/392.js?sdk=6b6c9c7504997706af80698ebf5c1134152c5d05e2ad1b214f18b1a37d7a234e';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8773;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryOutcomeRequest"]:c0(),["DeliveryWindowRequest"]:c1(),["MoneyValue"]:c2(),["SharedCodec197"]:c3(),["SharedCodec198"]:c4(),["SharedCodec199"]:c5(),["SharedCodec200"]:c6(),["SharedCodec201"]:c7(),["SharedCodec202"]:c8(),["SharedCodec203"]:c9(),["SharedCodec204"]:c10(),["SharedCodec205"]:c11(),["SharedCodec206"]:c12(),["SharedCodec207"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryOutcomeRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
