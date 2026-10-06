import { d798 as c0, d799 as c1, d77 as c2, d2017 as c3, d888 as c4, d2013 as c5, d2014 as c6, d2015 as c7, d2016 as c8, d41 as c9, d226 as c10 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { d2017 } from '../descriptors/data.js?sdk=23304d0710327c07c2c4a303230dbb22d6b14f651af3363cdef910b4916b65b9';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d2017;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["ExpandedPayoutDestinationSummary"]:c0(),["ExpandedPayoutSummary"]:c1(),["MoneyValue"]:c2(),["Payout"]:c3(),["SharedCodec274"]:c4(),["SharedCodec524"]:c5(),["SharedCodec525"]:c6(),["SharedCodec526"]:c7(),["SharedCodec527"]:c8(),["SharedCodec6"]:c9(),["SignedMoney"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makePayout(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
