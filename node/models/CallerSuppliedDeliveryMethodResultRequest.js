import { d8474 as c0, d8475 as c1, d8479 as c2, d8480 as c4, d8481 as c5, d8482 as c6, d8483 as c7, d8484 as c8, d8485 as c9, d8486 as c10 } from '../descriptors/data/375.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7640 as c3 } from '../descriptors/data/327.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8487 as c11, d8488 as c12, d8489 as c13, d8490 as c14 } from '../descriptors/data/376.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d8474 as d8474 } from '../descriptors/data/375.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d8474;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CallerSuppliedDeliveryMethodResultRequest"]:c0(),["CallerSuppliedDeliveryOutcomeRequest"]:c1(),["DeliveryWindowRequest"]:c2(),["MoneyValue"]:c3(),["SharedCodec191"]:c4(),["SharedCodec192"]:c5(),["SharedCodec193"]:c6(),["SharedCodec194"]:c7(),["SharedCodec195"]:c8(),["SharedCodec196"]:c9(),["SharedCodec197"]:c10(),["SharedCodec198"]:c11(),["SharedCodec199"]:c12(),["SharedCodec200"]:c13(),["SharedCodec201"]:c14()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCallerSuppliedDeliveryMethodResultRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
