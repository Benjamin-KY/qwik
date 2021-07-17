import type { BuildConfig } from './util';
import { copyFile } from 'fs/promises';
import { basename, join } from 'path';

export async function copyFiles(config: BuildConfig) {
  const rootFiles = ['README.md', 'LICENSE'];

  await Promise.all(
    rootFiles.map((f) => {
      copyFile(join(config.rootDir, f), join(config.pkgDir, basename(f)));
    })
  );
}