import { d3296 as c0 } from '../descriptors/data/131.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4532 as c2 } from '../descriptors/data/199.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d839 as c3 } from '../descriptors/data/37.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4539 as c4, d4540 as c5, d4542 as c6, d4543 as c7 } from '../descriptors/data/200.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d4579 as c8, d4580 as c9, d4581 as c10 } from '../descriptors/data/203.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { d839 as d839 } from '../descriptors/data/37.js?sdk=f26e56e6a3e2880a8b32262ed776607c3be18e132e92afe40d992ddacf961f63';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d839;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["PayOrderRequestPay"]:c3(),["PaymentSourceCredential"]:c4(),["SharedCodec1009"]:c5(),["SharedCodec1011"]:c6(),["SharedCodec1012"]:c7(),["SharedCodec975"]:c8(),["SharedCodec976"]:c9(),["SharedCodec977"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestPay(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
