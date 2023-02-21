import { Denops } from "https://deno.land/x/denops_std@v4.0.0/mod.ts";
import { split } from "https://deno.land/x/denops_std@v4.0.0/function/mod.ts";

export type Args = {
  cmpcmd: string;
};

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async build(args: unknown): Promise<unknown> {
      const result = Deno.run({cmd: (args as Args).split(' ')});
      return await Promise.resolve(result);
    },
  };
}
