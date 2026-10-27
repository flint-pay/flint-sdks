import { d3000 as c0 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3237 as c1, d3240 as c6, d3236 as c7 } from '../descriptors/data/129.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4646 as c2 } from '../descriptors/data/206.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4665 as c3, d4666 as c4, d4667 as c5 } from '../descriptors/data/207.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4676 as c8, d4677 as c9 } from '../descriptors/data/208.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4646 as d4646 } from '../descriptors/data/206.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d4646;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["OrderLineItemTax"]:c1(),["PaymentLinkLineItemRequest"]:c2(),["SharedCodec1000"]:c3(),["SharedCodec1001"]:c4(),["SharedCodec1002"]:c5(),["SharedCodec33"]:c6(),["SharedCodec34"]:c7(),["SharedCodec998"]:c8(),["SharedCodec999"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentLinkLineItemRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
