import type { AppDatabase } from "@/db";

/** CAI&ET fork: shared mailboxes are always enabled (see lib/licenses/service.ts). */
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
