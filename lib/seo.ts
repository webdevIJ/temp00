// Simple metadata helper - customize per client
import type { Metadata } from "next";
import config from "./config";

export const SITE_NAME = config.businessName;

export function buildPageTitle(pageTitle?: string): string {
  return pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
}
