import { d3013 as c0 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3251 as c1, d3254 as c8, d3250 as c9 } from '../descriptors/data/130.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4662 as c2 } from '../descriptors/data/207.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4681 as c3, d4682 as c4 } from '../descriptors/data/208.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4683 as c5, d4684 as c6, d4685 as c7 } from '../descriptors/data/209.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4662 as d4662 } from '../descriptors/data/207.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4662;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1003"]:c3(),["SharedCodec1004"]:c4(),["SharedCodec1005"]:c5(),["SharedCodec1006"]:c6(),["SharedCodec1007"]:c7(),["SharedCodec37"]:c8(),["SharedCodec38"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
