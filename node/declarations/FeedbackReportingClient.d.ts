


export type FeedbackReportingClient = { /** minLength: 1. maxLength: 64. */ "name": string; "platform"?: "macos" | "linux" | "windows" | "ios" | "android" | "web" | "other" | (string & {}); /** minLength: 1. maxLength: 64. */ "schema_version"?: string; /** minLength: 1. maxLength: 64. */ "version"?: string; };
