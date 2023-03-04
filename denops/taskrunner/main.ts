import { Denops } from "https://deno.land/x/denops_std@v4.0.0/mod.ts";

export type Args = {
  cmdstr: Array<string>;
  enable: boolean;
  logfile: string;
};

export async function main(denops: Denops): Promise<void> {
  denops.dispatcher = {
    async run(args: unknown): Promise<unknown> {
      if ((args as Args).enable) {
            const result = await Promise.resolve(Deno.run({ cmd: (args as Args).cmdstr }));
        if ((args as Args).logfile !== "") {
            Deno.writeTextFile((args as Args).logfile, new TextDecoder().decode(await result.output()));
        }
        return result;
     }
    },
  };
}
