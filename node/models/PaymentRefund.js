import { d100 as c0, d323 as c1, d2013 as c2, d2014 as c3, d2015 as c4, d2017 as c5, d753 as c6 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d2013 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2013;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPaymentIntentSummary"]:c0(),["MoneyValue"]:c1(),["PaymentRefund"]:c2(),["PaymentSourceAchDebitSummary"]:c3(),["PaymentSourceCardSummary"]:c4(),["PaymentSourceSummary"]:c5(),["SharedCodec228"]:c6()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePaymentRefund(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
