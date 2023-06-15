import { access, constants } from 'node:fs/promises';

async function isTargetExists(path) {
  let isExists

  try {
      await access(path, constants.F_OK)
      isExists = true
  } catch {
      isExists = false
  }

  return isExists
}

export {isTargetExists}