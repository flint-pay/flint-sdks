import { d911 as c0, d2104 as c1, d517 as c2, d910 as c3, d1516 as c4, d1518 as c5, d1517 as c6, d1519 as c7, d1520 as c8, d1515 as c9 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1515 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1515;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MerchantWebhookEnvelope"]:c0(),["Report"]:c1(),["SharedCodec197"]:c2(),["SharedCodec275"]:c3(),["SharedCodec404"]:c4(),["SharedCodec405"]:c5(),["SharedCodec406"]:c6(),["SharedCodec407"]:c7(),["SharedCodec408"]:c8(),["Webhook_report_succeeded_merchant"]:c9()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_succeeded_merchant(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
