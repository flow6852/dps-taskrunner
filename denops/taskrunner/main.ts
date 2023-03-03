import { Denops } from "https://deno.land/x/denops_std@v4.0.0/mod.ts";

export type Args = {
  cmdstr: Array<string>;
  enable: boolean;
};

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async run(args: unknown): Promise<unknown> {
      if ((args as Args).enable) {
        const result = Deno.run({ cmd: (args as Args).cmdstr });
        return await Promise.resolve(result);
      }
    },
  };
}
