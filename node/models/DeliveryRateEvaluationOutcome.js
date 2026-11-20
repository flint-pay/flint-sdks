import { d683 as c0 } from '../descriptors/data/38.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d690 as c1 } from '../descriptors/data/39.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c2 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1946 as c3, d1947 as c4, d1948 as c5, d1949 as c6 } from '../descriptors/data/96.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1950 as c7, d1951 as c8 } from '../descriptors/data/97.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8770 as c9, d8772 as c10, d8773 as c11, d8776 as c12 } from '../descriptors/data/393.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d683 as d683 } from '../descriptors/data/38.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d683;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationOutcome"]:c0(),["DeliveryRateEvaluationWindow"]:c1(),["MoneyValue"]:c2(),["SharedCodec1030"]:c3(),["SharedCodec1031"]:c4(),["SharedCodec1032"]:c5(),["SharedCodec1033"]:c6(),["SharedCodec1034"]:c7(),["SharedCodec1035"]:c8(),["SharedCodec200"]:c9(),["SharedCodec202"]:c10(),["SharedCodec203"]:c11(),["SharedCodec206"]:c12()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
