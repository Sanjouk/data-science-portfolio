import { authorsMetaValue, projectMeta } from '../config/projectMeta';

function upsertMetaTag(name, content) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export function applyProjectMetadata() {
  upsertMetaTag('project-description', projectMeta.description);
  upsertMetaTag('description', projectMeta.description);
  upsertMetaTag('author', authorsMetaValue);
  upsertMetaTag('version', projectMeta.version);
  upsertMetaTag('project-comment', projectMeta.comment);
}

export function setSEO(title, description) {
  document.title = title
    ? `${title} | ${projectMeta.titleSuffix}`
    : projectMeta.siteName;

  upsertMetaTag('description', description || projectMeta.description);
}
