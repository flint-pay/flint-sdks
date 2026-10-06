import { d179 as c0, d77 as c1, d1864 as c2, d1878 as c3, d2007 as c4, d1861 as c5, d1863 as c6, d1862 as c7, d2001 as c8, d2000 as c9 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { d2007 } from '../descriptors/data.js?sdk=ba066cb5d42061b50ddb74a9a955bfa66adbe16252255af2a884092ee5130eba';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2007;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutBuyerContactRequest"]:c0(),["MoneyValue"]:c1(),["OrderGiftCardAllocationAcceptance"]:c2(),["OrderPaymentIntentSelection"]:c3(),["PayOrderRequestConfirmPaymentIntents"]:c4(),["SharedCodec493"]:c5(),["SharedCodec494"]:c6(),["SharedCodec495"]:c7(),["SharedCodec519"]:c8(),["SharedCodec520"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayOrderRequestConfirmPaymentIntents(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
