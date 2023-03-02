import { Denops } from "https://deno.land/x/denops_std@v4.0.0/mod.ts";

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async build(args: unknown): Promise<unknown> {
      const result = Deno.run({cmd: (args as Array<string>)});
      return await Promise.resolve(result);
    },
  };
}
