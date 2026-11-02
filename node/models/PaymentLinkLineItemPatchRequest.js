import { d4281 as c0 } from '../descriptors/data/180.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d4603 as c1 } from '../descriptors/data/198.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1057 as c2 } from '../descriptors/data/50.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6261 as c3, d6262 as c4, d6263 as c5 } from '../descriptors/data/291.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6287 as c6 } from '../descriptors/data/293.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6295 as c7, d6296 as c8, d6298 as c9, d6299 as c10, d6300 as c11, d6301 as c12 } from '../descriptors/data/294.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d6302 as c13, d6303 as c14 } from '../descriptors/data/295.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { d1057 as d1057 } from '../descriptors/data/50.js?sdk=d1fbdc9ae03748db4df89d58da8fba32d0ff2e9fa5c15cee69be90b031712c30';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1057;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemPatchRequest"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1001"]:c4(),["SharedCodec1002"]:c5(),["SharedCodec983"]:c6(),["SharedCodec991"]:c7(),["SharedCodec992"]:c8(),["SharedCodec994"]:c9(),["SharedCodec995"]:c10(),["SharedCodec996"]:c11(),["SharedCodec997"]:c12(),["SharedCodec998"]:c13(),["SharedCodec999"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemPatchRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
