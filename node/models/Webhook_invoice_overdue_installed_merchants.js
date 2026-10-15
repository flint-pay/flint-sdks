import { d323 as c0, d903 as c1, d902 as c2, d979 as c3, d980 as c4 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d980 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d980;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["MoneyValue"]:c0(),["PartnerWebhookEnvelope"]:c1(),["SharedCodec252"]:c2(),["SharedCodec282"]:c3(),["Webhook_invoice_overdue_installed_merchants"]:c4()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeWebhook_invoice_overdue_installed_merchants(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
