import { d3282 as c0 } from '../descriptors/data/130.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d3000 as c1 } from '../descriptors/data/114.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4515 as c2 } from '../descriptors/data/198.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d837 as c3 } from '../descriptors/data/36.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4523 as c4, d4524 as c5, d4526 as c6, d4527 as c7 } from '../descriptors/data/199.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d4566 as c8, d4567 as c9, d4568 as c10 } from '../descriptors/data/202.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { d837 as d837 } from '../descriptors/data/36.js?sdk=94d3dafcb454caf78a11dff3f62c8571a61273fd7185b71866d728c7984ecec1';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d837;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["PayOrderRequestPay"]:c3(),["PaymentSourceCredential"]:c4(),["SharedCodec1004"]:c5(),["SharedCodec1006"]:c6(),["SharedCodec1007"]:c7(),["SharedCodec970"]:c8(),["SharedCodec971"]:c9(),["SharedCodec972"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
