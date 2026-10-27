import { d3282 as c0 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4515 as c2, d4517 as c3 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d835 as c4 } from '../descriptors/data/36.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4523 as c5, d4524 as c6, d4525 as c7, d4526 as c8, d4527 as c9, d4528 as c10, d4529 as c11, d4530 as c12 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4566 as c13, d4567 as c14, d4568 as c15, d4569 as c16, d4570 as c17, d4571 as c18 } from '../descriptors/data/202.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d835 as d835 } from '../descriptors/data/36.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d835;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec1004"]:c6(),["SharedCodec1005"]:c7(),["SharedCodec1006"]:c8(),["SharedCodec1007"]:c9(),["SharedCodec1008"]:c10(),["SharedCodec1009"]:c11(),["SharedCodec1010"]:c12(),["SharedCodec970"]:c13(),["SharedCodec971"]:c14(),["SharedCodec972"]:c15(),["SharedCodec974"]:c16(),["SharedCodec975"]:c17(),["SharedCodec976"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
