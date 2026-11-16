import { d7974 as c0, d7971 as c2, d7972 as c3, d7973 as c4 } from '../descriptors/data/348.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d244 as c1 } from '../descriptors/data/11.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7820 as c5, d7821 as c6, d7822 as c7 } from '../descriptors/data/339.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7842 as c8, d7843 as c9 } from '../descriptors/data/340.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d244 as d244 } from '../descriptors/data/11.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d244;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateCheckoutSessionReturnResolution"]:c1(),["SharedCodec341"]:c2(),["SharedCodec342"]:c3(),["SharedCodec343"]:c4(),["SharedCodec344"]:c5(),["SharedCodec345"]:c6(),["SharedCodec346"]:c7(),["SharedCodec359"]:c8(),["SharedCodec360"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateCheckoutSessionReturnResolution(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
