import { d673 as c0, d674 as c1 } from '../descriptors/data/37.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d681 as c2 } from '../descriptors/data/38.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c3 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1878 as c4, d1879 as c5, d1880 as c6, d1881 as c7 } from '../descriptors/data/93.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d1882 as c8, d1883 as c9 } from '../descriptors/data/94.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8484 as c10, d8486 as c11 } from '../descriptors/data/375.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8487 as c12, d8490 as c13 } from '../descriptors/data/376.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d673 as d673 } from '../descriptors/data/37.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d673;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["DeliveryRateEvaluationMethodOutcome"]:c0(),["DeliveryRateEvaluationOutcome"]:c1(),["DeliveryRateEvaluationWindow"]:c2(),["MoneyValue"]:c3(),["SharedCodec1021"]:c4(),["SharedCodec1022"]:c5(),["SharedCodec1023"]:c6(),["SharedCodec1024"]:c7(),["SharedCodec1025"]:c8(),["SharedCodec1026"]:c9(),["SharedCodec195"]:c10(),["SharedCodec197"]:c11(),["SharedCodec198"]:c12(),["SharedCodec201"]:c13()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeDeliveryRateEvaluationMethodOutcome(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
