
import type { CustomerAccountDNSRecordInput } from './CustomerAccountDNSRecordInput.js';

export type CustomerAccountDomainStatusInput = { "dns_records": Array<CustomerAccountDNSRecordInput>; "domain_status": "provisioning" | "active" | "attention_required"; "hostname": string; /** RFC3339 timestamp. Format: date-time. */ "last_checked_at": string | globalThis.Date; };
