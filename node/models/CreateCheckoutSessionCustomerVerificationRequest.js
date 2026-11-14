import { d207 as c0 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5957 as c1, d5958 as c2 } from '../descriptors/data/270.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d5968 as c3, d5969 as c4, d5970 as c5, d5971 as c6, d5972 as c7 } from '../descriptors/data/271.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { d207 as d207 } from '../descriptors/data/9.js?sdk=a086a23565c4993b78f348340a2a26cb0487877444f587a940a69a0f6d259868';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d207;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CreateCheckoutSessionCustomerVerificationRequest"]:c0(),["CreateCheckoutSessionUseSavedPaymentMethodsByEmailRequest"]:c1(),["CreateCheckoutSessionUseSavedPaymentMethodsByRememberedBuyerRequest"]:c2(),["SharedCodec196"]:c3(),["SharedCodec197"]:c4(),["SharedCodec198"]:c5(),["SharedCodec199"]:c6(),["SharedCodec200"]:c7()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionCustomerVerificationRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
