import { d893 as c0, d490 as c1, d892 as c2, d926 as c3, d920 as c4, d921 as c5, d924 as c6, d922 as c7, d923 as c8, d925 as c9, d927 as c10 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d927 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d927;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["SharedCodec170"]:c1(),["SharedCodec246"]:c2(),["SharedCodec259"]:c3(),["SharedCodec260"]:c4(),["SharedCodec261"]:c5(),["SharedCodec262"]:c6(),["SharedCodec263"]:c7(),["SharedCodec264"]:c8(),["SharedCodec265"]:c9(),["Webhook_order_fulfillment_package_created_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_order_fulfillment_package_created_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
