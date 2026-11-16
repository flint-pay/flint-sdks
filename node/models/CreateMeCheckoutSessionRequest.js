import { d7974 as c0, d7971 as c2, d7972 as c3, d7973 as c4 } from '../descriptors/data/348.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d316 as c1 } from '../descriptors/data/16.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9291 as c5 } from '../descriptors/data/424.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d9292 as c6, d9293 as c7, d9294 as c8, d9295 as c9 } from '../descriptors/data/425.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d316 as d316 } from '../descriptors/data/16.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d316;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["CheckoutRedirectsRequest"]:c0(),["CreateMeCheckoutSessionRequest"]:c1(),["SharedCodec341"]:c2(),["SharedCodec342"]:c3(),["SharedCodec343"]:c4(),["SharedCodec458"]:c5(),["SharedCodec459"]:c6(),["SharedCodec460"]:c7(),["SharedCodec461"]:c8(),["SharedCodec462"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeCreateMeCheckoutSessionRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
