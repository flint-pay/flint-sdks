import { d919 as c0, d918 as c1, d1521 as c2, d1516 as c3, d1518 as c4, d1517 as c5, d1519 as c6, d1520 as c7, d1543 as c8 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { d1543 } from '../descriptors/data.js?sdk=7603172525e41200d4f73e10915d0ae5669c2ee7108f266f11ac6495c50c1bfa';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d1543;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["PartnerWebhookEnvelope"]:c0(),["SharedCodec280"]:c1(),["SharedCodec403"]:c2(),["SharedCodec404"]:c3(),["SharedCodec405"]:c4(),["SharedCodec406"]:c5(),["SharedCodec407"]:c6(),["SharedCodec408"]:c7(),["Webhook_report_failed_installed_merchants"]:c8()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_report_failed_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
