import { d798 as c0, d799 as c1, d77 as c2, d2018 as c3, d888 as c4, d2014 as c5, d2015 as c6, d2016 as c7, d2017 as c8, d41 as c9, d226 as c10 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { d2018 } from '../descriptors/data.js?sdk=d22cce0575f7bd583ca524a14ee93e300c9f48000162d4e1926fedd9f4c37501';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2018;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec274"]:c4(),["SharedCodec525"]:c5(),["SharedCodec526"]:c6(),["SharedCodec527"]:c7(),["SharedCodec528"]:c8(),["SharedCodec6"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
