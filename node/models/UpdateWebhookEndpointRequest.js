import { d8515 as c0, d8516 as c5 } from '../descriptors/data/377.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d10725 as c1, d10726 as c2, d10727 as c3 } from '../descriptors/data/508.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7565 as c4 } from '../descriptors/data/321.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { d7565 as d7565 } from '../descriptors/data/321.js?sdk=abe56d712be8582bd6fe7e6a4f88e467c3974bdb0d8c7e6c49831dc69255cb96';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d7565;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["SharedCodec2994"]:c0(),["SharedCodec3114"]:c1(),["SharedCodec3115"]:c2(),["SharedCodec3116"]:c3(),["UpdateWebhookEndpointRequest"]:c4(),["WebhookSigningMethod"]:c5()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeUpdateWebhookEndpointRequest(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
