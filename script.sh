#!/bin/bash

# A script to perform incremental backups using rsync

set -o errexit
set -o nounset
set -o pipefail

readonly SOURCE_DIR="/Users/10063690/Documents/rsync-test2/source"
readonly BACKUP_DIR="/Users/10063690/Documents/rsync-test2/backups"
readonly DATETIME="$(date '+%Y%m%d_%H%M')"
readonly BACKUP_PATH="${BACKUP_DIR}/${DATETIME}"
readonly LATEST_LINK="${BACKUP_DIR}/latest"

mkdir -p "${BACKUP_DIR}"

rsync -av --delete "${SOURCE_DIR}/" --link-dest "${LATEST_LINK}" --exclude=".DS_Store" "${BACKUP_PATH}"

rm -rf "${LATEST_LINK}"
ln -s "${BACKUP_PATH}" "${LATEST_LINK}"
