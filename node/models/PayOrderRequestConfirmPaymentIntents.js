import { d3282 as c0 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4515 as c2, d4517 as c3 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d836 as c4 } from '../descriptors/data/36.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4526 as c5, d4527 as c6 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4566 as c7, d4567 as c8, d4568 as c9, d4569 as c10, d4570 as c11, d4571 as c12 } from '../descriptors/data/202.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d836 as d836 } from '../descriptors/data/36.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d836;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequestConfirmPaymentIntents"]:c4(),["SharedCodec1006"]:c5(),["SharedCodec1007"]:c6(),["SharedCodec970"]:c7(),["SharedCodec971"]:c8(),["SharedCodec972"]:c9(),["SharedCodec974"]:c10(),["SharedCodec975"]:c11(),["SharedCodec976"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
