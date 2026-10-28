import { d3296 as c0 } from '../descriptors/data/131.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d3013 as c1 } from '../descriptors/data/116.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4532 as c2, d4534 as c3 } from '../descriptors/data/199.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d837 as c4 } from '../descriptors/data/36.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4539 as c5, d4540 as c6, d4541 as c7, d4542 as c8, d4543 as c9, d4544 as c10, d4545 as c11, d4546 as c12 } from '../descriptors/data/200.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d4579 as c13, d4580 as c14, d4581 as c15, d4582 as c16, d4583 as c17, d4584 as c18 } from '../descriptors/data/203.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { d837 as d837 } from '../descriptors/data/36.js?sdk=fac4b718d892e7da91e9078fbe8a70d0df1d443420d01e46d9daffedbb5651c4';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d837;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequest"]:c4(),["PaymentSourceCredential"]:c5(),["SharedCodec1009"]:c6(),["SharedCodec1010"]:c7(),["SharedCodec1011"]:c8(),["SharedCodec1012"]:c9(),["SharedCodec1013"]:c10(),["SharedCodec1014"]:c11(),["SharedCodec1015"]:c12(),["SharedCodec975"]:c13(),["SharedCodec976"]:c14(),["SharedCodec977"]:c15(),["SharedCodec979"]:c16(),["SharedCodec980"]:c17(),["SharedCodec981"]:c18()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
