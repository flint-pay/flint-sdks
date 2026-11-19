import { d246 as c0 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8083 as c1, d8084 as c2 } from '../descriptors/data/353.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d8094 as c3, d8095 as c4, d8096 as c5, d8097 as c6, d8098 as c7 } from '../descriptors/data/354.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { d246 as d246 } from '../descriptors/data/11.js?sdk=43dc6c744919085ecdf80ac9d931a06e9a99dcbbc9a91ebe7e5477b1d820ee31';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d246;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c2(),["SharedCodec343"]:c3(),["SharedCodec344"]:c4(),["SharedCodec345"]:c5(),["SharedCodec346"]:c6(),["SharedCodec347"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
