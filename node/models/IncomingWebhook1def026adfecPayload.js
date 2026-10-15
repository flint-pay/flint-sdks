import { d981 as c0, d898 as c1, d323 as c2, d903 as c3, d500 as c4, d897 as c5, d902 as c6, d977 as c7, d979 as c8, d980 as c9, d978 as c10 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { d981 } from '../descriptors/data.js?sdk=e3d9889159843c7c48c93704fe031dc30213693cb8266d78ea7ca38cc46462af';
import { lazyCodec, preparedCodec } from '../descriptor-source.js';
const read = d981;
let prepared;
function codec() { return prepared ??= preparedCodec(read(), {["IncomingWebhook1def026adfecPayload"]:c0(),["MerchantWebhookEnvelope"]:c1(),["MoneyValue"]:c2(),["PartnerWebhookEnvelope"]:c3(),["SharedCodec176"]:c4(),["SharedCodec250"]:c5(),["SharedCodec252"]:c6(),["SharedCodec281"]:c7(),["SharedCodec282"]:c8(),["Webhook_invoice_overdue_installed_merchants"]:c9(),["Webhook_invoice_overdue_merchant"]:c10()}); }
export { codec as _validate };
import { modelFromCodec } from '../runtime.js';
export function makeIncomingWebhook1def026adfecPayload(value) { return modelFromCodec(value, {...codec(), constraints: true}); }
