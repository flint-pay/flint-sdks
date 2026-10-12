import { d901 as c0, d2083 as c1, d900 as c2, d1537 as c3, d1534 as c4, d1533 as c5, d1535 as c6, d1536 as c7, d1538 as c8 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { d1538 } from '../descriptors/data.js?sdk=f52d30b14a1c286c1efe9a110f4087e084c68c57774eb8c111836fdb26fbef01';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1538;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["PublicDownload"]:c1(),["SharedCodec251"]:c2(),["SharedCodec384"]:c3(),["SharedCodec385"]:c4(),["SharedCodec386"]:c5(),["SharedCodec387"]:c6(),["SharedCodec388"]:c7(),["Webhook_report_succeeded_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
