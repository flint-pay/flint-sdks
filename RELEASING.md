# Releasing the Flint SDKs

This repository publishes `@flintpay/node` to npm and `flintpay/flint` to Packagist. Both use the version in `spec/profiles/full-common-sdk.json` and a shared `vVERSION` Git tag. PHP uses the root Composer manifest; no distribution mirror is required.

The package version is independent of the `Flint-Version` API date. Compatible SDK fixes or additions still need a new package version when published; they do not require changing the API date. Never replace the contents of a published version.

## Official references

Release setup was checked against these official guides on September 10, 2026:

- [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/): OIDC, exact publisher fields, supported runners, and troubleshooting.
- [Packagist publishing and GitHub hooks](https://packagist.org/about): submitting the root Composer package, version tags, and automatic updates.
- [Composer versions](https://getcomposer.org/doc/articles/versions.md): version constraints and prereleases.

## One-time account setup

1. In the existing `@flintpay/node` npm package settings, configure a GitHub Actions trusted publisher: organization `flint-pay`, repository `flint-sdks`, workflow `release.yml`, environment `npm`. Allow direct `npm publish`. The workflow uses a GitHub-hosted runner and OIDC (`id-token: write`); no npm token is stored in this repository.
2. Create the `npm` GitHub environment. Apply whatever release controls the maintainers require. Trusted publishing requires npm 11.5.1+ and Node 22.14.0+; the workflow uses Node 24 and verifies the npm minimum. The npm organization scope is `flintpay`, while the GitHub organization is `flint-pay`.
3. Submit `https://github.com/flint-pay/flint-sdks` to Packagist for `flintpay/flint` after the root Composer manifest is on the default branch. Enable Packagist's GitHub integration/auto-update. Packagist reads the shared Git tags and derives the PHP version; leave the root manifest's `version` field absent.

The workflow file must be present on GitHub before publication. Publisher fields are case-sensitive: enter `release.yml`, not `.github/workflows/release.yml`. Saving the npm connection can require security-key authentication. The package's `repository.url` must identify `flint-pay/flint-sdks`, as the generated npm metadata does.

For Packagist, connect the publishing account to GitHub and ensure the integration can access `flint-pay`. After submitting the repository, check the package page for an auto-update warning; use the account's manual sync action if the hook was not installed. A manual package update is available if indexing is delayed.

Account setup and publication are separate from generation. Verify the npm connection and Packagist auto-update status in their account UIs before the first tag.

## Prepare a release PR

1. Update the package version in `spec/profiles/full-common-sdk.json`. Use a new version for every publication. Start with `0.2.0-beta.1`, which goes to npm's `next` tag. Stable versions go to `latest`.
2. If needed, update the pinned API or generator revision as described in `spec/README.md`. Use a full Git history with release tags (`git fetch origin --tags`).
3. Run:

   ```sh
   npm run setup
   npm run generate
   npm run validate
   npm test
   ```

4. Review the generated source, public interface, root Composer metadata, examples and migration notes. Run the relevant transaction workflows against the Flint sandbox separately. Commit the configuration, pinned inputs, `node/`, `php/`, `composer.json`, `LICENSE`, and `sdk-files.json` together.
5. Merge the PR after the SDK checks pass. The old handwritten 0.1.0 SDK has no compiled compatibility baseline; review that migration explicitly.

Generation preserves its private record under `.generated/sdk/.sdk-generator.json`. On a clean checkout, the scripts reconstruct the previous reachable release tag with that tag's pinned generator and inputs before generating the new version. This preserves compatibility checks across CI runs without committing private generation records or relying on artifact retention. Fetch all release tags; missing history can hide the previous baseline. If reconstructing an existing local output, a private backup is retained under `.generated/`.

The generator's `semver` policy runs during release preparation. Its findings cannot establish business compatibility; review unresolved findings and migration changes even if the gate passes. Breaking changes before 1.0 need the appropriate minor bump; prereleases can evolve before stabilization.

## Publish the reviewed commit

First confirm the version is unused in both registries and the release commit has passed CI on `main`. Fetch the remote branch and tag that exact reviewed commit, rather than the current workspace branch. For example, when `origin/main` is the reviewed release commit:

```sh
git fetch origin main --tags
git log -1 --oneline origin/main
git tag -a v0.2.0-beta.1 origin/main -m 'Flint SDKs 0.2.0-beta.1'
git push origin v0.2.0-beta.1
```

The `Publish SDKs` workflow checks that the tag matches the configured version and belongs to `main`, regenerates and validates, installs both public archives in clean consumers, uploads release artifacts, and publishes the exact checksummed npm tarball. Packagist independently indexes the same tag through its GitHub integration. Tag only reviewed, tested commits: Packagist can observe a tag before npm publication finishes.

Users install the beta with:

```sh
npm install @flintpay/node@next
composer require flintpay/flint:0.2.0-beta.1
```

Check publication explicitly:

```sh
gh run list --workflow release.yml --limit 5
npm view @flintpay/node@0.2.0-beta.1 version dist.integrity
npm view @flintpay/node dist-tags --json
composer show --all flintpay/flint 0.2.0-beta.1
```

Confirm the workflow succeeded, npm's `next` points to the beta, and Packagist shows the expected version and source commit. Test installation from both registries in a fresh consumer. Stable releases use `latest`; prereleases use `next` and must be requested explicitly by Composer consumers.

## Local preparation and manual npm publication

```sh
npm run release:prepare
# Inspect releases/0.2.0-beta.1/publication-plan.json and archives.
npm run release:publish -- releases/0.2.0-beta.1 --confirm-version 0.2.0-beta.1
```

The publish command needs an authenticated npm session or the configured GitHub OIDC environment. It uploads to npm. Preparation does not publish or create Git tags. You may prepare uncommitted changes for review, but publication requires a preparation from committed source.

`releases/VERSION/generator/` preserves the generator's archives, checksums, compatibility report, migration notes and documentation site. The top-level public npm archive adds this repository's npm metadata; the public PHP ZIP uses the root Composer layout. `publication-plan.json` checksums those two public archives. The scripts keep the original generator artifacts intact. The generated static site is an optional documentation artifact, not the Packagist distribution source; normal hosting deployment is still required to serve it.

Public archive installation tests verify npm imports, every outbound operation in both clients, numeric/model scenarios, and the root PHP autoloader. HTTP fixtures validate both generated clients, including alternate credentials, downloads, redirects and streaming scenarios. No live Flint requests are made by CI.

## Partial publication and retries

npm and Packagist do not publish atomically. If either fails, check its actual registry state before retrying. Never move a published tag or rebuild different contents under an existing version. Preserve the successful publication and retry only the failed destination. The workflow uploads reviewed artifacts before npm publication; download those artifacts for a manual retry if needed. `publication.json` records successful local npm publication.

GitHub release artifacts expire according to the workflow's retention policy; Git tags and source remain the durable release record. Attach public archives to a GitHub Release if permanent downloadable archives are desired. Private `.generated/`, `.tools/`, and `.context/` contents must never be uploaded.

If local preparation says `releases/VERSION` already exists, preserve it. Move an unpublished preparation to an ignored backup location before rebuilding from the final committed source. Do not publish an older preparation made before a generator update.

For an initial, unpublished release, an old local `.generated/sdk` record can also cause the SemVer gate to compare the release against an earlier draft with the same version. Keep that record for review and prepare from a fresh detached worktree, matching CI:

```sh
git worktree add --detach .context/release-check HEAD
npm run setup --prefix .context/release-check
npm run release:prepare --prefix .context/release-check
```

Use a new worktree path if that one already exists. This does not bypass published compatibility history: the scripts still reconstruct earlier release tags. For an already published version, bump the package version instead.

For npm authentication failures, check the exact repository/workflow/environment fields, `id-token: write`, the npm CLI minimum, and direct publishing permission. `npm whoami` does not test OIDC; authentication happens during publication. If Packagist is missing the tag, check its hook status and trigger a manual update before retrying anything on npm.
