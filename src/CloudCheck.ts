import { V4Address, V6Address } from "https://deno.land/x/ipaddr@2.0.0/mod.ts";

interface IResults {
  ip: string;
  cloudFlare: boolean;
}

enum IPType {
  IPV4,
  IPV6,
}

enum EndPoints {
  IPv4 = "https://www.cloudflare.com/ips-v4",
  IPv6 = "https://www.cloudflare.com/ips-v6",
}

export class CloudCheck {
  constructor() {}
  private async getIPS(ipType: IPType): Promise<string[]> {
    let IPs: string[];
    let response;
    switch (ipType) {
      case IPType.IPV4:
        response = await fetch(EndPoints.IPv4);
        break;
      case IPType.IPV6:
        response = await fetch(EndPoints.IPv6);
        break;
    }
    IPs = (await response.text()).split("\n");
    return IPs;
  }

  public async init() {
    console.log(
      await (await fetch("https://www.cloudflare.com/ips-v4")).text()
    );
  }
}
