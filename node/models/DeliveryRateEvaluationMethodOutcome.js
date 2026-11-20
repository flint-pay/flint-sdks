import { d682 as c0, d683 as c1 } from '../descriptors/data/38.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d690 as c2 } from '../descriptors/data/39.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d7920 as c3 } from '../descriptors/data/343.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1946 as c4, d1947 as c5, d1948 as c6, d1949 as c7 } from '../descriptors/data/96.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d1950 as c8, d1951 as c9 } from '../descriptors/data/97.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d8770 as c10, d8772 as c11, d8773 as c12, d8776 as c13 } from '../descriptors/data/393.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { d682 as d682 } from '../descriptors/data/38.js?sdk=4332f5ca21c6bbffd15e6df46b751e70fcfa9bb8907edf04e783727091a6296b';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d682;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec1030"]:c4(),["SharedCodec1031"]:c5(),["SharedCodec1032"]:c6(),["SharedCodec1033"]:c7(),["SharedCodec1034"]:c8(),["SharedCodec1035"]:c9(),["SharedCodec200"]:c10(),["SharedCodec202"]:c11(),["SharedCodec203"]:c12(),["SharedCodec206"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
