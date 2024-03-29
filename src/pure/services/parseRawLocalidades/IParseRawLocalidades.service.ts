import { Result } from "@/pure/kinds/Result.ts";

export type ParseRawLocalidadesService<E> = (
  source: string,
  dest: string,
) => Promise<Result<void, E>>;
