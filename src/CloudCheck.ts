import { V4Address, V6Address } from "https://deno.land/x/ipaddr@2.0.0/mod.ts";

interface IResults {
  ip: string;
  cloudFlare: boolean;
  ipType: IPType;
}

interface ICloudFlareIPs {
  IPV4: string[];
  IPV6: string[];
}

enum EndPoints {
  IPv4 = "https://www.cloudflare.com/ips-v4",
  IPv6 = "https://www.cloudflare.com/ips-v6",
}

enum IPType {
  IPV4,
  IPV6,
  NONE
}

type Targets = string | string[];

export class CloudCheck {
  constructor() {}

  public async check(targets: Targets): Promise<IResults[]> {
    const IPs: ICloudFlareIPs = await this.getIPS();
  }

  private getIPsType(targets: Targets): IResults[] {
    let results: IResults[];
    return results;
  }

  private async getIPS(): Promise<ICloudFlareIPs> {
    const IPV4: string = await (await fetch(EndPoints.IPv4)).text();
    const IPV6: string = await (await fetch(EndPoints.IPv6)).text();
    const IPs: ICloudFlareIPs = {
      IPV4: IPV4.split("\n"),
      IPV6: IPV6.split("\n"),
    };
    return IPs;
  }
}
